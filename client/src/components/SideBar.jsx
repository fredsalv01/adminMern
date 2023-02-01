import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import profileImage from "../assets/profile.jpg";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  SettingsOutlined,
  HomeOutlined,
  AccountBoxOutlined,
  ExitToAppOutlined,
  ChevronLeftOutlined,
  ChevronRightOutlined,
  ShoppingBagOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutline,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Client Facing",
    icon: null,
  },
  {
    text: "Products",
    icon: <ShoppingBagOutlined />,
  },
  {
    text: "Customers",
    icon: <Groups2Outlined />,
  },
  {
    text: "Transactions",
    icon: <ReceiptLongOutlined />,
  },
  {
    text: "Geography",
    icon: <PublicOutlined />,
  },
  {
    text: "Sales",
    icon: null,
  },
  {
    text: "Overview",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Daily",
    icon: <TodayOutlined />,
  },
  {
    text: "Monthly",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Breakdown",
    icon: <PieChartOutline />,
  },
  {
    text: "Management",
    icon: null,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: "Performance",
    icon: <TrendingUpOutlined />,
  },
];

const SideBar = ({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="flex-start" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    ECOMVISION
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeftOutlined sx={{ marginLeft: "10px" }} />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map((item, index) => {
                if (item.icon) {
                  return (
                    <ListItem
                      key={index}
                      disablePadding
                      onClick={() => navigate(`/${item.text.toLowerCase()}`)}
                      sx={{
                        backgroundColor:
                          active === item.text.toLowerCase()
                            ? theme.palette.secondary[500]
                            : "transparent",
                        // borderRadius: "0.5rem",
                        "&:hover": {
                          backgroundColor: theme.palette.grey[500],
                        },
                      }}
                    >
                      <ListItemButton>
                        <ListItemIcon
                          sx={{
                            ml: "1rem",
                            color:
                              active === item.text.toLowerCase()
                                ? theme.palette.grey[100]
                                : theme.palette.secondary[200],
                          }}
                        >
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText
                          sx={{
                            color:
                              active === item.text.toLowerCase()
                                ? theme.palette.grey[100]
                                : theme.palette.secondary[200],
                          }}
                          primary={item.text}
                        />
                        {active === item.text.toLowerCase() && (
                          <ChevronRightOutlined
                            sx={{
                              ml: "auto",
                              color: theme.palette.grey[100],
                            }}
                          />
                        )}
                      </ListItemButton>
                    </ListItem>
                  );
                } else {
                  return (
                    <Typography key={item.text} sx={{ m: "1rem 0 1rem 1rem" }}>
                      {item.text}
                    </Typography>
                  );
                }
              })}
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default SideBar;
