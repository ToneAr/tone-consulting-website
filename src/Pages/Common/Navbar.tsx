import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { Link } from "react-router-dom";

import {
  useHref,
  useLinkClickHandler,
  useNavigate,
} from "react-router-dom";


interface IPageObjArray {
    page: string;
    key: string;
};
const pageObjectArray: Array<IPageObjArray> = [
    {page:'CV',
        key:'CV'
    },
    {page:'Projects',
        key:'Projects'
    },
    {page:'Blog',
        key:'Blog'
    }
];

function Navbar() {
  const navigate = useNavigate();
  return (
    <AppBar position="static" >
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
          <Link to="/" style={{textDecoration: 'none',}}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              TONE
            </Typography>       
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
            {pageObjectArray.map((obj) => (

                <Button
                  key={obj.key}
                  onClick={()=>
                    navigate(obj.page)
                  }
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {obj.key}
                </Button>

            ))}

          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;