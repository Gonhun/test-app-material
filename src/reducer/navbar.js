import DashboardIcon from "@material-ui/icons/Dashboard";
import BarChartIcon from "@material-ui/icons/BarChart";
import SettingIcon from "@material-ui/icons/Settings";

const initialMenu = {
  menu: [
    { id: "1", name: "Home", sortId:"1", navIcon: <DashboardIcon /> },
    {
      id: "2",
      name: "Report",
      sortId:"1",
      navIcon: <BarChartIcon />,
      navChild: [
        { id: "1", sortId: "2", name: "statements" },
        { id: "2", sortId: "2", name: "reports" },
      ],
    },
    {
      id: "3",
      name: "Settings",
      sortId:"1",
      navIcon: <SettingIcon />,
      navChild: [
        { id: "1", sortId: "2", name: "profile" },
        { id: "2", sortId: "2", name: "insurance" },
        {
          id: "3",
          sortId: "2",
          name: "notifications",
          navChild: [
            { id: "1", sortId: "3", name: "email" },
            {
              id: "2",
              sortId: "3",
              name: "desktop",
              navChild: [
                { id: "1", sortId: "4", name: "schedule" },
                { id: "2", sortId: "4", name: "frequency" },
              ],
            },
            { id: "333", sortId: "3", name: "sms" },
          ],
        },
      ],
    },
  ],
  SetOpen: true,
};

const navbars = (state = initialMenu) => {
  return state;
};

export default navbars;
