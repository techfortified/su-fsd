"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { LoadingSkeleton, SortComponent } from "@/components/atoms";
import { getData } from "@/lib";
import useSWR from "swr";
import { sortByCreatedAt, sortByNameAZ, sortByNameZA, sortedItems } from "@/utils";
import { Typography } from "@mui/material";
import { DataComponent } from "@/components/molecules";


export default function Home() {
  const [sortBy, setSortBy] = React.useState(sortedItems[0].name);
  const [sortedData, setSortedData] = React.useState([])
  const { data, error, isLoading } = useSWR("/api/", getData);

  const handleItemChange = (event) => {
    const value =  event.target.value
    if (value === "nameASC") {
      setSortedData(sortByNameAZ(data));
    } else if (value === "nameDESC") {
      setSortedData(sortByNameZA(data));
    } else {
      setSortedData(sortByCreatedAt(data));
    }
    setSortBy(value);
  };

  if (error) {
    return <Box sx={{ mx: 20, my: 2 }}><Typography sx={{textAlign: 'center', py: 10}} variant="h4">Failed to Load Data</Typography></Box>;
  }
  if (isLoading) {
    return <Box sx={{ mx: 20, my: 2 }}><LoadingSkeleton /></Box>
  }

  const currentData = sortedData.length === 0 ? sortByCreatedAt(data) : sortedData

  return (
    <main>
      <Box>
        <Box sx={{ mx: 20, my: 5 }}>
          <Typography sx={{my: 2, textAlign: 'center'}} variant="h4">Data Fetching & Data Sorting In Nextjs Using SWR</Typography>
          {/* select tag */}
          <SortComponent sortBy={sortBy} handleItemChange={handleItemChange} />
          {/* show data */}
          <DataComponent data={currentData} />
        </Box>
      </Box>
    </main>
  );
}
