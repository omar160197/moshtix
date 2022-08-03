import { Box, CircularProgress, Divider, Drawer, List, ListItem } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMoshtixFeed } from "../../store/artistSlice/artistSlice";
import styles from './home.module.css'
const Home = () => {
    const dispatch =useDispatch()
    const {feeds,isLoading} =useSelector((state)=>state.artist)


    useEffect(()=>{
    dispatch(getMoshtixFeed())
    },[])

    const myListItem=feeds.map((value, index)=> {
        return( <ListItem sx={{paddingY:"0.4%"}} key={index} >
        <a  
        href={value.link}
        style={{width:"100%",display:"flex"}}>
         <div><img style={{height:"100%"}} src={value.enclosure['@url']} alt="" /></div>
         <div className={styles.container}>
             <p>{value['moshtix:eventfinishdatetime']}</p>
             <p style={{fontSize:"20px"}}>{value.title}</p>
             <p className={styles.tickets}>Tickets</p> 
             </div>  
        </a>
        </ListItem>)
    })

  return (
    <Box
      sx={{
        width: "100%",
        height: '100%',
        bgcolor: "#F1EDEA",
        minHeight:"100vh",
       
      }}    
    >
      <> 
      {isLoading ? 
       <CircularProgress size={60} sx={{marginY:"30%",marginX:"50%",color:"#E6562E"}}/>:
       <List sx={{width:"100%"}}>
       {myListItem}
     </List>
      }
      </>
    </Box>
  );
};

export default Home;
