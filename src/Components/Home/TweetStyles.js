import styled from "styled-components/native";

//#e7e9ea; cor do padrão
//#71767b; cinza
//#1d9bf0; azul
//#2f3336; borda
//#f91880; like

export const TweetContainer = styled.View`
  max-height: 550px;
  max-width: 600px;
  background-color: black;
  margin-right: 15px;
  margin-left: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: normal;
  align-content: normal;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const TweetColumn = styled.View`
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
  min-width: 40px;
  width: ${(props) => props.width};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "0px")};
`;

export const TweetText = styled.Text`
  color: ${(props) => props.color ? props.color : ""};
  font-size: 15px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
  display: inline-flex;
  margin-right: ${(props) => props.marginRight};
`;

export const TweetProfilePhotoContainer = styled.View`
  height: 40px;
  width: 40px;
  margin-top: 10px;
  style: ${(props) => (props.style ? props.style : "")};
`;

export const TweetImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "0%")};
`;

export const TweetDetailsContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: normal;
  align-items: normal;
  align-content: normal;
  margin-top: 10px;
`;

export const TweetMediaContainer = styled.View`
  width: 100%;
  height: undefined;
  max-height: 332px;
  aspect-ratio: 1;
  margin-top: 10px;
`;

export const TweetMedia = styled.Image`
  width: 100%;
  height: 100%;
`;

export const TweetListContainer = styled.View`
  width: auto;
  background-color: black;
`;

export const TweetCustomBorder = styled.View`
  border: 2px solid;
  border-bottom-color: #2f3336;
`;

export const TweetActionsContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: normal;
  align-content: normal;
  margin-top: 10px;
`;

export const TweetAction = styled.Pressable`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: normal;
  align-content: normal;
`;



const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};
