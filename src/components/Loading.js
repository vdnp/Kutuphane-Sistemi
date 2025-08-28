"use client";

import {
  LoaderContainer,
  Book,
  FlipPage,
  LoaderText,
  Page,
  Cover,
  Spine,
  PageContainer,
} from "styles/jss/components/LoadingStyle";

export default function Loading({
  width = "120px",
  height = "80px",
  text = "Loading...",
  pageCount = 3,
}) {
  return (
    <LoaderContainer>
      <Book width={width} height={height}>
        <Cover side="left" />
        <Cover side="right" />
        <Spine />

        {/* Statik sayfa (arka plan) */}
        <PageContainer style={{ zIndex: 1 }}>
          <Page />
        </PageContainer>

        {/* Animasyonlu sayfalar */}
        {Array.from({ length: pageCount }, (_, index) => (
          <FlipPage key={index} delay={`${index * 0.3}s`}>
            <Page />
          </FlipPage>
        ))}
      </Book>

      {text && <LoaderText>{text}</LoaderText>}
    </LoaderContainer>
  );
}
