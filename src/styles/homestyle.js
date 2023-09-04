import { styled } from "styled-components";
// HomeBannerWrapper css
export const HomeBannerWrapper = styled.div`
  .main-banner-content {
    top: 10%;
    left: 5%;
  }
  .main-banner-content h4 {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: var(--text-color);
    margin: 0 0 12px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  .main-banner-content h5 {
    font-size: 42px;
    font-weight: 500;
    padding: 0;
    line-height: 54px;
    letter-spacing: 0px;
    text-transform: none;
  }
  .main-banner-content p {
    font-size: 18px;
    color: var(--text-color);
    line-height: 28px;
    letter-spacing: 0.4px;
  }

  /* small banner css */
  .small-banner-content {
    top: 25%;
    left: 7%;
  }
  .small-banner-content h4 {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: var(--text-color);
    margin: 0 0 12px;
    letter-spacing: 0.3px;
    text-transform: uppercase;
  }
  .small-banner-content h5 {
    font-size: 22px;
    font-weight: 500;
    padding: 0;
    line-height: 34px;
    letter-spacing: 0px;
    text-transform: none;
  }
  .small-banner-content p {
    font-size: 14px;
    color: var(--text-color);
    line-height: 22px;
    letter-spacing: 0.4px;
  }
  .small-banner {
    width: 49%;
  }
`;
// HomeServiceWrapper css
export const HomeServiceWrapper = styled.div`
  background-color: var(--homeWrapper-color);
`;
// HomeCategoryWrapper css
export const HomeCategoryWrapper = styled.div`
  background-color: white;
  box-shadow: 0 0 10px #0000001a;
  padding: 15px;
  .category > div {
    width: 25%;
    padding: 10px 10px 10px 20px;
  }
  .category > div > div {
    width: 60%;
  }
  .category > div:nth-child(1),
  .category > div:nth-child(2),
  .category > div:nth-child(3),
  .category > div:nth-child(4) {
    border-bottom: 1px solid var(--category-border);
  }
  .category > div:nth-child(1),
  .category > div:nth-child(2),
  .category > div:nth-child(3) {
    border-right: 1px solid var(--category-border);
  }
  .category > div:nth-child(5),
  .category > div:nth-child(6),
  .category > div:nth-child(7) {
    border-right: 1px solid var(--category-border);
  }
`;
// HomeFeaturedWrapper css
export const HomeFeaturedWrapper = styled.div`
  background-color: var(--homeWrapper-color);
`;
// HomeFamousWrapper css
export const HomeFamousWrapper = styled.div`
  background-color: var(--homeWrapper-color);
  .famous-content {
    top: 5%;
    left: 5%;
  }
  .famous-card img {
    border-radius: 10px;
  }
  .famous-content h5 {
    font-size: 13px;
    line-height: 20px;
    font-weight: 400;
    color: white;
    margin-bottom: 7px;
    text-transform: uppercase;
  }
  .famous-content h6 {
    font-size: 20px;
    line-height: 38px;
    font-weight: 500;
    color: white;
  }
  .famous-content p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 100;
    color: white;
  }
`;
// HomeSpecialWrapper css
export const HomeSpecialWrapper = styled.div`
  background-color: var(--homeWrapper-color);
`;
// HomePopularWrapper css
export const HomePopularWrapper = styled.div`
  background-color: var(--homeWrapper-color);
`;
// HomeCompanyNameMarquee css
export const HomeCompanyNameMarquee = styled.div``;
