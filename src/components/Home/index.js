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
      title: "",
      subTitle: "",
      subHeading: "",
    },
    Contact: {
      title: "",
      subTitle: "",
      subHeading: "",
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
      question: "",
      answer:"",
    },
    {
      question: "",
      answer:"",
    },
    {
      question: "",
      answer:"",
    },
    {
      question: "",
      answer:"",
    },
    {
      question: "",
      answer:"",
    },
    {
      question: "",
      answer:"",
    },
    {
      question: "",
      answer:"",
    },
    {
      question: "",
      answer:"",
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
          { title: "Graphic Designs Characters & Marketplace", status: false },
          { title: "Launch Social + Website", status: false },
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
      prev.Contact.title = gObj["co_title"]
      prev.Contact.subTitle = gObj["co_subtitle"]
      prev.Contact.subHeading = gObj["co_heading"]
      prev.FAQs.title = gObj["faq_title"]
      prev.FAQs.subTitle = gObj["faq_subtitle"]
      prev.FAQs.subHeading = gObj["faq_heading"]
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
    setPHASES((prev) => {
      for (let i=0; i<8; i++) {
        if (parseInt(gObj['phase1']) > i)
          prev[0][1]['content'][i].status = true
        else
          prev[0][1]['content'][i].status = false
      }
      for (let i=0; i<8; i++) {
        if (parseInt(gObj['phase2']) > i)
          prev[1][1]['content'][i].status = true
        else
          prev[1][1]['content'][i].status = false
      }
      for (let i=0; i<5; i++) {
        if (parseInt(gObj['phase3']) > i)
          prev[2][1]['content'][i].status = true
        else
          prev[2][1]['content'][i].status = false
      }
      return prev
    })
    setPresale(gObj.presale)
    setFAQItems((prev) => {
      for (let i=1;i<=8;i++) {
        if (gObj['faq_question' + i].length * gObj['faq_answer' + i].length) {
          console.log(gObj['faq_question' + i].length)
          prev[i-1]['answer'] = gObj['faq_answer' + i]
          prev[i-1]['question'] = gObj['faq_question' + i]
        }
      }
      prev = prev.filter(function(value) {
        if (value.question && value.answer)
          return value.question.length * value.answer.length
        else
          return false
      })
      console.log(prev)
      return prev
    })
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
        ContactImages={BACKGROUNDS["ContactImages"]}
      />
      <Footer />
    </>
  )
}

export default Home
