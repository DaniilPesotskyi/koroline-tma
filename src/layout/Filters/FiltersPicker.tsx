import React, {useEffect, useMemo, useState} from "react";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {useSearchParams} from "react-router-dom";

import {FILTER_LABELS} from "@/constants/filtersLabels.ts";

import {getProductsFilters} from "@/api/products.ts";

import {FiltersToRenderType} from "@/layout/Filters/Filters.tsx";

import {useTelegram} from "@/hooks";

import {FILTERS_QUERY_KEY} from "@/constants/queryKeys.ts";

import CloseButton from "@/layout/CloseButton/CloseButton.tsx";

import {
    PickerButton,
    PickerHeader,
    PickerList,
    PickerSubtitle,
    SearchBar,
    SearchBarWrap
} from "@/layout/Filters/styles.ts";

interface IFiltersPickerProps {
    onClose: () => void
    filter: keyof FiltersToRenderType;
}

const FiltersPicker: React.FC<IFiltersPickerProps> = ({onClose, filter}) => {
    const queryClient = useQueryClient();

    const [searchParams, setSearchParams] = useSearchParams();

    const {
        addMainButtonHandler,
        addBackButtonHandler,
        showBackButton,
        hideBackButton,
        showMainButton,
        hideMainButton,
    } = useTelegram()

    const currentValues = searchParams.getAll(filter);
    const [selectedFilters, setSelectedFilters] = useState<string[]>(currentValues)

    const initialFilters = queryClient.getQueryData<FiltersToRenderType>([FILTERS_QUERY_KEY])

    const querySearchParams = new URLSearchParams(searchParams.toString())
    querySearchParams.delete(filter)

    const {data: filters} = useQuery({
        queryKey: [FILTERS_QUERY_KEY, querySearchParams.toString()],
        queryFn: async () => await getProductsFilters(querySearchParams.toString())
    })

    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        document.body.classList.add('no-scroll')
        const unsubscribeBackButton = addBackButtonHandler(onClose)
        showBackButton()
        return () => {
            hideBackButton()
            hideMainButton()
            unsubscribeBackButton()
            document.body.classList.remove('no-scroll')
        }
    }, [])

    const acceptFilters = () => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.delete(filter);
        selectedFilters.forEach(val => newParams.append(filter, val));
        setSearchParams(newParams);
        onClose();
    };

    useEffect(() => {
        const isChanged = JSON.stringify([...selectedFilters].sort()) !== JSON.stringify([...currentValues].sort());

        const unsubscribeMainButton = addMainButtonHandler(acceptFilters, 'ЗАСТОСУВАТИ')

        if (isChanged) {
            showMainButton()
        } else {
            hideMainButton()
        }

        return () => {
            unsubscribeMainButton()
        }

    }, [selectedFilters, currentValues])

    const toggleItem = (value: string) => {
        setSelectedFilters(prev =>
            prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
    };

    const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
    }

    const allFilters = useMemo(() => {
        if (filter === 'articles') {
            return initialFilters?.[filter].map(item => item.article) ?? []
        }
        return initialFilters?.[filter] ?? []
    }, [initialFilters, filter]);

    const availableFilters = useMemo(() => {
        if (filter === 'articles') {
            return filters?.[filter].map(item => item.article) ?? []
        }
        return filters?.[filter] ?? []
    }, [filters, filter]);

    const filtersToRender = useMemo(() => {
        return [...allFilters]
            .filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
            .sort((a) =>
                availableFilters.includes(a) ? -1 : 1
            );
    }, [allFilters, availableFilters, searchQuery]);

    if (!initialFilters || !filters) return null;

    return (
        <>
            <PickerHeader>
                {FILTER_LABELS[filter]}
                <PickerSubtitle>Оберіть необхідні фільтри</PickerSubtitle>
                <CloseButton onClick={onClose}/>
            </PickerHeader>
            <SearchBarWrap>
                <SearchBar
                    placeholder={'Пошук по фільтру'}
                    value={searchQuery}
                    onChange={handleSearchQueryChange}
                />
            </SearchBarWrap>
            <PickerList>
                {filtersToRender.map(filter => (
                    <PickerButton
                        key={filter}
                        onClick={() => toggleItem(filter)}
                        active={selectedFilters.includes(filter)}
                        disabled={!availableFilters.includes(filter)}
                    >

                        {filter}
                    </PickerButton>
                ))}
            </PickerList>
        </>
    )
}

export default FiltersPicker