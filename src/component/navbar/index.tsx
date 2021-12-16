import { GitHub } from "@/asset";
import { Description, Hexile } from "..";
import { LinkWrapper } from "./style";

export const NavBar = () => {
  return (
    <Hexile y="center" x="space" fillx>
      <Hexile gap={4}>
        <Description>MEAT IN</Description>
        <Description>Discoding</Description>
      </Hexile>
      <img src={GitHub} />
    </Hexile>
  );
};
