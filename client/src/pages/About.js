import React from "react";
import styled from "styled-components";

import JasperImg from "../assets/IMG_4948.JPG";

const AboutWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;
const AboutSection = styled.div``;
const MeetJasperWrapper = styled.div``;
const MeetJasperImg = styled.img``;
const Title = styled.h3`
  text-align: left;
`;
const Paragraph = styled.p`
  text-align: left;
`;

export default function About(props) {
  return (
    <AboutWrapper>
      <MeetJasperWrapper>
        <AboutSection>
          <Title>Meet Jasper</Title>
          <Paragraph>
            Jasper’s journey with yoga has taken her around the world. She first
            discovered yoga more than eight years ago. What initially started as
            a simple physical exercise quickly transformed into a powerful way
            to connect to, love, and heal the body and mind. Yoga made such a
            massive impact on her life that Jasper knew she needed to share it.
          </Paragraph>
          <Paragraph>
            She traveled to India in 2017, studied Ashtanga, Vinyasa, Myofascial
            Release, Meditation, and Pranayama. She went on to teach in
            Melbourne, Australia before making her way back to the US. Jasper is
            an RYT® 500 who brings creative flow, anatomical awareness,
            mindfulness, passion, and loads of love and kindness to every class.
            Are you ready to make a positive change in your life? Get in touch
            today to experience the empowering, transformational practice of
            yoga.
          </Paragraph>
        </AboutSection>
        <MeetJasperImg src={JasperImg} />
      </MeetJasperWrapper>
      <AboutSection>
        <Title>Why Yoga?</Title>
        <Paragraph>
          The tradition of yoga can be traced back 5,000 years, and has since
          been through a dramatic evolution. Usually, when we think of yoga
          today, we think of the physical postures, or asana. Asana is just one
          part of the ancient system of yoga as conceived by the Indus-Sarasvati
          civilization in Northern India. The word "yoga" translates to
          "union",and that is still the goal of this practice today.
        </Paragraph>
        <Paragraph>
          The main pieces of a vinyasa yoga practice include mindful breath
          linked to movement, introspection, and meditative focus. Yoga
          strengthens the connection, or union, of mind and body. Practices that
          strengthen the mind body connection have been linked to amazing
          benefits that extend far beyond the yoga mat.
        </Paragraph>
        <Paragraph>
          Studies have shown that yoga improves physical fitness, strength, and
          flexibility. However, the benefits of a consistent yoga practice
          extend even farther. Yoga has been shown to reduce stress and
          inflammation. Yoga can prevent and improve anxiety and depression. A
          regular yoga practice has even been linked to healthier eating habits,
          improved body image, and better sleep.
        </Paragraph>
        <Paragraph>
          Try it for yourself and experience the benefits of this ancient
          practice. I offer group classes in Salt Lake City at Full Circle Yoga
          and Avenues Yoga. If you prefer a focused, personal approach, reach
          out for a free consultation on private classes tailored to your unique
          goals and needs. I also offer corporate classes, so you can but the
          benefits of yoga to work for you and your colleagues. Get in touch
          today to learn how you can make a change in your mind, body, and
          overall quality of life!
        </Paragraph>
      </AboutSection>
    </AboutWrapper>
  );
}
