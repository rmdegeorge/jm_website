import React from 'react';
import styled from 'styled-components';

const ClassesWrapper = styled.div``;
const PageTitle = styled.h1``;
const PageSubtitle = styled.h2``;
const ClassCard = styled.div``;
const ClassTitle = styled.h3``;
const ClassDescription = styled.p``;

const Classes = (props) => {
  return (
    <ClassesWrapper>
      <PageTitle>Class Offerings</PageTitle>
      <PageSubtitle>Designed For You</PageSubtitle>
      <ClassCard>
        <ClassTitle>Slow Flow</ClassTitle>
        <ClassDescription>
          Slow Flow is perfect for students looking for a meaningful mind-body experience on the mat. Get ready to stretch and strengthen your body. Spots are limited on this one, so go ahead and book today.
        </ClassDescription>
      </ClassCard>
      <ClassCard>
        <ClassTitle>Raditant Vinyasa</ClassTitle>
        <ClassDescription>
          My Radiant Vinyasa class is a welcome and much-needed break from the stress and speed of day to day life. Grab a mat, don’t forget your water bottle, and relax into an expansive sequence that will leave you feeling centered and renewed. Synchronize breath with movement and enhance the mind-body connection in this energetic, expansive vinyasa flow class.
        </ClassDescription>
      </ClassCard>
      <ClassCard>
        <ClassTitle>Mindfulness Meditation</ClassTitle>
        <ClassDescription>
          Mindfulness meditation has been scientifically proven to reduce stress and anxiety, improve mental focus, and even prevent and treat depression. The impact of mindfulness on the brain is so profound that the benefits even extend to our physical wellbeing , improving blood pressure, immune response, cell aging, and reducing perception of pain.
        </ClassDescription>
        <ClassDescription>
          My mindfulness meditation classes are accessible for everyone. Classes include gentle verbal guidance and breathing techniques that help to calm the mind and body so that practitioners receive maximum benefit from their practice. Imagine what mindfulness could do for your workplace!
        </ClassDescription>
      </ClassCard>
      <ClassCard>
        <ClassTitle>Yin Yoga</ClassTitle>
        <ClassDescription>
          Relax, breathe, and unwind with yin yoga. Yin yoga incorporates deep passive stretches with breath and stillness to release tension, improve mobility, and to bring suppleness and strength to connective tissues.
        </ClassDescription>
      </ClassCard>
    </ClassesWrapper>
  )
}

export default Classes;
