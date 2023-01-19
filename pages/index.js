import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../components/Header/Header';
import Grid from '@mui/material/Grid'
import CssBaseline from '@mui/material/CssBaseline'
import List from '../components/List/List';
import Map from '../components/Map/Map';
import PlaceDetails from '../components/PlaceDetails/PlaceDetails';
import styles from '../styles/Home.module.css' ;
export default function Home() {
  return (
    <>
    <CssBaseline/>
    <Header/>
    <Grid container spacing={3} style={{width:'100%'}}>
      <Grid item xs={12} md={4}>
        <List/>
      </Grid>
      <Grid item xs={12} md={8}>
        <Map/>
      </Grid>
    </Grid>
    </>
  )
}