import { Grid, Typography, useTheme } from "@mui/material";
import axios from 'axios';
import {PageBox, DisplayPanel, PageStack} from '../../Common/CommonElements';
import React, { useEffect } from "react";
// import { secret as amplifySecret } from '@aws-amplify/backend';

function secret(key: string) {
  return (
    true
    // import.meta.env.NODE_ENV === 'test'
    // || import.meta.env.DEV
  ) ? import.meta.env[`VITE_${key}`]
      : ''
}

export default function Projects() {
  const theme = useTheme();
  const [ghData, setGhData] = React.useState<any[] | null>(null);

  useEffect(() => {
    document.title = "TONE : Projects";
    window.scrollBy(0, 100);
  }, []);

  useEffect(() => {
    const getGhData = async () => {
      return await axios.get('https://api.github.com/user/repos', {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${secret('GH_TOKEN')}`,
          'X-GitHub-Api-Version': '2022-11-28'
        }
      }).then((res) => {
        setGhData(res.data);
        return res;
      });
    };
    getGhData();
  }, [setGhData])

  return (
    <PageBox>
        
        <PageStack>

          <DisplayPanel>

            <Typography variant='h1'>
              Projects
            </Typography>

            <Typography variant='body1'>
              Public projects on my GitHub
            </Typography>

          </DisplayPanel>

          <Grid container spacing={5} sx={{width: "90%"}}>
            {ghData ? 
             ghData.map((o)=>{
              return (o.private ? null :
                <Grid item xs={6}>
                  <DisplayPanel sx={{width: "90%", p: 0, overflow: 'hidden' }}>
                   <a className={theme.palette.mode === "dark" ? 'darkLink' : 'link'} href={o.html_url}><Typography variant="h3">{o.name}</Typography></a>
                   <Typography variant="h6">{o.description}</Typography>
                  </DisplayPanel>
                </Grid>
              );
             }) :
             null
            }
          </Grid>

        </PageStack>

    </PageBox>
  );
  }