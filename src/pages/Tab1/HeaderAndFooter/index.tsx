import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const HeaderAndFooter: React.FC = () => {
  return (
    <IonPage>
  <IonHeader>
    <IonToolbar>
      <IonTitle>Header</IonTitle>
    </IonToolbar>
  </IonHeader>

  <IonContent class="ion-padding">
    <h1>Main Content</h1>
  </IonContent>

  <IonFooter>
    <IonToolbar>
      <IonTitle>Footer</IonTitle>
    </IonToolbar>
  </IonFooter>
</IonPage>
  );
}

export default HeaderAndFooter;
