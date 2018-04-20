# Bisq UI

## Developing
To start application locally run one of following commands:

    yarn all-serve
    yarn ionic-serve
    yarn electron-serve

## Translations
To extract all new phrases for translations run:

    yarn extract 
    
and then `src/assets/i18n/en.json` and `src/assets/i18n/pl.json` files will be updated.

## Testing e2e
e2e tests run against UI with mocked API responses. To prepare all modules and start tests run these commands (each in separate terminal):

    yarn ionic-serve
    yarn e2e-backend
    yarn e2e
