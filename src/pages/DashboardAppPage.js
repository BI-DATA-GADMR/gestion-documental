import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';
import { useAuth } from '../context/supaContex';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();
  const { user } = useAuth();
  console.log(user)
  return (
    <>
      <Helmet>
        <title> GADPCH 4.O </title>
      </Helmet>

      <Container maxWidth="xl" style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
  <iframe
    title="Descripción del contenido del iframe"
    src="https://lookerstudio.google.com/embed/reporting/4db410b6-8585-4eb5-9d0e-61a64541fae5/page/p_mm4aqcfs5c"
    style={{ border: 0, width: '100%', flex: 1,  
  }}
    allowfullscreen
    
/>
</Container>



    </>
  );
}
