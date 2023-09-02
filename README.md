# course-udemy-ionic

Curso Legacy: ionic 6: Crear aplicaciones IOS, Android con Angular.
https://www.udemy.com/course/ionic-ios-android-pwa-appstore-playstore-push/

Extensiones para Visual Studio Code

-   Ionic snippets for VS Code

## 🚀 Comandos

```bash
  ionic serve

  ionic serve --lab
```

### Crear Page

Para ver que va a crear el CLI de ionic con el comando

```bash
  ionic g page pages/home --dry-run
```

Crear página

```bash
  ionic g page pages/home

```

Crear página sin archivo de prueba

```bash
  ionic g page pages/home --spec=false

```

### Crear Módulo

```bash
  ionic g module components
```

### Crear Componente

La diferencia entre página y componente, es que el componente no va a tener nada relacionado al lazy-loading y no tiene un archivo de rutas.

```bash
  ionic g c components/header
```

Navegar entre pantallas

```bash
  <ion-button routerLink="/alerts">Ir a Alertas<ion-button>
```
