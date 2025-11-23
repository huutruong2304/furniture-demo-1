'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from '@/components/ui/select';
import { FilterIcon, XIcon } from 'lucide-react';
import ColorSwatch from '@/components/custom/color-swatch';
import FilterCheckbox from '@/components/custom/filter/filter-checkbox';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebounceCallback } from '@/hooks/use-debounce-callback';

enum FilterType {
  CATEGORY = 'category',
  MATERIAL = 'material',
  STYLE = 'style',
  COLOR = 'color',
  MIN_PRICE = 'minPrice',
  MAX_PRICE = 'maxPrice',
  PER_PAGE = 'perPage',
  SORT_BY = 'sortBy',
}

const ROOM_CATEGORIES: FilterItem[] = [
  { value: 'bedroom', title: 'Bedroom', count: 10 },
  { value: 'living-room', title: 'Living Room', count: 5 },
  { value: 'dining-room', title: 'Dining Room', count: 3 },
  { value: 'kitchen', title: 'Kitchen', count: 2 },
  { value: 'office', title: 'Office', count: 10 },
];

const ROOM_MATERIALS: FilterItem[] = [
  { value: 'wood', title: 'Wood', count: 10 },
  { value: 'metal', title: 'Metal', count: 5 },
  { value: 'plastic', title: 'Plastic', count: 3 },
  { value: 'fabric', title: 'Fabric', count: 2 },
  { value: 'leather', title: 'Leather', count: 10 },
];

const ROOM_STYLES: FilterItem[] = [
  { value: 'modern', title: 'Modern', count: 10 },
  { value: 'contemporary', title: 'Contemporary', count: 5 },
  { value: 'classic', title: 'Classic', count: 3 },
  { value: 'minimalist', title: 'Minimalist', count: 2 },
  { value: 'eclectic', title: 'Eclectic', count: 10 },
];

const ROOM_COLORS: FilterItem[] = [
  { value: 'white', title: 'White', count: 10 },
  { value: 'black', title: 'Black', count: 5 },
  { value: 'gray', title: 'Gray', count: 3 },
  { value: 'red', title: 'Red', count: 2 },
  { value: 'blue', title: 'Blue', count: 10 },
];

const PER_PAGE_OPTIONS = ['12', '24', '36'];
const SORT_BY_OPTIONS: { title: string; value: string }[] = [
  { title: 'Newest', value: 'newest' },
  { title: 'Price: Low to High', value: 'price-asc' },
  { title: 'Price: High to Low', value: 'price-desc' },
];

const DEFAULT_SORT_BY = SORT_BY_OPTIONS[0].value;
const DEFAULT_PER_PAGE = PER_PAGE_OPTIONS[0];

const FilterSection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [showFilterPanel, setShowFilterPanel] = useState<boolean>(false);
  const [sliderValue, setSliderValue] = useState<number[]>([0, 1000]);
  const [checkboxValue, setCheckboxValue] = useState<{ [key: string]: string[] }>({});
  const [perPage, setPerPage] = useState<string>(DEFAULT_PER_PAGE);
  const [sortBy, setSortBy] = useState<string>(DEFAULT_SORT_BY);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    setSliderValue([
      parseInt(newSearchParams.get(FilterType.MIN_PRICE) || '0'),
      parseInt(newSearchParams.get(FilterType.MAX_PRICE) || '1000'),
    ]);
    setCheckboxValue({
      [FilterType.CATEGORY]: newSearchParams.getAll(FilterType.CATEGORY),
      [FilterType.MATERIAL]: newSearchParams.getAll(FilterType.MATERIAL),
      [FilterType.STYLE]: newSearchParams.getAll(FilterType.STYLE),
      [FilterType.COLOR]: newSearchParams.getAll(FilterType.COLOR),
    });
    setPerPage(newSearchParams.get(FilterType.PER_PAGE) || DEFAULT_PER_PAGE.toString());
    setSortBy(newSearchParams.get(FilterType.SORT_BY) || DEFAULT_SORT_BY);
  }, []);

  const toggleFilter = () => {
    setShowFilterPanel(!showFilterPanel);
  };

  // handle checkbox
  const updateCheckboxUrl = useDebounceCallback((key: string, value: string, checked: boolean) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    const currentValues = newSearchParams.getAll(key);

    if (checked) {
      newSearchParams.append(key, value);
    } else if (currentValues.includes(value)) {
      newSearchParams.delete(key, value);
    }

    router.push(`${pathname}?${newSearchParams.toString()}`, { scroll: false });
  }, 100);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCheckboxChange = (type: string, value: string, checked: boolean) => {
    setCheckboxValue((prev) => ({
      ...prev,
      [type]: checked
        ? [...(prev[type] || []), value]
        : (prev[type] || [])?.filter((item) => item !== value),
    }));
    updateCheckboxUrl(type, value, checked);
  };

  // handle pricing
  const updateSliderUrl = useDebounceCallback((values: number[]) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    newSearchParams.set('minPrice', values[0].toString());
    newSearchParams.set('maxPrice', values[1].toString());

    router.push(`${pathname}?${newSearchParams.toString()}`, { scroll: false });
  }, 500);

  const handleSliderChange = (values: number[]) => {
    setSliderValue(values);
    updateSliderUrl(values);
  };

  // handle dropdown
  const handleDropdownChange = (type: string, value: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    newSearchParams.set(type, value);

    router.push(`${pathname}?${newSearchParams.toString()}`, { scroll: false });
  };

  // handle per page
  const handlePerPageChange = (value: string) => {
    setPerPage(value);
    handleDropdownChange(FilterType.PER_PAGE, value);
  };

  // handle sort by
  const handleSortByChange = (value: string) => {
    setSortBy(value);
    handleDropdownChange(FilterType.SORT_BY, value);
  };

  const isActiveFilter = useMemo(() => {
    return (
      sliderValue[0] !== 0 ||
      sliderValue[1] !== 1000 ||
      Object.keys(checkboxValue).some((key) => checkboxValue[key].length > 0) ||
      perPage !== DEFAULT_PER_PAGE ||
      sortBy !== DEFAULT_SORT_BY
    );
  }, [sliderValue, checkboxValue, perPage, sortBy]);

  // handle reset filter
  const resetFilter = () => {
    setSliderValue([0, 1000]);
    setCheckboxValue({});
    setPerPage(DEFAULT_PER_PAGE);
    setSortBy(DEFAULT_SORT_BY);

    // reset url
    router.push(`${pathname}`, { scroll: false });
  };

  return (
    <div className="bg-primary/20 py-2">
      <div className="app-container flex justify-between">
        <div className="flex items-center">
          <Button
            variant={'link'}
            size={'sm'}
            className="text-black cursor-pointer"
            onClick={toggleFilter}
          >
            <FilterIcon className="text-xl" />
            Filter
          </Button>
          |
          <Button
            variant={'link'}
            size={'sm'}
            className={`text-destructive cursor-pointer ${
              !isActiveFilter && 'opacity-50 text-black select-none'
            }`}
            onClick={resetFilter}
          >
            <XIcon className="text-xl" />
            Reset filter
          </Button>
          |<p className="ml-2 text-sm ">Showing 1-12 of 20 results</p>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-sm">Show</p>
          <Select onValueChange={handlePerPageChange} value={perPage}>
            <SelectTrigger className="w-20 border-gray-500">
              <SelectValue placeholder="Select items per page" />
            </SelectTrigger>
            <SelectContent>
              {/* Options would go here */}
              <SelectGroup>
                <SelectLabel>Items Per Page</SelectLabel>
                {PER_PAGE_OPTIONS.map((value) => (
                  <SelectItem key={value} value={value}>
                    {value}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <p className="text-sm">Sort By</p>
          <Select onValueChange={handleSortByChange} value={sortBy}>
            <SelectTrigger className="w-52 border-gray-500">
              <SelectValue placeholder="Select sort by" />
            </SelectTrigger>
            <SelectContent>
              {/* Options would go here */}
              <SelectGroup>
                <SelectLabel>Sort By</SelectLabel>
                {SORT_BY_OPTIONS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.title}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div
        className={`app-container transition-all duration-300 delay-100 ease-in-out overflow-hidden ${
          showFilterPanel ? 'h-40' : 'h-0 opacity-0'
        } `}
      >
        <aside id="filter-panel" className="grid grid-cols-5 gap-4 py-5">
          <div>
            <h3 className="font-semibold">Room Type & Category</h3>
            <div className="flex flex-col gap-2 mt-2">
              {ROOM_CATEGORIES.map((item) => (
                <FilterCheckbox
                  key={item.value}
                  type={FilterType.CATEGORY}
                  value={item.value}
                  title={item.title}
                  count={item.count}
                  onChange={handleCheckboxChange}
                  checked={!!checkboxValue[FilterType.CATEGORY]?.includes(item.value)}
                />
              ))}
            </div>
          </div>

          {/* material */}
          <div>
            <h3 className="font-semibold">Material</h3>
            <div className="flex flex-col gap-2 mt-2">
              {ROOM_MATERIALS.map((item) => (
                <FilterCheckbox
                  key={item.value}
                  type={FilterType.MATERIAL}
                  value={item.value}
                  title={item.title}
                  count={item.count}
                  onChange={handleCheckboxChange}
                  checked={!!checkboxValue[FilterType.MATERIAL]?.includes(item.value)}
                />
              ))}
            </div>
          </div>

          {/* style */}
          <div>
            <h3 className="font-semibold">Style</h3>
            <div className="flex flex-col gap-2 mt-2">
              {ROOM_STYLES.map((item) => (
                <FilterCheckbox
                  key={item.value}
                  type={FilterType.STYLE}
                  value={item.value}
                  title={item.title}
                  count={item.count}
                  onChange={handleCheckboxChange}
                  checked={!!checkboxValue[FilterType.STYLE]?.includes(item.value)}
                />
              ))}
            </div>
          </div>

          {/* colors */}
          <div>
            <h3 className="font-semibold">Color</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {ROOM_COLORS.map((item) => (
                <ColorSwatch
                  key={item.value}
                  type={FilterType.COLOR}
                  value={item.value}
                  checked={!!checkboxValue[FilterType.COLOR]?.includes(item.value)}
                  onChange={handleCheckboxChange}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold">
              Price range: ${sliderValue[0]} - ${sliderValue[1]}{' '}
            </h3>
            <div className="flex flex-col gap-2 mt-2">
              <Slider
                defaultValue={sliderValue}
                value={sliderValue}
                step={1}
                min={0}
                max={1000}
                onValueChange={handleSliderChange}
              />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default FilterSection;
