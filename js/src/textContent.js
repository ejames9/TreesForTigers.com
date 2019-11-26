/*
** textContent.js
**
** textContent.js is  a file that deals with the text content of the t4t
** site. MUch of the text is exported as simple js variables, but more complex
** content makes use of React and styled-components.
**
** Eric James Foster, Fostware LLC, MIT License.
***/

// Get React...
import React from 'react'
// Get sc component styling...
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
// Get icons...
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faApple,
  faGoogle
} from '@fortawesome/free-brands-svg-icons'
// Utilities...
import el from './utils/DOM/el'
import {log, dir} from './utils/Loggers'
import {
  addClass,
  removeClass,
  listContains}
from './utils/DOM/classList'
import {isMobile, isSafari} from './utils/utils'



/*
**
** Text Variables
*********************************/

const challengeToSurvive = `The Amur tiger,also known as the Siberian Tiger, is the largest subspecies of tiger and lives in the snowy forests of the Russian Far East and China. They are one of the rarest cats remaining in the wild.
One-hundred years ago, there were an estimated 100,000 tigers in the wild. There are now fewer than 3200 tigers of all tiger species in the wild. Tigers have lost 93% of their habitat in the last century. Despite a long history of concern for tigers, wild tiger numbers are at a historic low.
The Amur Tiger is critically endangered. There are about 500 Amur tigers now left in the wild. The good news is that this is a growing number, up from an all time low of an estimated 300 thirty years ago, as conservation efforts are paying dividends. But there is still a long way to go to achieve sustainable populations and the tigers need your help!`

const theTrees = `Thus far, the Korean Pine (Pinus koraiensis) is the only species of tree whose seedlings we have planted. There are however, as listed above, other species that are important to the Far East Russian wild boar that we do hope to plant in the future. These species are the Siberian Cedar (Pinus sibirica), Manchurian Oak (Quercus mongolica) and
Manchurian Walnut (Juglans mandshurica).  As we’ve worked with local resources, we have found that planting Korean Pine is currently our best option.  In order to get sufficient seedlings for reforestation, we are dependent on tree species that are available from local nurseries.  We have found a
nursery that provides us with Korean Pine seedlings.  This species also grows faster than some of the other native species.`

const trees4Tigers = `A collaborate partnership to create safe, sustainable habitats for people and tigers in Eastern Russia.`

const collaboration = `Civilization is the rational and intentional cessation of the instinctual competitive behaviours and survival of the fittest outcomes as described by Darwin and the establishment of mutually beneficial collaboration.
We use science not as means to compete but to collaborate with nature and one another in the creation of mutually beneficial and sustainable habitats. We are collaborating for tiger conservation rather than fighting against tiger destruction.
Trees for Tigers collaborates with local populations, authorities, logging industry, and other stakeholders to create safe and sustainable habitats for people and tigers.`

const sustainability = `Since forest habitats take many years to achieve a self-generative, mature sustainability, we are working for long-term solutions rather than short-term fixes. This will require transformation of mindsets and behaviours rather than simple changes in behaviour.
Trees for Tigers creates long-term solutions rather than short-term fixes to establish and maintain safe and sustainable habitats for people and tigers.`

const empowerAction = `All sustainable change is an “inside job”. When change mechanisms rely on external forces or resources, the changes will be sustainable as long as those external forces are in place. Without collaboration and empowerment at the local level, well-intentioned “outsiders” will either tyrannically impose their perspective or benignly create long-term dependence on external aid.
Trees for Tigers empowers local research to identify best environmental practices to ensure sustainable habitats for people and tigers.`

const education = `Education is essential to raise awareness of the plight of the Amur tiger. Education is also essential to help people discover the things they can do to be part of creating sustainable habitats for tigers.
Trees for Tigers educates people to the plight of the Amur Tiger and ways in which they can participate in creating sustainable habitats for people and tigers.`

const wonderNAwe = `A sense of wonder and awe is essential to motivate a compassionate caring of our world. Wonder and awe stretches our awareness to encompass that which is beyond ourselves. We discover we are inseparable from our environment and one with all the creatures that inhabit the world. From this place of oneness with all things comes the inspiration for our work. We care for the environment not because we should but when filled with wonder and awe we cannot not care. This is the essence of sustainable motivation for the work of conservation. Trees for Tigers promotes those activities which evoke wonder and awe in those who behold the majesty and beauty of the Amur Tiger.`

const kimVoyleBio = `Kim Voyle has had the good fortune to spend a lot of time with two Amur tigers while volunteering at the Oregon Zoo. Trees for Tigers is an expression of her love and concern for cats of all kinds and in particular the Amur tiger.
Kim serves as the President of Trees for Tigers`

const robVoyleBio = `Rob Voyle is an Episcopal priest and psychologist and is the Founder and Director of the Appreciative Way a consulting and executive coaching firm. Rob is an internationaly recognized leader in the use of Appreciative Inquiry in church and coaching settings.
Rob has an undegraduate degrees in mechanical engineering and subsequent degrees in theology, and psychology Doctorate in psychology.While he currently works primarily as a clergy consultant, Rob has not strayed far from his original engineering roots. When working with people as a priest and psychologist he thinks of his work as "engineering practical solutions for meeting daily needs."
Likewise Rob sees Trees for Tigers as a simple practical solution that ordinary people can engage in as their contribution to creating a safe and sustainable habitat for people and tigers in Eastern Russia.`

const mailHref = 'mailto:?subject=About Trees for Tigers&body=Hi, I found this website about About Trees for Tigers and thought you might find it interesting: http://www.treesfortigers.org'

const countries = [
  'Australia', 'Austria', 'Belgium', 'Canada', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hong Kong', 'Ireland', 'Italy',
  'Japan', 'Latvia', 'Lithuania', 'Luxembourg', 'Malaysia', 'Mexico', 'Netherlands', 'New Zealand', 'Norway', 'Poland', 'Portugal', 'Singapore', 'Slovakia',
  'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'United Kingdom', 'United States'
]

const ccIconAddresses = [
  "/images/svg/credit-cards/007-discover.svg", "/images/svg/credit-cards/004-diners-club.svg", "/images/svg/credit-cards/005-jcb.svg"
]

const attribute = '<div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/pixel-buddha" title="Pixel Buddha">Pixel Buddha</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/srip" title="srip">srip</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/fjstudio" title="fjstudio">fjstudio</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div>'

const ecoTourism = `Engage in eco-tourism to help develop local economies. We need to make a live tiger more valuable than a dead tiger.`


/*
**
** Textual React Components
*********************************/

/// Chopsticks component, with styler...
const ChopsStyler = styled.div`
  a {
    margin: 0;
    padding: 0;
    font-size: 1.1rem;
  }

  .hide {
    display: none;
  }

  span.italic {
    font-style: italic;
  }

  .reusableCS {
    font-style: underline;
  }
`

function Chopsticks() {
  function onClick() {
    let arr = el('#chopstyles .item')

// If li's are hiding....
    if (listContains(arr[0], 'hide')) {
// show them....
      arr.forEach(el=> {
        removeClass(el, 'hide')
      })

// also, hide 'more' button, show 'less'...
      addClass(el('#chopstyles .more'), 'hide')
      removeClass(el('#chopstyles .less'), 'hide')
// If they are not showing....
    } else {
// hide them...
      arr.forEach(el=> {
        addClass(el, 'hide')
      })
// also, hide 'less' button, show 'more'...
      addClass(el('#chopstyles .less'), 'hide')
      removeClass(el('#chopstyles .more'), 'hide')
    }
  }

// Click handler that will navigate the user to the how you can help page...
  function howToHelp() {
    window.location = '/donate#how-to-help'
  }

  return (
    <ChopsStyler id='chopstyles'>
      <p>
      While poaching and game hunting threatens tigers in other parts of the world, the biggest threat to Tigers in Eastern Russia is disposable chopsticks! Tiger habitat is being destroyed by both legal and illegal logging. Trees are harvested, shipped across the border to China, and then sold largely to Japan. Many also
      end up here in the US for use in Oriental themed restaurants. For their sake the tigers would prefer you used a fork...
      While tigers don't directly need trees to survive, their primary food source, the wild boar, need the nut bearing trees that are being clear-cut, to flourish.
      </p>
      <p className='item hide'>
      3.8 million trees are felled each year to supply timber for the disposable chopsticks industry
      The deforestation for the production of disposable chopsticks is an international problem and comes with the loss of critical animal habitat
      </p>
      <p className='item hide'>
      Disposable chopsticks cost approximately two cents a pair for restaurants and reusable chopsticks cost around $1.17 a pair. However, reusable chopsticks have a life span of about 130 meals, making them cheaper in comparison.
      In 2006, to combat massive deforestation in China, the “Bring Your own Chopsticks (BYOC)” movement was developed, helping raise public awareness and eventually galvanizing legislative action.
      Disposable chopsticks are an unnecessary commodity that, much like plastic bags, have an environmental friendly counterpart.`
      </p>
      <p className='item hide'>Check out <a href="https://www.fcsal.org/cfs">Chopsticks for Salamanders</a> for more information</p>
      <Button className='more' variant='outline-success' onClick={onClick}>Why Reuse Chopsticks? ▽</Button>
      <Button  className='less hide' variant='outline-danger' onClick={onClick}> △ </Button><br/>
      <br/>
      <p>Buy <span className='reusableCS'>Reusable Chopsticks</span> <a href="https://smile.amazon.com/s?k=reusable+chopsticks&ref=nb_sb_noss">here</a> and <a href="http://www.everythingchopsticks.com">here</a>.</p>
      <p>Check out <a href="https://fsc.org/en">The Forest Stewardship Council</a> for information on sourcing sustainable wood.</p>
      <p>For US only, check out <a href="https://www.americanforests.org/">American Forests</a>.</p>
      <Button onClick={howToHelp} variant="outline-warning">How You Can Help</Button>
    </ChopsStyler>
  )
}


// HowYouCanHelp Component, with HomeButton component and styler....
/***************************************************************/
const UL = styled.ul`
  position: relative;
  width: 90%;
  margin-left: -2.5rem;
  ${(isMobile() && isSafari())&& `
    margin-left: -2rem;
  `}


  li {
    padding: .5rem;
    margin-bottom: .5rem;
    background: transparent;
    backdrop-filter: blur(20px);
    border-radius: 15px;
    ${(isMobile() && isSafari())&& `
      position: relative;
      right: 1rem;
    `}

    h2 {
      font-family: raleway;
      font-weight: 600;
      font-size: 1rem;
      /* text-align: left; */
      color: #dedede;
      z-index: 99999;
      ${(isMobile() && isSafari())&& `
        position: relative;
        left: 1.5rem;
      `}
    }

    p {
      font-size: .8rem;
      color: #ababab;
      ${(isMobile() && isSafari())&& `
        position: relative;
        left: 1.5rem;
      `}

      &.donated {
        color: #404040;
      }
    }

    .icon {
      color: #dedede;
    }

    .apple {
      font-size: .95rem;
    }

    .google {
      font-size: .7rem;
    }

    .tourism,
    .contribute {
      padding-bottom: .5rem;
    }

    .contribute {
      font-size: 1.5rem;

      p {
        font-size: 1.5rem;
      }
    }

    a {
      color: #ffd111;
    }
    a:hover {
      text-decoration: none;
      color: blue;
    }
    a:active {
      color: #ffd111;
    }
  }

  .imgLI {
    list-style: none;

    .amurEyes {
      width: 100%;
      height: 4rem;
      border-radius: 12px;
      opacity: .8;
      z-index: 999991
    }
  }

  .navHome {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 37%;
    max-height: 3rem;
    right: 0;
    left: 0;
    margin: 0 auto;
    backdrop-filter: none;

    p.home {
      position: relative;
      left: 0;
      bottom: 2rem;
      color: #dedede;
      font-family: raleway;
      font-size: .6rem;
      opacity: 1;
    }
  }

/* Adding textual size adjustments for landscape orientation, up to 813px, just beyond iphone X ...*/
  @media (max-width: 813px) and (orientation: landscape) {
    li {
      h2 {
        font-size: 1.2rem
      }

      p {
        font-size: 1rem;
      }
    }

    .navHome {
      p.home {
        bottom: 4.5rem;
      }
    }
  }

/* Adjusting for the tiger Eyes image above 560px ...*/
  @media (min-width: 560px) {
    .imgLI {
      .amurEyes {
        height: 6rem;
      }
    }

/* Adjusting for the tiger Eyes image above 660px ...*/
  @media (min-width: 660px) {
    .imgLI {
      display: flex;
      justify-content: center;

      .amurEyes {
        width: 85%;
      }
    }

/* Adjusting for the tiger Eyes image above 776px ...*/
  @media (min-width: 768px) {
    .imgLI {
      .amurEyes {
        width: 75%;
      }
    }

/* Targeting tablets in portrait mode ....*/
  @media (min-width: 768px) and (orientation: portrait) {
    li {
      margin-bottom: 1.5rem;

      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1.2rem;
        color: #ababab;
      }

      .contribute {
        font-size: 1.75rem;
      }
    }

    .navHome {
      p.home {
        bottom: 5.7rem;
        font-size: .8rem;
      }
    }
  }

/* Changed width from the standard '768' to '813', to exclude the iphone X in landscape  ......*/
  @media (min-width: 813px) {
     margin-left: 0;

     li {
      margin-bottom: 1.5rem;

      h2 {
        font-weight: 800;
        font-size: 1.7rem;
      }

      p {
        font-size: 1.3rem;
        color: #161616;
      }

      .apple {
        font-size: 1.55rem;
      }

      .google {
        font-size: 1.18rem;
      }

      .contribute {
        font-size: 1.9rem;
      }
    }

    .imgLI {
      display: block;

      .amurEyes {
        height: 10rem;
        width: 100%;
      }
    }

    .navHome {
      width: 17%;
      max-height: 7.5rem;

      p.home {
        bottom: 4.4rem;
        font-size: .8rem;
        transition: opacity .5s;
        opacity: 0;
      }

      &:hover {
        p {
          opacity: 1;
        }
      }
    }
  }

  @media (min-width: 1025px) {
    width: 60%;
  }
`
// HomeButton Component, for use in the HowYouCanHelp Component......
const HomeButton = styled.div`
  /* width: 7rem; */
  border-radius: 50%;
  padding: 0;
  height: 100%;
  margin-bottom: 2rem;
  background: transparent;
  backdrop-filter: blur(20px);
  transition: all .3s;

  &:active {
    background: #6b209d;
  }

  &.donated:active {
    background: #4073ff;
  }

  img {
    position: relative;
    top: .3rem;
    width: 4.5rem;
    height: 4.5rem;
  }

  @media (orientation: landscape) {
    margin-bottom: 4.5rem;
    margin-top: 1.5rem;
  }

/* Targeting tablets in portrait mode ....*/
  @media (min-width: 768px) and (orientation: portrait) {
    margin-bottom: 5.5rem;
    margin-top: 2.5rem;

    img {
      top: .3rem;
      width: 5.7rem;
      height: 5.7rem;
    }
  }

  @media (min-width: 813px) and (orientation: landscape) {
    margin-top: 2.7rem;

    &:hover {
      background: #6b209d;
    }
    &:active {
      background: transparent;
    }

    &.donated:hover {
      background: #4073ff;
    }
    &:active {
      background: transparent;
    }

    img {
      top: .3rem;
      width: 6.5rem;
      height: 6.5rem;
    }
  }
`
// The HowYouCanHelp Component....
const HowYouCanHelp =(props)=> {
// Click handler...
  function onClick() {
// Send em' home...
    window.location.href = '/'
  }

// Markup...
  return (
    <UL>
      <li className='navHome' >
        <HomeButton className='home-button' onClick={onClick}>
          <img src="/images/trees4TigersLogoWhite.svg" alt="Trees for Tigers Logo"/>
        </HomeButton>
        <p className='home'>Home</p>
      </li>
      <li>
        <h2 className='tourism'>Engage in eco-tourism to help develop local economies. Check out <a href="https://www.royle-safaris.co.uk/">Royle Safaris</a> and <a href='http://www.russiatigertracking.com/'>Russia Tiger Tracking</a> for more info.</h2>
        <p className='liveTiger'>"We need to make a live tiger more valuable than a dead tiger.""</p>
      </li>
      <li>
        <h2>Use sustainable chopsticks and other food utensils.</h2>
      </li>
      <li>
        <h2>Ask your local restaurant to switch to reusable chopsticks.</h2>
      </li>
      <li>
        <h2>Check out <a href="https://www.fcsal.org/cfs">Chopsticks for Salamanders</a> for more information</h2>
      </li>
      <li className='imgLI'>
        <img className='amurEyes' src='/images/amurEyes.jpg'/>
      </li>
      <li>
        <h2>Buy <span className='reusableCS'>Reusable Chopsticks</span> <a href="https://smile.amazon.com/s?k=reusable+chopsticks&ref=nb_sb_noss">here</a> and <a href="http://www.everythingchopsticks.com">here</a>.</h2>
      </li>
      <li>
        <h2>Check out <a href="https://fsc.org/en">The Forest Stewardship Council</a> for information on sourcing sustainable wood.</h2>
      </li>
      <li>
        <h2>For US only, check out <a href="https://www.americanforests.org/">American Forests</a>.</h2>
      </li>
      {
        !props.donated &&
          <li>
            <h2 className='contribute'>Contribute to Trees for Tigers!</h2>
            <p>Donate using the widget below, and help us to purchase and plant tree seedlings. <FontAwesomeIcon className='apple icon' icon={faApple}/><span className='icon'> Pay</span>,  <FontAwesomeIcon className='google icon' icon={faGoogle}/> <span className='icon'>Pay</span> and all major credit cards are accepted!</p>
          </li>
      }
    </UL>
  )
}


// The VisionText Component, with Styler.......
/*******************************************/
const VisionStyler = styled.div`
  .visText a {
    font-size: 1.1rem;
    margin: 0;
    padding: 0;
  }

  p {
    color: #909090;
  }
`

function VisionText() {
  function onClick(e) {
    let _class = e.target.className,
    offset
// Prevent button from dialing href...
    e.preventDefault()


    switch (true) {
      case /t4t/.test(_class):
        window.scrollTo({
          top: el('#cast').offsetTop,
          left: 0,
          behavior: 'smooth'
        })
        break
      case /vals/.test(_class):
        window.scrollTo({
          top: el('#values').offsetTop,
          left: 0,
          behavior: 'smooth'
        })
        break
    }
  }

  return (
    <VisionStyler>
      <p className='visText'>
        We dream of the day when tigers and people can safely and sustainably coexist in their natural habitats. <a className='t4t' href="" onClick={e=> onClick(e)}>Trees for Tigers</a> is an international Collaboration To Create Safe Sustainable Habitats For People and Tigers in Far Eastern Russia by directly addressing habitat loss and
        providing education and opportunities to support tiger conservation. <br/>
        <a className='vals' href="" onClick={e=> onClick(e)}>Our Values</a>.
      </p>
    </VisionStyler>
  )
}


// T4TGerminated Component....
/******************************/
function T4TGerminated() {
// Click handler...
  function onClick() {
// Scroll to #cast anchor position..
    window.scrollTo({
      top: el('#cast').offsetTop,
      left: 0,
      behavior: 'smooth'
    })
  }

// Markup...
  return (
    <span>
      The idea for <a className='treesForTigers' onClick={onClick}> Trees for Tigers </a> took form when Kim and Rob Voyle went on an Amur Tiger
      Tracking Eco-Tour in Eastern Russia with Martin Royle from Royle Safaris. Along with other guests,
      they stayed at Alexander Batalov's conservation base camp. Over the
      dinner table and while touring the region, they considered the plight of the tigers.
      At the top of their food chain, tigers can essentially take care of themeselves. That is, provided that they have food
      (primarily boar, but also deer). So, the focus shifted from <span className='bold'>what tigers need to survive</span>,
      to <span className='bold'>what boars need to flourish. </span>
      And the answer, as mentioned above, is <span className='bold2'>Trees!</span> But not just any trees, more specifically, the following
      four species of nut bearing tree:
    </span>
  )
}


// TreeList Component....
/*************************/
const TreeList =()=> (
    <ul>
      <li>Mongolian Oak, <span className='scientific'>Quercus mongolica</span></li>
      <li>Manchurian Walnut, <span className='scientific'>Juglans mandshurica</span></li>
      <li>Korean Pine, <span className='scientific'>Pinus koraiensis</span></li>
      <li>Siberian Cedar, <span className='scientific'>Pinus sibirica</span></li>
    </ul>
)


// The MartinRoyleBio Component, with Styler.......
/*******************************************/
const MRBioWRapper = styled.div`
  p {
    color: #dedede;
    font-size: 1rem;
  }

  h3 {
    font-size: 1.25rem;
    color: #898989;
  }
`

const MartinRoyleBio =()=> (
  <MRBioWRapper>
    <p>
      Martin has a life-long passion for the natural world and a radical commitment to highlighting some of the most endangered animals and ecosystems in the world with a view to helping raise awareness of these animals and ecosystems.
      Since graduation from The Victoria University of Manchester with a degree in Zoology Martin has been fortunate enough to spend most of his adult life travelling the world and working on multiple wildlife projects, before setting up and establishing Royle Safaris (a wildlife Eco tourism company that specializes in rare and elusive species with a focus on conservation and human - predator conflicts).
      Although Martin would admit that elasmobranchs (Sharks and Rays) are his overall passion, he has worked on a great range of projects all over the world with many different kinds of animals and through Royle Safaris has become involved in tiger conservation, research and establishing tiger Eco tourism in many of their range countries, including the Russian Far East.
      Through his travels and development as a conservationist he has worked on a variety of projects and with a range of wildlife including:
    </p>
    <br/>
    <h3>Field Guiding Association of Southern Africa (FGASA) Eco-Training, South Africa</h3>
    <p>
      During this time Martin was trained comprehensively in field guiding techniques used in Southern Africa; including animal tracking, 4×4 driving, weapons handling, approaching dangerous game, identification of plants, birds, reptiles, amphibians and mammals. This is among the most important training and experience Martin has received and is evident in the way he conducts each and every safari.
    </p>
    <br/>
    <h3>The Cetacean Research and Rescue Unit (CRRU), Scotland</h3>
    <p>
      During this time Martin gained his first experience working on the sea, this gave him a thirst for marine life and he has vast knowledge of cetaceans (whales, porpoises and dolphins) and elasmobranches (sharks and rays). He was heavily involved in the data collection for studies on common bottlenose dolphins, minke whales and harbour porpoises, as well as the rescue of stranded cetaceans on UK beaches.
    </p>
    <br/>
    <h3>The Andean Bear Project, Ecuador</h3>
    <p>
      During this period Martin learned valuable skills in long distance tracking and identifying wildlife. Working high the Andean Mountains he has visited some of the most remote and beautiful areas of South America. Using VHF transmitters and learning how to safely run and conduct field studies in high altitudinal regions which has helped him when working alongside scientists and trackers for the Snow Leopard Conservancy in later years.
    </p>
    <br/>
    <h3>The University of Cape Town, South Africa</h3>
    <p>
      During this time Martin fulfilled a life-long ambition and got up close and personal with Great White Sharks as well as other species including the pictured Bronze Whaler which was caught in a net and released by Martin after being tagged and measured with the data being sent to the Oceanic Research Institute. The project Martin was working on was the PhD of Alta de Voss and her study into the anti-predation techniques used by Cape fur seals to avoid being eaten by great white sharks. Martin has also worked on African Shark Eco Charters in Cape Town where he learned how to run Eco tourism at sea in a sustainable way.
    </p>
    <br/>
    <h3>Shark Bay Ecosystem Research Project (SBERP), Australia</h3>
    <p>
      This time was incredibly insightful to Martin as he gained first-hand experience working with a vast range of animals and plants from sea grass, benthic invertebrates, reptiles, fish, birds and mammals such as sea snakes, sharks, rays, dolphins and sea turtles. From such time here Martin also learnt about how to incorporate local people into the conservation and educating people in the real problems facing the environment today as well as finding out how we can collaborate with the locals to better their lives in a sustainable way with their surroundings environment and wildlife.
    </p>
    <br/>
    <h3>SeaWatch South West, England</h3>
    <p>
      During this, the most recent time spent on a research project, Martin has learned more about birding and the means of identifying birds at distance than on any other project. This was part of a long term bird conservation project for endangered sea birds in the UK and Mediterranean waters. Here Martin was shown the necessary skills to conduct long term field studies which are completely non-invasive as many of the birds were only sighted through binoculars and telescopes.
    </p>
    <br/>
    <p>
      During all these projects and years spent travelling the world and going into many national parks he has developed a real sense of what is required to find, observe and understand wildlife in the field. Never being able to stop he is currently working on a number of private projects including writing A Field Guide to Batoids of the World (Skates and Rays) and an ambitious plan to have an international database for fellow wildlife enthusiast which will hopefully make finding animals in the field easier.
      Martin has also spent time implementing and being an advisor to various governing bodies on management plans for projects, national parks, Eco tourism and other ventures including: writing action plans to increase profitability for local people sustainably in Indian tiger reserves and the Brazilian Pantanal; whale watching guidelines for local operators in southern Sri Lanka (in conjunction with the Whale and Dolphin Conservation Society (WDCS) and the Sri Lankan high commission in London; and establishing a successful ecotourism program in the Russian Far East with tiger expert Alexander Batalov.
    </p>
    <br/>
    <p>
      All of this as well as running his international wildlife ecotourism business, guiding many of the trips (including all tiger tourism trips (tigers have since become his number one species for tourism, conservation and research) and twice annually visits to the reserve in Russia), and establishing ecotourism in more and more remote and isolated places, this year it will be the rural areas of Thailand, Laos, Cambodia and Vietnam which Martin will focus on for new tiger tracking tours and also setting up local guide training facilities and long term Eco tourism projects.
    </p>
  </MRBioWRapper>
)


// The AlexanderBatalovBio Component, with Styler.......
/*******************************************/
const ABBioWRapper = styled.div`
  p {
    color: #dedede;
    font-size: 1rem;
  }
`

const AlexanderBatalovBio =()=> (
  <ABBioWRapper>
    <p>
      Alexander Batalov has dedicated his life to the conservation of the Amur Tiger. He is responsible for establishing the
      <a className='durminskoye' href="http://www.russiatigertracking.com/index.php"> Durminskoye Reserve</a>, set in the basin of the river Durmin. About a 2 hour
      drive (100 km) from Khabarovsk, Russia, in the Southeastern part of the country, the Durminskoye Reserve is in prime Ussuri taiga habitat,
      adjacent to the foothills of the Sikhote-Alin mountain range.
    </p>
    <br/>
    <p>
      Alexander works tirelessly as director, researcher and protective warden over some of the last remaining natural habitats of
      the worlds largest cat.
    </p>
    <br/>
    <p>
      Since graduating from the Wildlife Faculty of the Irkutsk State Academy of Agriculture, Alexander has spent the last 35 years working in wildlife management.
    </p>
    <br/>
    <p>
      He has published around 40 scientific studies on wildlife ecology, and is an expert on methods for monitoring and tracking wildlife populations.
      Alexander also serves as Vice President, Russia, for Trees for Tigers.
    </p>
  </ABBioWRapper>
)


// The Strategy Component, with Styler.......
/*******************************************/
const TreesStyler = styled.div`
  .hide {
    display: none;
  }

  span.up {
    transform: rotate(80deg);
    color: black;
  }

  span.italic {
    font-style: italic;
  }

  img.crew {
    display: block;
    width: 100% !important;
    height: 100% !important;
    border-radius: .5rem;
    /* border-right: .5rem solid #161616;
    border-left: .5rem solid #161616;  */

  }
`

function Strategy() {
  function onClick() {
    let arr = el('#treestyles .item')

// If li's are hiding....
    if (listContains(arr[0], 'hide')) {
// show them....
      arr.forEach(el=> {
        removeClass(el, 'hide')
      })

// also, hide 'more' button, show 'less'...
      addClass(el('#treestyles .more'), 'hide')
      removeClass(el('#treestyles .less'), 'hide')
// If they are not showing....
    } else {
// hide them...
      arr.forEach(el=> {
        addClass(el, 'hide')
      })
// also, hide 'less' button, show 'more'...
      addClass(el('#treestyles .less'), 'hide')
      removeClass(el('#treestyles .more'), 'hide')
    }
  }

  return (
    <TreesStyler id='treestyles'>
      <p>
        As mentioned above, tigers don't directly need trees. Tigers eat wild boar, which are dependent on the nut bearing trees that are being clear-cut.
        Regrowth occurs randomly with several generations of trees before nut bearing trees will return. Our strategy for protecting the tigers is aimed at the reforestation of Eastern Russia, using species of nut-bearing tree that are wild boar 'friendly'.
      </p>
      <img className='crew' src="/images/treePlanting01.jpg" alt="Tree planting crew"/>
      <p>This strategy includes:</p>
      <ul>
        <li>
          The establishment of Reforestation Teams of local forestry workers to plant seedlings to re-forest the area following loggin acivities.
        </li>
        <li>
          The creation of international teams of students engaged in cross-cultural, collaborative activities, including tree-planting.
        </li>
        <li>
          The establishment of Academic Forestry Research and Education to create and disseminate the best practices for planting and reforesting logged areas.
        </li>

        <li className='item hide'>
          School programs to educate and engage people in the work of conservation, both locally and internationally.
        </li>
        <li className='item hide'>
          Promote Eco-Tourism to expose people to the wonder and delight of nature and to inspire people to a collaborative engagement with respect to nature and their own existence.
        </li>
        <Button className='more' variant='success' onClick={onClick}>Show More ▽</Button>
        <Button  className='less hide' variant='danger' onClick={onClick}> △ </Button>
      </ul>
    </TreesStyler>
  )
}




export {
  challengeToSurvive,
  Chopsticks,
  theTrees,
  trees4Tigers,
  collaboration,
  sustainability,
  empowerAction,
  education,
  wonderNAwe,
  kimVoyleBio,
  robVoyleBio,
  MartinRoyleBio,
  AlexanderBatalovBio,
  T4TGerminated,
  TreeList,
  Strategy,
  mailHref,
  VisionText,
  countries,
  ecoTourism,
  HowYouCanHelp
}
