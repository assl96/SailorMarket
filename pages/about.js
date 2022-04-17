import React from 'react'
import { Image, Header } from 'semantic-ui-react'
import Layout from '@components/Layout/Layout'



const Facts = [
  {
    title: 'Usagi must always touch her brooch to be Sailor Moon',
    content:
      'In episode 51 of the anime, Sailor Moon fights Leshy, a carnivorous plant monster. This villain breaks her brooch, so he immediately transforms back into Usagi. The same thing happens in episode 90, when the warrior separates from her brooch again. This confirms the theory that she needs to keep control of the brooch in order to remain a girl with magical powers.',
  },
  {
    title: 'Luna, Artemis and Diana can talk because they are aliens',
    content:
      'Why are Luna, Artemis and Diana different? The answer, as confirmed in episode 46, is that they are not actually cats. On the contrary, they are aliens from the planet Mau. In the manga, they even have the ability to change into humanoid forms, which would have been awesome to see in the anime.',
  },
  {
    title: 'Tuxedo Mask is Sailor Earth',
    content:
      'When fans learned that Tuxedo Mask had the golden star seed, their hopes and dreams came true. He is literally the "protector of the Earth". Although he may not be a Sailor Scout, his possession of Earth´s star seed gives him some powers that allow him to help the good guys. In the manga, he even possessed the Gold Crystal.',
  },
  {
    title: 'Sailor Neptune and Sailor Uranus are a couple',
    content:
      'For Japanese fans, there was never any question about the relationship of Sailor Neptune and Uranus, since they had an open love relationship. The two senshi were introduced as cousins in the American dub, but luckily, love finally won out when the show was subtitled and original cuts of the anime became available in the United States. This was not the only case of censorship in Sailor Moon, which was notoriously progressive when it came to gender politics.',
  },
]

const AboutPage = () => {
  return (
    <Layout>
      <section>
        <Header as="h1" textAlign="center">
          <h1>4 Surprising Facts About Sailor World</h1>
        <figure>
          <Image src="/images/Chibi.png" alt="Chibi Serena" />
        </figure>
        </Header>
        <ol>
          {Facts.map(({ title, content }) => (
            <li key={title}>
              <h3 className="ui header">{title}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ol>
      </section>
      <style jsx>
        {`
        figure,
        ol {
          padding: 0;
          margin: 0;
          color:white;


        }
        figure {
          margin: 2rem auto 3rem;
          text-align: center;
          width: 80px;
        }
        h1{
            color: #8A00FF;
            font-family: 'Gill Sans'
        }
        figcaption {
          margin-top: 0.5rem;
          font-site: 0.7rem;

        }
        ol {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          grid-gap: 4.5rem 3rem;
          counter-reset: orderedlist;
        }
        li::before {
          counter-increment: orderedlist;
          content: counter(orderedlist);
          // Boring stuff
          position: absolute;
          top: -43px;
          left: -5px;
          color: #cecece;
          font-size: 5rem;
          font-weight: bold;
          color:#FF00C8
        }
        li {
          position: relative;
          
        }
        h3:first-child {
           padding-left: 40px;
          margin-bottom: 2rem;
          color: #8A00FF
          
        }
      `}</style>
    </Layout>
  )
}

export default AboutPage