import React from 'react'
import { Select, Option, Input, Button } from "@material-tailwind/react";
const SearchCard = () => {
  return (
    <div className="bg-white  w-76 md:w-[450px] rounded-xl shadow-lg shadow-gray-900 p-4 md:py-6 ">
      <div className="flex w-48 flex-wrap md:flex-nowrap gap-6">
        <Select label="Select Version" primary>
          <Option>Material Tailwind HTML</Option>
          <Option>Material Tailwind React</Option>
          <Option>Material Tailwind Vue</Option>
          <Option>Material Tailwind Angular</Option>
          <Option>Material Tailwind Svelte</Option>
        </Select>
        <Select label="Select Version" primary>
          <Option>Material Tailwind HTML</Option>
          <Option>Material Tailwind React</Option>
          <Option>Material Tailwind Vue</Option>
          <Option>Material Tailwind Angular</Option>
          <Option>Material Tailwind Svelte</Option>
        </Select>
      </div>
      <div className="w-full mt-4">
        <Input type="date" label="Trip Date" />
      </div>
      <div className="flex justify-center">
        <Button size="sm" className="mt-4 bg-[rgba(4,72,108,0.94)]">
          Find Tickets
        </Button>
      </div>
    </div>
  );
}

export default SearchCard