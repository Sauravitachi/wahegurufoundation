import React from "react";
import { homeSectionsOrder } from "@/content/home";
import { HomeSectionKey } from "@/types";
import {
  Hero,
  CampaignGrid,
  MissionVision,
  FeaturedAppeal,
  FocusAreas,
  AdvisoryBoard,
  HowYouCanHelp,
  ProcessSteps,
  Testimonials,
  GalleryGrid,
  StoriesGrid,
  FAQ,
} from "@/components/sections";

const SECTION_COMPONENTS: Partial<Record<HomeSectionKey, React.ComponentType>> = {
  hero: Hero,
  campaigns: CampaignGrid,
  missionVision: MissionVision,
  featuredAppeal: FeaturedAppeal,
  focusAreas: FocusAreas,
  advisoryBoard: AdvisoryBoard,
  howYouCanHelp: HowYouCanHelp,
  howWeWork: ProcessSteps,
  testimonials: Testimonials,
  galleryPreview: GalleryGrid,
  latestStories: StoriesGrid,
  faq: FAQ,
};

export default function HomePage() {
  return (
    <>
      {homeSectionsOrder.map((sectionKey) => {
        const SectionComponent = SECTION_COMPONENTS[sectionKey];
        if (!SectionComponent) return null;
        return <SectionComponent key={sectionKey} />;
      })}
    </>
  );
}
