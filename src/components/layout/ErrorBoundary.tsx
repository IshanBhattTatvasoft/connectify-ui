"use client";

import images from "@/assets";
import { RouterURLs } from "@/utils/constants";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  dashboardHandler = () => {
    window.location.href = RouterURLs.FEED;
  };
  // componentDidMount(): void {
  //     document.title = `${tabHeaderNames.TITLE} ${tabHeaderNames.SOMETHING_WENT_WRONG}`;
  // }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="no-found-data-context">
          <div className="info-page-image-context">
            <Image
              src={images.connSomethingWentWrongIcon}
              height={200}
              width={270}
              alt={"Image"}
            />
          </div>
          <div className="info-heading">
            <Typography variant="h5">{"Something went wrong"}</Typography>
          </div>
          <div className="info-subheading">
            <Typography className="body1" variant="body1">
              {"We’re having trouble while loading the page."}
            </Typography>
          </div>
          <div className="content-center">
            <Button
              onClick={this.dashboardHandler}
              className="back-to-dashboard-btn"
            >
              <Typography variant="button" className="btn-content">
                {"Go to feed"}
              </Typography>
            </Button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
