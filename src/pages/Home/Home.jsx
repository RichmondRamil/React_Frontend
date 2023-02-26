import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import {
  BannerImage,
  SocialPopularity,
  ActivityTimeline,
  WebsiteStatistics,
  MeetingSchedule,
} from "../../components";
import {
  Conure,
  Cockateil,
  Facebook,
  Tiktok,
  Twitter,
  Instagram,
} from "../../assets";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <BannerImage
                image={Conure}
                birdname="Sun Conure"
                eggs="329"
                sales="gain"
                percent="+87%"
                desc="Pairs of Sunconure laid an eggs this month"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <BannerImage
                image={Cockateil}
                birdname="Cockatiel"
                eggs="104"
                sales="loss"
                percent="-24%"
                desc="Pairs of Cockateil laid an eggs this month"
              />
            </Grid>
            <Grid item md={6} lg={3}>
              <SocialPopularity
                socials="Facebook"
                ratings="145k"
                percentClass="gain"
                percent="+67%"
                update="New Likes"
                socialClass="facebook"
                date="Year of 2022"
                socialImage={Facebook}
                name="Richmond"
                position="Social Media Marketing"
              />
            </Grid>
            <Grid item md={6} lg={3}>
              <SocialPopularity
                socials="Twiiter"
                ratings="28k"
                percentClass="gain"
                percent="+23%"
                update="Retweet"
                socialClass="twitter"
                date="Last Month"
                socialImage={Twitter}
                name="Jerson"
                position="Social Media Marketing"
              />
            </Grid>
            <Grid item md={6} lg={3}>
              <SocialPopularity
                socials="Instagram"
                ratings="98k"
                percentClass="gain"
                percent="+59%"
                update="New Followers"
                socialClass="instagram"
                date="This Months"
                socialImage={Instagram}
                name="Fernand"
                position="Social Media Marketing"
              />
            </Grid>
            <Grid item md={6} lg={3}>
              <SocialPopularity
                socials="Tiktok"
                ratings="3.5k"
                percentClass="loss"
                percent="-17%"
                update="Unfollowers"
                socialClass="tiktok"
                date="Last week"
                socialImage={Tiktok}
                name="Jolie"
                position="Social Media Marketing"
              />
            </Grid>
            <Grid item sm={12} md={6} lg={4}>
              <ActivityTimeline />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <WebsiteStatistics />
            </Grid>
            <Grid item xs={12} md={12} lg={4}>
              <MeetingSchedule />
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Home;
