import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from "./Card";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Item><Card/></Item>
      </Grid>
      <Grid item xs={4}>
        <Item><Card/></Item>
      </Grid>
      <Grid item xs={4}>
        <Item><Card/></Item>
      </Grid>
    </React.Fragment>
  );
}

export default function NestedGrid() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={7}>
        <Grid container item spacing={7}>
          <FormRow />
        </Grid>
        <Grid container item spacing={7}>
          <FormRow />
        </Grid>
        <Grid container item spacing={7}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}
