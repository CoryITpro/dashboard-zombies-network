import "./style.scss"

import Navbar from "components/Navbar"
import Hero from "components/Hero"
import WhyZombies from "components/WhyZombies"
import Features from "components/Features"
import Tokenomics from "components/Tokenomics"
import Roadmap from "components/Roadmap"
import FAQs from "components/FAQs"
import Contact from "components/Contact"
import Footer from "components/Footer"
import db from "../../firebase"
import { collection, getDocs } from "firebase/firestore"

import FARMING from "resources/Features/feature-01.svg"
import FIGHT_MONSTER from "resources/Features/feature-02.svg"
import TRAINING_BATTLE from "resources/Features/feature-03.svg"
import BREEDING_GROW from "resources/Features/feature-04.svg"

import HERO_BG from "resources/Backgrounds/hero-bg.png"
import WHYZOMBIES_BG from "resources/Backgrounds/whyzombies-bg.png"
import WHYZOMBIES_HAND from "resources/whyzombies-hand.png"
import TOMB_BG from "resources/Backgrounds/step-bg.svg"
import TOKENOMICS_BG from "resources/Backgrounds/tokenomics-bg.png"
import TOKENOMICS_ARTWORK from "resources/Backgrounds/artwork.gif"
import CONTACT_BG from "resources/Backgrounds/community.gif"

import PHASE_1 from "resources/Roadmap/phase-1.png"
import PHASE_2 from "resources/Roadmap/phase-2.png"
import PHASE_3 from "resources/Roadmap/phase-3.png"

import {
  faYoutube,
  faGithub,
  faDiscord,
  faTwitter,
  faReddit,
  faLinkedinIn,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons"
import { useState, useEffect } from "react"

const Home = () => {
  let gObj

  const [presale, setPresale] = useState(0)
  const [subTitles, setSubTitles] = useState({
    WhyZombies: {
      title: "",
      subTitle: "",
      subHeading: "",
      subContent: "",
    },
    HowToPlay: {
      title: "",
      subTitle: "",
    },
    Features: {
      title: "",
      subTitle: "",
      subHeading: "",
    },
    Tokenomics: {
      title: "",
      subTitle: "",
    },
    FAQs: {
      title: "ANY QUESTIONS",
      subTitle: "Frequently Asked Questions",
      subHeading: "If you have any question related to ZOMBIES check our FAQs",
    },
    Contact: {
      title: "GET IN TOUCH",
      subTitle: "Join Our Community",
      subHeading:
        "Join our ZOMB Family  to get the latest announcements and stay up to date.",
    },
  })
  const [BACKGROUNDS, setBACKGROUNDS] = useState({
    HeroImages: {
      background: HERO_BG,
    },
    WhyZombiesImages: {
      background: WHYZOMBIES_BG,
      foreground: WHYZOMBIES_HAND,
    },
    FeaturesImages: {
      background: TOMB_BG,
    },
    TokenomicsImages: {
      background: TOKENOMICS_BG,
      artwork: TOKENOMICS_ARTWORK,
    },
    ContactImages: {
      background: CONTACT_BG,
    },
  })
  const [TombContents, setTombContents] = useState([
    {
      title: "Owned",
      content: "",
    },
    {
      title: "Play-To-Earn",
      content: "",
    },
    {
      title: "Repeat",
      content: "",
    },
  ])
  const [FeatureItems, setFeatureItems] = useState([
    {
      image: FARMING,
      title: "",
      content: "",
    },
    {
      image: FIGHT_MONSTER,
      title: "",
      content: "",
    },
    {
      image: TRAINING_BATTLE,
      title: "",
      content: "",
    },
    {
      image: BREEDING_GROW,
      title: "",
      content: "",
    },
  ])
  const [FAQItems, setFAQItems] = useState([
    {
      question: "Why The Total Supply is Increasing?",
      answer:
        "First And Foremost, We Are Timelocked, So New Tokens Cannot Be Minted. All Tokens Originating From Wallet 0x00000000.. Are Obtained As A Prize When You Defeat A Monster. The Second Point Is That, As Previously Said, The Total Quantity Of Tokens In Fight Monster Is 140 Million. Tokens Are Distributed At Initial: 570 Million Tokens. 570 Million Tokens + 140 Million Tokens = 710 Million Tokens. So What Happens If This Quantity Of Tokens Is Exceeded? We Have A Very Clear Plan For This; So Far, More Than 20,000 NFTs Have Been Sold, Resulting In A Total Of 260 Million Tokens Gathered From The Community. This Tokens Will Continue To Be Used For Project Development (Fight Monsters, Bosses, Training, Farming, …) Our Max Total Supply Is 1 Billion.",
    },
    {
      question: "Why The assets Of Zombies Game is similar to others?",
      answer:
        "First And Foremost, We Are Timelocked, So New Tokens Cannot Be Minted. All Tokens Originating From Wallet 0x00000000.. Are Obtained As A Prize When You Defeat A Monster. The Second Point Is That, As Previously Said, The Total Quantity Of Tokens In Fight Monster Is 140 Million. Tokens Are Distributed At Initial: 570 Million Tokens. 570 Million Tokens + 140 Million Tokens = 710 Million Tokens. So What Happens If This Quantity Of Tokens Is Exceeded? We Have A Very Clear Plan For This; So Far, More Than 20,000 NFTs Have Been Sold, Resulting In A Total Of 260 Million Tokens Gathered From The Community. This Tokens Will Continue To Be Used For Project Development (Fight Monsters, Bosses, Training, Farming, …) Our Max Total Supply Is 1 Billion.",
    },
    {
      question: "Dev are Doxxing or Not?",
      answer:
        "First And Foremost, We Are Timelocked, So New Tokens Cannot Be Minted. All Tokens Originating From Wallet 0x00000000.. Are Obtained As A Prize When You Defeat A Monster. The Second Point Is That, As Previously Said, The Total Quantity Of Tokens In Fight Monster Is 140 Million. Tokens Are Distributed At Initial: 570 Million Tokens. 570 Million Tokens + 140 Million Tokens = 710 Million Tokens. So What Happens If This Quantity Of Tokens Is Exceeded? We Have A Very Clear Plan For This; So Far, More Than 20,000 NFTs Have Been Sold, Resulting In A Total Of 260 Million Tokens Gathered From The Community. This Tokens Will Continue To Be Used For Project Development (Fight Monsters, Bosses, Training, Farming, …) Our Max Total Supply Is 1 Billion.",
    },
  ])
  const [SocialCommunities, setSocialCommunities] = useState([
    {
      icon: faYoutube,
      link: "https://www.youtube.com",
    },
    {
      icon: faGithub,
      link: "https://www.github.com",
    },
    {
      icon: faDiscord,
      link: "https://www.discord.com",
    },
    {
      icon: faTwitter,
      link: "https://www.twitter.com",
    },
    {
      icon: faReddit,
      link: "https://www.reddit.com",
    },
    {
      icon: faLinkedinIn,
      link: "https://www.linkedin.com",
    },
    {
      icon: faInstagram,
      link: "https://www.instagram.com",
    },
    {
      icon: faFacebook,
      link: "https://www.facebook.com",
    },
  ])
  const [PHASES, setPHASES] = useState([
    [
      PHASE_1,
      {
        title: "Phase 1",
        content: [
          { title: "Graphic Designs Characters & Marketplace", status: true },
          { title: "Launch Social + Website", status: true },
          { title: "Audit Contract", status: false },
          { title: "Marketing / Pre-Sale On UniCrypt", status: false },
          { title: "Public Launch On PancakeSwap", status: false },
          { title: "Public Launch NFT Battle", status: false },
          { title: "Public Launch NFT Marketplace", status: false },
          { title: "Coingecko, Coinmarketcap Listing", status: false },
        ],
      },
    ],
    [
      PHASE_2,
      {
        title: "Phase 2",
        content: [
          { title: "CEX Listing", status: false },
          { title: "Public Launch Against Yaki Bosses", status: false },
          { title: "Public Launch NFT Farming", status: false },
          { title: "Influencer Marketing", status: false },
          { title: "Release More ZOAN NFT Characters", status: false },
          { title: "ZOMB Training Alpha Version", status: false },
          { title: "ZOMB’s Item", status: false },
          { title: "Expanding Team", status: false },
        ],
      },
    ],
    [
      PHASE_3,
      {
        title: "Phase 3",
        content: [
          { title: "Game Studio/Partnerships Expanded", status: false },
          { title: "ZOMB Training Beta - Web Version", status: false },
          { title: "More Exchanges", status: false },
          { title: "ZOMB Dapp Mobile Game (IOS, Android)", status: false },
          { title: "Zombies Global Tournament", status: false },
        ],
      },
    ],
  ])

  useEffect(async () => {
    const querySnapshot = await getDocs(collection(db, "configs"))
    querySnapshot.docs.map((e) => {
      gObj = { ...gObj, [e.id]: e.data().value }
    })

    setSubTitles((prev) => {
      prev.WhyZombies.title = gObj["w_title"]
      prev.WhyZombies.subTitle = gObj["w_subtitle"]
      prev.WhyZombies.subHeading = gObj["w_subheading"]
      prev.WhyZombies.subContent = gObj["w_subcontent"]
      prev.HowToPlay.title = gObj["ht_title"]
      prev.HowToPlay.subTitle = gObj["ht_subtitle"]
      prev.Features.title = gObj["tc_title"]
      prev.Features.subTitle = gObj["tc_subtitle"]
      prev.Features.subHeading = gObj["tc_subheading"]
      prev.Tokenomics.title = gObj["to_title"]
      prev.Tokenomics.subTitle = gObj["to_subtitle"]

      return prev
    })
    setTombContents((prev) => {
      prev[0].content = gObj["tc_owned"]
      prev[1].content = gObj["tc_play"]
      prev[2].content = gObj["tc_repeat"]
      return prev
    })
    setFeatureItems((prev) => {
      prev[0].title = gObj["pte_item_title1"]
      prev[0].content = gObj["pte_item_content1"]
      prev[1].title = gObj["pte_item_title2"]
      prev[1].content = gObj["pte_item_content2"]
      prev[2].title = gObj["pte_item_title3"]
      prev[2].content = gObj["pte_item_content3"]
      prev[3].title = gObj["pte_item_title4"]
      prev[3].content = gObj["pte_item_content4"]
      return prev
    })
    setPresale(gObj.presale)
  }, [])

  return (
    <>
      <Navbar />
      <Hero presale={presale} HeroImages={BACKGROUNDS["HeroImages"]} />
      <WhyZombies
        SubTitles={subTitles}
        WhyZombiesImages={BACKGROUNDS["WhyZombiesImages"]}
      />
      <Features
        SubTitles={subTitles}
        FeaturesImages={BACKGROUNDS["FeaturesImages"]}
        TombContents={TombContents}
        FeatureItems={FeatureItems}
      />
      <Tokenomics
        TokenomicsImages={BACKGROUNDS["TokenomicsImages"]}
        SubTitles={subTitles}
      />
      <Roadmap PHASES={PHASES} />
      <FAQs FAQItems={FAQItems} SubTitles={subTitles} />
      <Contact
        SocialCommunities={SocialCommunities}
        SubTitles={subTitles}
        ContactImages={BACKGROUNDS}
      />
      <Footer />
    </>
  )
}

export default Home
