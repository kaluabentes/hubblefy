import React, { useState, useEffect } from "react";

import AppLayout from "layouts/AppLayout";
import CapsuleSection from "components/CapsuleSection";
import CapsuleCard from "components/CapsuleCard";
import CategoriesApi from "services/CategoriesApi";
import CapsulesApi from "services/CapsulesApi";
import { useCapsules } from "contexts/capsules";

export default function Board() {
  const [categories, setCategories] = useState([]);
  const [{ isLoading, capsules }] = useCapsules();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await CategoriesApi.getAll();
        setCategories(data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchCategories();
  }, []);

  function getCapsulesNotReaded() {
    return capsules.filter((cap) => !cap.isRead);
  }

  function getCapsulesByCategory(categoryId) {
    return capsules.filter((cap) => cap.category === categoryId);
  }

  function renderCapsule(capsule, isRead = true) {
    return (
      <CapsuleCard
        key={capsule.id}
        title={capsule.title}
        notificationCount={capsule.notificationCount}
        attachments={capsule.attachments}
        status={capsule.status}
        createdAt={capsule.createdAt}
        isRead={isRead}
      />
    );
  }

  function renderLoaders() {
    return (
      <>
        <CapsuleSection title="">
          <CapsuleCard.Loader />
          <CapsuleCard.Loader />
          <CapsuleCard.Loader />
        </CapsuleSection>
        <CapsuleSection title="">
          <CapsuleCard.Loader />
          <CapsuleCard.Loader />
          <CapsuleCard.Loader />
        </CapsuleSection>
        <CapsuleSection title="">
          <CapsuleCard.Loader />
          <CapsuleCard.Loader />
          <CapsuleCard.Loader />
        </CapsuleSection>
      </>
    );
  }

  function renderContent() {
    return (
      <>
        <CapsuleSection title="Fixadas">
          {capsules
            .filter((cap) => cap.isFixed)
            .map((cap) => renderCapsule(cap))}
        </CapsuleSection>
        <CapsuleSection title={`Não lidas (${getCapsulesNotReaded().length})`}>
          {getCapsulesNotReaded().map((cap) => renderCapsule(cap, false))}
        </CapsuleSection>
        {categories.map((category) => (
          <CapsuleSection key={category.id} title={category.title}>
            {getCapsulesByCategory(category.id)
              .filter((cap) => cap.isRead)
              .map((cap) => renderCapsule(cap))}
          </CapsuleSection>
        ))}
      </>
    );
  }

  return <AppLayout>{isLoading ? renderLoaders() : renderContent()}</AppLayout>;
}
