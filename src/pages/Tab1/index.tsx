import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import HeaderAndFooter from './HeaderAndFooter';
import './style.css';

const exampleLayouts: { Component?: React.FC; id: number; path: string; title: string; }[] = [
  { id: 1, Component: HeaderAndFooter, path: 'header-and-footer-layout', title: 'Header and Footer Layout' },
  { id: 2, Component: HeaderAndFooter,path: 'header-layout', title: 'Header Layout' },
  { id: 3, Component: HeaderAndFooter,path: 'footer-layout', title: 'Footer Layout' },
  // { id: 4, path: '', title: '' },
];

const Tab1: React.FC<RouteComponentProps> = ({ match }) => {
  console.log(`match`, match)
  console.log(`exampleLayouts`, exampleLayouts)
  return (
    <IonPage>
<IonRouterOutlet>
        {exampleLayouts.map(layout => <Route key={layout.id} path={`${match.path}/${layout.path}`} component={layout.Component} />)}
      </IonRouterOutlet>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {exampleLayouts.map(layout => (
            <IonItem href={`${match.path}/${layout.path}`} key={layout.id}>
              <IonLabel>{layout.title}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
