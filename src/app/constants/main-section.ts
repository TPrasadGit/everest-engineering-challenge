import { IMainSectionContent } from "../model/main-section.model";

export const MainSectionContent: IMainSectionContent = {
  sectionTitle: "How it works?",
  sectionTitleImage: "/assets/svg/underline.svg",
  sectionButtonText: "TRY IT FOR YOURSELF >",
  sectionContent: [
    {
      title: "Setup your profile & preferences",
      text: "Once you create an account, you can start to tell us your likes and dislikes so we can tailor the experience just for you.",
      image: "/assets/png/work1.png",
    },
    {
      title: "Review your custom box",
      text: "Once we get to know you, we will show you the box we’ve crafted. This is your chance to approve it before we ship it to your house.",
      image: "/assets/png/custom-box.png",
      backgroundImage: "/assets/png/work2-art.png",
    },
    {
      title: "Try it on at home",
      text: "Your box will arrive within 3-5 days (usually sooner) and you get the joy to unbox your Upbox. Try it all on and send back whatever you’re not in love with.",
      image: "/assets/png/work3.png",
    },
  ],
};
