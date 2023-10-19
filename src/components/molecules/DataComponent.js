import React from "react";
import { ListCardItem } from "@/components/atoms";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const DataComponent = ({ data }) => {

  return (
    <Grid container spacing={2} mt={5}>
      {data.map((item) => (
        <Grid xs={6} lg={4} key={item.name}>
          <ListCardItem {...{ ...item }} />
        </Grid>
      ))}
    </Grid>
  );
};

export default DataComponent;
