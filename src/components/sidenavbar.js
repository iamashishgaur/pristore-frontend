import { BiHomeCircle, BiPieChartAlt, BiFileFind } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { BsFillBagHeartFill } from "react-icons/bs";

import { CgProfile } from "react-icons/cg";
import { MdPayments } from "react-icons/md";

export const Icons = () => {
  <>
    <BiHomeCircle />
    <BiPieChartAlt />
  </>;
};

export const Sidenavbardata = [
  {
    id: 1,
    navname: "Profile Information",
    icon: <CgProfile />,
    path: "/profile",
  },
  {
    id: 2,
    navname: "Manage Address",
    icon: <ImLocation />,
    path: "/shipping",
  },
  {
    id: 3,
    navname: "My Order",
    icon: <BsFillBagHeartFill />,
    path: "/my-orders",
  },
  {
    id: 4,
    navname: "Payment Details",
    icon: <MdPayments />,
    path: "/payment",
  },
  {
    id: 5,
    navname: "My Wishlist",
    icon: <AiOutlineHeart />,
    path: "",
  },
];
