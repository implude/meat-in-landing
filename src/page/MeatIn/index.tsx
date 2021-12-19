import { MeatInLogo, PlayStore } from "@/asset";
import { MeatInMockup } from "@/asset/image";
import { NavBar, SectionHeader, Subheader, Text, Vexile } from "@/component";
import { Feature, Landing } from "./partial";

export const MeatIn = () => {
  return (
    <Vexile padding={3} x="center" gap={6}>
      <NavBar />
      <Landing y="center" gap={24} linebreak>
        <Vexile gap={2}>
          <Subheader
            css={{
              opacity: 0.4,
            }}
          >
            고기에 미치다
          </Subheader>
          <img
            style={{
              width: "40rem",
            }}
            src={MeatInLogo}
          />
          <Text>세상 모든 고기를 위한 오직 하나의 고기앱</Text>
          <img
            style={{
              width: "20rem",
            }}
            src={PlayStore}
          />
        </Vexile>
        <img src={MeatInMockup} />
      </Landing>
      <Vexile x="center" gap={6}>
        <SectionHeader>미트인은?</SectionHeader>
        <Feature>
          <Vexile fillx />
          <Vexile gap={5} fillx>
            <Vexile gap={1}>
              <Subheader>134개의 엄선한 레시피, 쉬운 고기 굽기</Subheader>
              <Text>
                3명의 고기 전문가가 함께 연구해낸 최고의 레시피로 즐겨보세요.
                거기에 더해 식약처에서 제공받은 1318개의 레시피중 엄선된 고기
                레시피 134개를 무료로 제공합니다.
              </Text>
            </Vexile>
            <Vexile gap={1}>
              <Subheader>우리 집 앞 고기 맛집</Subheader>
              <Text>
                제휴한 고기집의 환경에 맞춰 특별하게 제작된 레시피로 온전한
                고기의 가치를 느껴보세요.
              </Text>
            </Vexile>
            <Vexile gap={1}>
              <Subheader>찐 고기 덕후들의 찐한 고기 얘기</Subheader>
              <Text>
                고기 커뮤니티에서 내가 오늘 구운 고기를 자랑하고, 다른 사람의
                고기에 좋아요를 누르며 고기 애호가들과 이야기를 나눌 수 있어요
              </Text>
            </Vexile>
          </Vexile>
        </Feature>
      </Vexile>
    </Vexile>
  );
};
