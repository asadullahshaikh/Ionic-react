import React, { useRef, useState } from "react";
import {
  IonApp,
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { calculator, refreshCircleOutline } from "ionicons/icons";

import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

const Tab1: React.FC = () => {
  const weight = useRef<HTMLIonInputElement>(null);
  const height = useRef<HTMLIonInputElement>(null);
  const [calculated, setCalculated] = useState<number>();
  const calculate = () => {
    const enteredWeight = weight.current!.value;
    const eneteredHeight = height.current!.value;
    if (!eneteredHeight || !enteredWeight) {
      return;
    }
    const bmi = +enteredWeight / (+eneteredHeight * +eneteredHeight);
    setCalculated(bmi);
  };
  const resetInputs = () => {
    weight.current!.value = "";
    height.current!.value = "";
    setCalculated(0);
  };
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Calculate</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">weight</IonLabel>
                <IonInput ref={weight}></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">height</IonLabel>
                <IonInput ref={height}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol className="ion-text-left">
              <IonButton onClick={calculate}>
                <IonIcon slot="start" icon={calculator} />
                Calculate
              </IonButton>
            </IonCol>
            <IonCol className="ion-text-right">
              <IonButton onClick={resetInputs}>
                <IonIcon slot="start" icon={refreshCircleOutline} />
                reset
              </IonButton>
            </IonCol>
          </IonRow>
          {calculated && (
            <IonRow>
              <IonCol>
                <IonCard>
                  <IonCardContent>
                    <h2>{calculated}</h2>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          )}
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default Tab1;
