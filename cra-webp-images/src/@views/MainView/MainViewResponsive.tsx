import { Container, Grid, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
/* eslint-disable import/no-unresolved */
import image001 from '../../@assets/images/001.jpg?as=webp';
import image002 from '../../@assets/images/002.jpg?as=webp';
/* eslint-enable import/no-unresolved */

const MainViewResponsive = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={3}
          //  style={{ padding: 3 }}
        >
          <Grid item xs={12}>
            <Box sx={{ mb: 1 }}>
              <Paper elevation={3}>
                <img src={image002} alt="house" width="100%" />
                <img src={image001} alt="garden" width="100%" />
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MainViewResponsive;
