import { Container, Grid, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
/* eslint-disable import/no-unresolved */
import image002 from '../../@assets/images/002.jpg?sizes[]=600,sizes[]=900&useResponsiveLoader=true';
import image002webp from '../../@assets/images/002.jpg?sizes[]=600,sizes[]=900&format=webp&useResponsiveLoader=true';
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
                {/* Pictures */}
                <picture>
                  <source
                    srcSet={image002webp.srcSet}
                    type="image/webp"
                    sizes="100vw"
                  />
                  <img
                    src={image002.src}
                    srcSet={image002.srcSet}
                    width="100%"
                    sizes="100vw"
                    loading="lazy"
                    alt="Introduction"
                  />
                </picture>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MainViewResponsive;
