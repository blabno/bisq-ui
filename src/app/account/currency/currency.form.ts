export default [
  {
    "key": "ALI_PAY",
    "label": "AliPay",
    "form": {
      "accountNr": {
        "type": "text",
        "label": "ACCOUNT.CURRENCY.ACCOUNT_NO",
        "validators": [
          "required"
        ]
      },
      "tradeCurrencies": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.CURRENCY",
        "value": "CNY",
        "options": [
          {
            "value": "CNY",
            "label": "ACCOUNT.CURRENCY.CURRENCY_CNY"
          }
        ],
        "disabled": true
      },
      "accountName": {
        "type": "text",
        "label": "ACCOUNT.CURRENCY.ACCOUNT_NAME",
        "validators": [
          "required"
        ]
      },
      "limitations": {
        "type": "footer",
        "label": "ACCOUNT.CURRENCY.LIMITATIONS",
        "text": "ACCOUNT.CURRENCY.LIMITATION_1_0125_0"
      }
    }
  },
  {
    "key": "CASH_APP",
    "label": "Cash App",
    "form": {
      "cashTag": {
        "type": "text",
        "label": "ACCOUNT.CURRENCY.ACCOUNT_NO",
        "validators": [
          "required"
        ]
      },
      "tradeCurrencies": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.CURRENCY",
        "value": "USD",
        "options": [
          {
            "value": "USD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_USD"
          }
        ],
        "disabled": true
      },
      "accountName": {
        "type": "text",
        "label": "ACCOUNT.CURRENCY.ACCOUNT_NAME",
        "validators": [
          "required"
        ]
      },
      "limitations": {
        "type": "footer",
        "label": "ACCOUNT.CURRENCY.LIMITATIONS",
        "text": "ACCOUNT.CURRENCY.LIMITATION_1_04_0"
      }
    }
  },
  {
    "key": "CASH_DEPOSIT",
    "label": "ACCOUNT.CURRENCY.CASH_DEPOSIT",
    "form": {
      "countryCode": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.COUNTRY",
        "options": [
          {
            "value": "AD",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AD"
          },
          {
            "value": "AE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AE"
          },
          {
            "value": "AF",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AF"
          },
          {
            "value": "AG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AG"
          },
          {
            "value": "AI",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AI"
          },
          {
            "value": "AL",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AL"
          },
          {
            "value": "AM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AM"
          },
          {
            "value": "AO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AO"
          },
          {
            "value": "AQ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AQ"
          },
          {
            "value": "AR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AR"
          },
          {
            "value": "AS",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AS"
          },
          {
            "value": "AT",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AT"
          },
          {
            "value": "AU",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AU"
          },
          {
            "value": "AW",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AW"
          },
          {
            "value": "AX",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AX"
          },
          {
            "value": "AZ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AZ"
          },
          {
            "value": "BA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BA"
          },
          {
            "value": "BB",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BB"
          },
          {
            "value": "BD",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BD"
          },
          {
            "value": "BE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BE"
          },
          {
            "value": "BF",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BF"
          },
          {
            "value": "BG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BG"
          },
          {
            "value": "BH",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BH"
          },
          {
            "value": "BI",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BI"
          },
          {
            "value": "BJ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BJ"
          },
          {
            "value": "BL",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BL"
          },
          {
            "value": "BM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BM"
          },
          {
            "value": "BN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BN"
          },
          {
            "value": "BO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BO"
          },
          {
            "value": "BQ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BQ"
          },
          {
            "value": "BR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BR"
          },
          {
            "value": "BS",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BS"
          },
          {
            "value": "BT",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BT"
          },
          {
            "value": "BV",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BV"
          },
          {
            "value": "BW",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BW"
          },
          {
            "value": "BY",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BY"
          },
          {
            "value": "BZ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BZ"
          },
          {
            "value": "CA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CA"
          },
          {
            "value": "CC",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CC"
          },
          {
            "value": "CD",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CD"
          },
          {
            "value": "CF",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CF"
          },
          {
            "value": "CG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CG"
          },
          {
            "value": "CH",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CH"
          },
          {
            "value": "CI",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CI"
          },
          {
            "value": "CK",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CK"
          },
          {
            "value": "CL",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CL"
          },
          {
            "value": "CM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CM"
          },
          {
            "value": "CN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CN"
          },
          {
            "value": "CO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CO"
          },
          {
            "value": "CR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CR"
          },
          {
            "value": "CU",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CU"
          },
          {
            "value": "CV",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CV"
          },
          {
            "value": "CW",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CW"
          },
          {
            "value": "CX",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CX"
          },
          {
            "value": "CY",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CY"
          },
          {
            "value": "CZ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CZ"
          },
          {
            "value": "DE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_DE"
          },
          {
            "value": "DJ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_DJ"
          },
          {
            "value": "DK",
            "label": "ACCOUNT.CURRENCY.COUNTRY_DK"
          },
          {
            "value": "DM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_DM"
          },
          {
            "value": "DO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_DO"
          },
          {
            "value": "DZ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_DZ"
          },
          {
            "value": "EC",
            "label": "ACCOUNT.CURRENCY.COUNTRY_EC"
          },
          {
            "value": "EE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_EE"
          },
          {
            "value": "EG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_EG"
          },
          {
            "value": "EH",
            "label": "ACCOUNT.CURRENCY.COUNTRY_EH"
          },
          {
            "value": "ER",
            "label": "ACCOUNT.CURRENCY.COUNTRY_ER"
          },
          {
            "value": "ES",
            "label": "ACCOUNT.CURRENCY.COUNTRY_ES"
          },
          {
            "value": "ET",
            "label": "ACCOUNT.CURRENCY.COUNTRY_ET"
          },
          {
            "value": "FI",
            "label": "ACCOUNT.CURRENCY.COUNTRY_FI"
          },
          {
            "value": "FJ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_FJ"
          },
          {
            "value": "FK",
            "label": "ACCOUNT.CURRENCY.COUNTRY_FK"
          },
          {
            "value": "FM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_FM"
          },
          {
            "value": "FO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_FO"
          },
          {
            "value": "FR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_FR"
          },
          {
            "value": "GA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GA"
          },
          {
            "value": "GB",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GB"
          },
          {
            "value": "GD",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GD"
          },
          {
            "value": "GE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GE"
          },
          {
            "value": "GF",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GF"
          },
          {
            "value": "GG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GG"
          },
          {
            "value": "GH",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GH"
          },
          {
            "value": "GI",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GI"
          },
          {
            "value": "GL",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GL"
          },
          {
            "value": "GM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GM"
          },
          {
            "value": "GN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GN"
          },
          {
            "value": "GP",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GP"
          },
          {
            "value": "GQ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GQ"
          },
          {
            "value": "GR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GR"
          },
          {
            "value": "GS",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GS"
          },
          {
            "value": "GT",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GT"
          },
          {
            "value": "GU",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GU"
          },
          {
            "value": "GW",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GW"
          },
          {
            "value": "GY",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GY"
          },
          {
            "value": "HK",
            "label": "ACCOUNT.CURRENCY.COUNTRY_HK"
          },
          {
            "value": "HM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_HM"
          },
          {
            "value": "HN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_HN"
          },
          {
            "value": "HR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_HR"
          },
          {
            "value": "HT",
            "label": "ACCOUNT.CURRENCY.COUNTRY_HT"
          },
          {
            "value": "HU",
            "label": "ACCOUNT.CURRENCY.COUNTRY_HU"
          },
          {
            "value": "ID",
            "label": "ACCOUNT.CURRENCY.COUNTRY_ID"
          },
          {
            "value": "IE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_IE"
          },
          {
            "value": "IL",
            "label": "ACCOUNT.CURRENCY.COUNTRY_IL"
          },
          {
            "value": "IM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_IM"
          },
          {
            "value": "IN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_IN"
          },
          {
            "value": "IO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_IO"
          },
          {
            "value": "IQ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_IQ"
          },
          {
            "value": "IR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_IR"
          },
          {
            "value": "IS",
            "label": "ACCOUNT.CURRENCY.COUNTRY_IS"
          },
          {
            "value": "IT",
            "label": "ACCOUNT.CURRENCY.COUNTRY_IT"
          },
          {
            "value": "JE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_JE"
          },
          {
            "value": "JM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_JM"
          },
          {
            "value": "JO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_JO"
          },
          {
            "value": "JP",
            "label": "ACCOUNT.CURRENCY.COUNTRY_JP"
          },
          {
            "value": "KE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KE"
          },
          {
            "value": "KG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KG"
          },
          {
            "value": "KH",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KH"
          },
          {
            "value": "KI",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KI"
          },
          {
            "value": "KM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KM"
          },
          {
            "value": "KN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KN"
          },
          {
            "value": "KP",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KP"
          },
          {
            "value": "KR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KR"
          },
          {
            "value": "KW",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KW"
          },
          {
            "value": "KY",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KY"
          },
          {
            "value": "KZ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KZ"
          },
          {
            "value": "LA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LA"
          },
          {
            "value": "LB",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LB"
          },
          {
            "value": "LC",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LC"
          },
          {
            "value": "LI",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LI"
          },
          {
            "value": "LK",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LK"
          },
          {
            "value": "LR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LR"
          },
          {
            "value": "LS",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LS"
          },
          {
            "value": "LT",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LT"
          },
          {
            "value": "LU",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LU"
          },
          {
            "value": "LV",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LV"
          },
          {
            "value": "LY",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LY"
          },
          {
            "value": "MA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MA"
          },
          {
            "value": "MC",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MC"
          },
          {
            "value": "MD",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MD"
          },
          {
            "value": "ME",
            "label": "ACCOUNT.CURRENCY.COUNTRY_ME"
          },
          {
            "value": "MF",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MF"
          },
          {
            "value": "MG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MG"
          },
          {
            "value": "MH",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MH"
          },
          {
            "value": "MK",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MK"
          },
          {
            "value": "ML",
            "label": "ACCOUNT.CURRENCY.COUNTRY_ML"
          },
          {
            "value": "MM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MM"
          },
          {
            "value": "MN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MN"
          },
          {
            "value": "MO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MO"
          },
          {
            "value": "MP",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MP"
          },
          {
            "value": "MQ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MQ"
          },
          {
            "value": "MR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MR"
          },
          {
            "value": "MS",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MS"
          },
          {
            "value": "MT",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MT"
          },
          {
            "value": "MU",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MU"
          },
          {
            "value": "MV",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MV"
          },
          {
            "value": "MW",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MW"
          },
          {
            "value": "MX",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MX"
          },
          {
            "value": "MY",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MY"
          },
          {
            "value": "MZ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MZ"
          },
          {
            "value": "NA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NA"
          },
          {
            "value": "NC",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NC"
          },
          {
            "value": "NE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NE"
          },
          {
            "value": "NF",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NF"
          },
          {
            "value": "NG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NG"
          },
          {
            "value": "NI",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NI"
          },
          {
            "value": "NL",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NL"
          },
          {
            "value": "NO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NO"
          },
          {
            "value": "NP",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NP"
          },
          {
            "value": "NR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NR"
          },
          {
            "value": "NU",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NU"
          },
          {
            "value": "NZ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NZ"
          },
          {
            "value": "OM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_OM"
          },
          {
            "value": "PA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PA"
          },
          {
            "value": "PE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PE"
          },
          {
            "value": "PF",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PF"
          },
          {
            "value": "PG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PG"
          },
          {
            "value": "PH",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PH"
          },
          {
            "value": "PK",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PK"
          },
          {
            "value": "PL",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PL"
          },
          {
            "value": "PM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PM"
          },
          {
            "value": "PN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PN"
          },
          {
            "value": "PR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PR"
          },
          {
            "value": "PS",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PS"
          },
          {
            "value": "PT",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PT"
          },
          {
            "value": "PW",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PW"
          },
          {
            "value": "PY",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PY"
          },
          {
            "value": "QA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_QA"
          },
          {
            "value": "RE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_RE"
          },
          {
            "value": "RO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_RO"
          },
          {
            "value": "RS",
            "label": "ACCOUNT.CURRENCY.COUNTRY_RS"
          },
          {
            "value": "RU",
            "label": "ACCOUNT.CURRENCY.COUNTRY_RU"
          },
          {
            "value": "RW",
            "label": "ACCOUNT.CURRENCY.COUNTRY_RW"
          },
          {
            "value": "SA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SA"
          },
          {
            "value": "SB",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SB"
          },
          {
            "value": "SC",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SC"
          },
          {
            "value": "SD",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SD"
          },
          {
            "value": "SE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SE"
          },
          {
            "value": "SG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SG"
          },
          {
            "value": "SH",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SH"
          },
          {
            "value": "SI",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SI"
          },
          {
            "value": "SJ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SJ"
          },
          {
            "value": "SK",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SK"
          },
          {
            "value": "SL",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SL"
          },
          {
            "value": "SM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SM"
          },
          {
            "value": "SN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SN"
          },
          {
            "value": "SO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SO"
          },
          {
            "value": "SR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SR"
          },
          {
            "value": "SS",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SS"
          },
          {
            "value": "ST",
            "label": "ACCOUNT.CURRENCY.COUNTRY_ST"
          },
          {
            "value": "SV",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SV"
          },
          {
            "value": "SX",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SX"
          },
          {
            "value": "SY",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SY"
          },
          {
            "value": "SZ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SZ"
          },
          {
            "value": "TC",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TC"
          },
          {
            "value": "TD",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TD"
          },
          {
            "value": "TF",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TF"
          },
          {
            "value": "TG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TG"
          },
          {
            "value": "TH",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TH"
          },
          {
            "value": "TJ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TJ"
          },
          {
            "value": "TK",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TK"
          },
          {
            "value": "TL",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TL"
          },
          {
            "value": "TM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TM"
          },
          {
            "value": "TN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TN"
          },
          {
            "value": "TO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TO"
          },
          {
            "value": "TR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TR"
          },
          {
            "value": "TT",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TT"
          },
          {
            "value": "TV",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TV"
          },
          {
            "value": "TW",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TW"
          },
          {
            "value": "TZ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TZ"
          },
          {
            "value": "UA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_UA"
          },
          {
            "value": "UG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_UG"
          },
          {
            "value": "UM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_UM"
          },
          {
            "value": "US",
            "label": "ACCOUNT.CURRENCY.COUNTRY_US"
          },
          {
            "value": "UY",
            "label": "ACCOUNT.CURRENCY.COUNTRY_UY"
          },
          {
            "value": "UZ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_UZ"
          },
          {
            "value": "VA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_VA"
          },
          {
            "value": "VC",
            "label": "ACCOUNT.CURRENCY.COUNTRY_VC"
          },
          {
            "value": "VE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_VE"
          },
          {
            "value": "VG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_VG"
          },
          {
            "value": "VI",
            "label": "ACCOUNT.CURRENCY.COUNTRY_VI"
          },
          {
            "value": "VN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_VN"
          },
          {
            "value": "VU",
            "label": "ACCOUNT.CURRENCY.COUNTRY_VU"
          },
          {
            "value": "WF",
            "label": "ACCOUNT.CURRENCY.COUNTRY_WF"
          },
          {
            "value": "WS",
            "label": "ACCOUNT.CURRENCY.COUNTRY_WS"
          },
          {
            "value": "XK",
            "label": "ACCOUNT.CURRENCY.COUNTRY_XK"
          },
          {
            "value": "YE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_YE"
          },
          {
            "value": "YT",
            "label": "ACCOUNT.CURRENCY.COUNTRY_YT"
          },
          {
            "value": "ZA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_ZA"
          },
          {
            "value": "ZM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_ZM"
          },
          {
            "value": "ZW",
            "label": "ACCOUNT.CURRENCY.COUNTRY_ZW"
          }
        ],
        "validators": [
          "required"
        ]
      },
      "tradeCurrencies": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.CURRENCY",
        "options": [
          {
            "value": "AED",
            "label": "ACCOUNT.CURRENCY.CURRENCY_AED"
          },
          {
            "value": "AFN",
            "label": "ACCOUNT.CURRENCY.CURRENCY_AFN"
          },
          {
            "value": "ALL",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ALL"
          },
          {
            "value": "AMD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_AMD"
          },
          {
            "value": "ANG",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ANG"
          },
          {
            "value": "AOA",
            "label": "ACCOUNT.CURRENCY.CURRENCY_AOA"
          },
          {
            "value": "ARS",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ARS"
          },
          {
            "value": "AUD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_AUD"
          },
          {
            "value": "AWG",
            "label": "ACCOUNT.CURRENCY.CURRENCY_AWG"
          },
          {
            "value": "AZN",
            "label": "ACCOUNT.CURRENCY.CURRENCY_AZN"
          },
          {
            "value": "BAM",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BAM"
          },
          {
            "value": "BBD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BBD"
          },
          {
            "value": "BDT",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BDT"
          },
          {
            "value": "BGN",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BGN"
          },
          {
            "value": "BHD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BHD"
          },
          {
            "value": "BIF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BIF"
          },
          {
            "value": "BMD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BMD"
          },
          {
            "value": "BND",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BND"
          },
          {
            "value": "BOB",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BOB"
          },
          {
            "value": "BRL",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BRL"
          },
          {
            "value": "BSD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BSD"
          },
          {
            "value": "BTN",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BTN"
          },
          {
            "value": "BWP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BWP"
          },
          {
            "value": "BYR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BYR"
          },
          {
            "value": "BZD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BZD"
          },
          {
            "value": "CAD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_CAD"
          },
          {
            "value": "CDF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_CDF"
          },
          {
            "value": "CHF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_CHF"
          },
          {
            "value": "CLP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_CLP"
          },
          {
            "value": "CNY",
            "label": "ACCOUNT.CURRENCY.CURRENCY_CNY"
          },
          {
            "value": "COP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_COP"
          },
          {
            "value": "CRC",
            "label": "ACCOUNT.CURRENCY.CURRENCY_CRC"
          },
          {
            "value": "CUP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_CUP"
          },
          {
            "value": "CVE",
            "label": "ACCOUNT.CURRENCY.CURRENCY_CVE"
          },
          {
            "value": "CZK",
            "label": "ACCOUNT.CURRENCY.CURRENCY_CZK"
          },
          {
            "value": "DJF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_DJF"
          },
          {
            "value": "DKK",
            "label": "ACCOUNT.CURRENCY.CURRENCY_DKK"
          },
          {
            "value": "DOP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_DOP"
          },
          {
            "value": "DZD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_DZD"
          },
          {
            "value": "ECS",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ECS"
          },
          {
            "value": "EGP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_EGP"
          },
          {
            "value": "ERN",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ERN"
          },
          {
            "value": "ETB",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ETB"
          },
          {
            "value": "EUR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_EUR"
          },
          {
            "value": "FJD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_FJD"
          },
          {
            "value": "FKP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_FKP"
          },
          {
            "value": "GBP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_GBP"
          },
          {
            "value": "GEL",
            "label": "ACCOUNT.CURRENCY.CURRENCY_GEL"
          },
          {
            "value": "GGP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_GGP"
          },
          {
            "value": "GHS",
            "label": "ACCOUNT.CURRENCY.CURRENCY_GHS"
          },
          {
            "value": "GIP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_GIP"
          },
          {
            "value": "GMD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_GMD"
          },
          {
            "value": "GNF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_GNF"
          },
          {
            "value": "GWP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_GWP"
          },
          {
            "value": "GYD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_GYD"
          },
          {
            "value": "HKD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_HKD"
          },
          {
            "value": "HNL",
            "label": "ACCOUNT.CURRENCY.CURRENCY_HNL"
          },
          {
            "value": "HRK",
            "label": "ACCOUNT.CURRENCY.CURRENCY_HRK"
          },
          {
            "value": "HTG",
            "label": "ACCOUNT.CURRENCY.CURRENCY_HTG"
          },
          {
            "value": "HUF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_HUF"
          },
          {
            "value": "ILS",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ILS"
          },
          {
            "value": "INR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_INR"
          },
          {
            "value": "IQD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_IQD"
          },
          {
            "value": "IRR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_IRR"
          },
          {
            "value": "ISK",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ISK"
          },
          {
            "value": "Itd",
            "label": "ACCOUNT.CURRENCY.CURRENCY_Itd"
          },
          {
            "value": "JMD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_JMD"
          },
          {
            "value": "JOD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_JOD"
          },
          {
            "value": "JPY",
            "label": "ACCOUNT.CURRENCY.CURRENCY_JPY"
          },
          {
            "value": "KES",
            "label": "ACCOUNT.CURRENCY.CURRENCY_KES"
          },
          {
            "value": "KGS",
            "label": "ACCOUNT.CURRENCY.CURRENCY_KGS"
          },
          {
            "value": "KHR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_KHR"
          },
          {
            "value": "KMF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_KMF"
          },
          {
            "value": "KPW",
            "label": "ACCOUNT.CURRENCY.CURRENCY_KPW"
          },
          {
            "value": "KRW",
            "label": "ACCOUNT.CURRENCY.CURRENCY_KRW"
          },
          {
            "value": "KWD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_KWD"
          },
          {
            "value": "KYD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_KYD"
          },
          {
            "value": "KZT",
            "label": "ACCOUNT.CURRENCY.CURRENCY_KZT"
          },
          {
            "value": "LAK",
            "label": "ACCOUNT.CURRENCY.CURRENCY_LAK"
          },
          {
            "value": "LBP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_LBP"
          },
          {
            "value": "LKR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_LKR"
          },
          {
            "value": "LRD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_LRD"
          },
          {
            "value": "LSL",
            "label": "ACCOUNT.CURRENCY.CURRENCY_LSL"
          },
          {
            "value": "LTL",
            "label": "ACCOUNT.CURRENCY.CURRENCY_LTL"
          },
          {
            "value": "LVL",
            "label": "ACCOUNT.CURRENCY.CURRENCY_LVL"
          },
          {
            "value": "LYD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_LYD"
          },
          {
            "value": "MAD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MAD"
          },
          {
            "value": "MDL",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MDL"
          },
          {
            "value": "MGF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MGF"
          },
          {
            "value": "MKD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MKD"
          },
          {
            "value": "MMK",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MMK"
          },
          {
            "value": "MNT",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MNT"
          },
          {
            "value": "MOP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MOP"
          },
          {
            "value": "MRO",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MRO"
          },
          {
            "value": "MUR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MUR"
          },
          {
            "value": "MVR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MVR"
          },
          {
            "value": "MWK",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MWK"
          },
          {
            "value": "MXN",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MXN"
          },
          {
            "value": "MYR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MYR"
          },
          {
            "value": "MZN",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MZN"
          },
          {
            "value": "NAD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_NAD"
          },
          {
            "value": "NGN",
            "label": "ACCOUNT.CURRENCY.CURRENCY_NGN"
          },
          {
            "value": "NIO",
            "label": "ACCOUNT.CURRENCY.CURRENCY_NIO"
          },
          {
            "value": "NOK",
            "label": "ACCOUNT.CURRENCY.CURRENCY_NOK"
          },
          {
            "value": "NPR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_NPR"
          },
          {
            "value": "NZD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_NZD"
          },
          {
            "value": "OMR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_OMR"
          },
          {
            "value": "PAB",
            "label": "ACCOUNT.CURRENCY.CURRENCY_PAB"
          },
          {
            "value": "PEN",
            "label": "ACCOUNT.CURRENCY.CURRENCY_PEN"
          },
          {
            "value": "PGK",
            "label": "ACCOUNT.CURRENCY.CURRENCY_PGK"
          },
          {
            "value": "PHP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_PHP"
          },
          {
            "value": "PKR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_PKR"
          },
          {
            "value": "PLN",
            "label": "ACCOUNT.CURRENCY.CURRENCY_PLN"
          },
          {
            "value": "PYG",
            "label": "ACCOUNT.CURRENCY.CURRENCY_PYG"
          },
          {
            "value": "QAR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_QAR"
          },
          {
            "value": "QTQ",
            "label": "ACCOUNT.CURRENCY.CURRENCY_QTQ"
          },
          {
            "value": "RON",
            "label": "ACCOUNT.CURRENCY.CURRENCY_RON"
          },
          {
            "value": "RSD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_RSD"
          },
          {
            "value": "RUB",
            "label": "ACCOUNT.CURRENCY.CURRENCY_RUB"
          },
          {
            "value": "RWF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_RWF"
          },
          {
            "value": "SAR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SAR"
          },
          {
            "value": "SBD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SBD"
          },
          {
            "value": "SCR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SCR"
          },
          {
            "value": "SDG",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SDG"
          },
          {
            "value": "SEK",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SEK"
          },
          {
            "value": "SGD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SGD"
          },
          {
            "value": "SHP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SHP"
          },
          {
            "value": "SLL",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SLL"
          },
          {
            "value": "SOS",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SOS"
          },
          {
            "value": "SRD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SRD"
          },
          {
            "value": "SSP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SSP"
          },
          {
            "value": "STD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_STD"
          },
          {
            "value": "SVC",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SVC"
          },
          {
            "value": "SYP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SYP"
          },
          {
            "value": "SZL",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SZL"
          },
          {
            "value": "THB",
            "label": "ACCOUNT.CURRENCY.CURRENCY_THB"
          },
          {
            "value": "TJS",
            "label": "ACCOUNT.CURRENCY.CURRENCY_TJS"
          },
          {
            "value": "TMT",
            "label": "ACCOUNT.CURRENCY.CURRENCY_TMT"
          },
          {
            "value": "TND",
            "label": "ACCOUNT.CURRENCY.CURRENCY_TND"
          },
          {
            "value": "TOP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_TOP"
          },
          {
            "value": "TRY",
            "label": "ACCOUNT.CURRENCY.CURRENCY_TRY"
          },
          {
            "value": "TTD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_TTD"
          },
          {
            "value": "TWD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_TWD"
          },
          {
            "value": "TZS",
            "label": "ACCOUNT.CURRENCY.CURRENCY_TZS"
          },
          {
            "value": "UAH",
            "label": "ACCOUNT.CURRENCY.CURRENCY_UAH"
          },
          {
            "value": "UGX",
            "label": "ACCOUNT.CURRENCY.CURRENCY_UGX"
          },
          {
            "value": "USD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_USD"
          },
          {
            "value": "UYU",
            "label": "ACCOUNT.CURRENCY.CURRENCY_UYU"
          },
          {
            "value": "UZS",
            "label": "ACCOUNT.CURRENCY.CURRENCY_UZS"
          },
          {
            "value": "VEF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_VEF"
          },
          {
            "value": "VND",
            "label": "ACCOUNT.CURRENCY.CURRENCY_VND"
          },
          {
            "value": "VUV",
            "label": "ACCOUNT.CURRENCY.CURRENCY_VUV"
          },
          {
            "value": "WST",
            "label": "ACCOUNT.CURRENCY.CURRENCY_WST"
          },
          {
            "value": "XAF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_XAF"
          },
          {
            "value": "XCD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_XCD"
          },
          {
            "value": "XOF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_XOF"
          },
          {
            "value": "XPF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_XPF"
          },
          {
            "value": "YER",
            "label": "ACCOUNT.CURRENCY.CURRENCY_YER"
          },
          {
            "value": "ZAR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ZAR"
          },
          {
            "value": "ZMW",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ZMW"
          },
          {
            "value": "ZWD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ZWD"
          }
        ],
        "validators": [
          "required"
        ]
      },
      "holderName": {
        "type": "text",
        "label": "ACCOUNT.CURRENCY.OWNER_NAME",
        "validators": [
          "required"
        ]
      },
      "holderEmail": {
        "type": "text",
        "label": "ACCOUNT.CURRENCY.EMAIL",
        "validators": [
          "required",
          "email"
        ]
      },
      "bankName": {
        "type": "text",
        "label": "ACCOUNT.CURRENCY.BANK_NAME"
      },
      "bankId": {
        "type": "text",
        "label": "ACCOUNT.CURRENCY.BANK_ID"
      },
      "branchId": {
        "type": "text",
        "label": "ACCOUNT.CURRENCY.BRANCH_NO"
      },
      "accountNr": {
        "type": "text",
        "label": "ACCOUNT.CURRENCY.ACCOUNT_NO_IBAN"
      },
      "requirements": {
        "type": "text",
        "label": "ACCOUNT.CURRENCY.EXTRA_REQUIREMENTS"
      },
      "accountName": {
        "type": "text",
        "label": "ACCOUNT.CURRENCY.ACCOUNT_NAME",
        "validators": [
          "required"
        ]
      },
      "limitations": {
        "type": "footer",
        "label": "ACCOUNT.CURRENCY.LIMITATIONS",
        "text": "ACCOUNT.CURRENCY.LIMITATION_4_0625_0"
      }
    }
  },
  {
    "key": "CHASE_QUICK_PAY",
    "label": "Chase QuickPay",
    "form": {
      "holderName": {
        "type": "text",
        "label": "ACCOUNT.CURRENCY.OWNER_NAME",
        "validators": [
          "required"
        ]
      },
      "email": {
        "type": "text",
        "label": "ACCOUNT.CURRENCY.EMAIL",
        "validators": [
          "required",
          "email"
        ]
      },
      "tradeCurrencies": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.CURRENCY",
        "value": "USD",
        "options": [
          {
            "value": "USD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_USD"
          }
        ],
        "disabled": true
      },
      "accountName": {
        "type": "text",
        "label": "ACCOUNT.CURRENCY.ACCOUNT_NAME",
        "validators": [
          "required"
        ]
      },
      "limitations": {
        "type": "footer",
        "label": "ACCOUNT.CURRENCY.LIMITATIONS",
        "text": "ACCOUNT.CURRENCY.LIMITATION_1_0625_0"
      }
    }
  },
  {
    "key": "FASTER_PAYMENTS",
    "label": "Faster Payments",
    "form": {
      "sortCode": {
        "type": "number",
        "label": "ACCOUNT.CURRENCY.UK_SORT_NAME",
        "validators": [
          "required",
          "ukSortCode"
        ]
      },
      "accountNr": {
        "type": "number",
        "label": "ACCOUNT.CURRENCY.ACCOUNT_NUMBER",
        "validators": [
          "required",
          "ukAccountNumber"
        ]
      },
      "tradeCurrencies": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.CURRENCY",
        "value": "GBP",
        "options": [
          {
            "value": "GBP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_GBP"
          }
        ],
        "disabled": true
      },
      "accountName": {
        "type": "text",
        "label": "ACCOUNT.CURRENCY.ACCOUNT_NAME",
        "validators": [
          "required"
        ]
      },
      "limitations": {
        "type": "footer",
        "label": "ACCOUNT.CURRENCY.LIMITATIONS",
        "text": "ACCOUNT.CURRENCY.LIMITATION_1_0625_0"
      }
    }
  },
  {
    "key": "INTERAC_E_TRANSFER",
    "label": "Interac e-Transfer",
    "form": {
      "holderName": {"type": "text", "label": "ACCOUNT.CURRENCY.OWNER_NAME", "validators": ["required"]},
      "emailOrMobileNr": {
        "type": "text",
        "label": "ACCOUNT.CURRENCY.EMAIL_OR_MOBILE",
        "validators": ["required", "emailOrCanadianMobile"]
      },
      "question": {"type": "text", "label": "ACCOUNT.CURRENCY.SECRET_QUESTION", "validators": ["required"]},
      "answer": {"type": "text", "label": "ACCOUNT.CURRENCY.SECRET_ANSWER", "validators": ["required"]},
      "tradeCurrencies": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.CURRENCY",
        "value": "CAD",
        "options": [{"value": "CAD", "label": "ACCOUNT.CURRENCY.CURRENCY_CAD"}],
        "disabled": true
      },
      "accountName": {"type": "text", "label": "ACCOUNT.CURRENCY.ACCOUNT_NAME", "validators": ["required"]},
      "limitations": {
        "type": "footer",
        "label": "ACCOUNT.CURRENCY.LIMITATIONS",
        "text": "ACCOUNT.CURRENCY.LIMITATION_1_0625_0"
      }
    }
  },
  {
    "key": "MONEY_BEAM",
    "label": "MoneyBeam (N26)",
    "form": {
      "accountId": {"type": "text", "label": "ACCOUNT.CURRENCY.EMAIL_OR_MOBILE", "validators": ["required"]},
      "tradeCurrencies": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.CURRENCY",
        "value": "EUR",
        "options": [{"value": "EUR", "label": "ACCOUNT.CURRENCY.CURRENCY_EUR"}],
        "disabled": true
      },
      "accountName": {"type": "text", "label": "ACCOUNT.CURRENCY.ACCOUNT_NAME", "validators": ["required"]},
      "limitations": {
        "type": "footer",
        "label": "ACCOUNT.CURRENCY.LIMITATIONS",
        "text": "ACCOUNT.CURRENCY.LIMITATION_1_04_0"
      }
    }
  },
  {
    "key": "NATIONAL_BANK",
    "label": "ACCOUNT.CURRENCY.NATIONAL_BANK_TRANSFER",
    "form": {
      "countryCode": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.COUNTRY",
        "options": [
          {
            "value": "AD",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AD"
          },
          {
            "value": "AE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AE"
          },
          {
            "value": "AF",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AF"
          },
          {
            "value": "AG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AG"
          },
          {
            "value": "AI",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AI"
          },
          {
            "value": "AL",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AL"
          },
          {
            "value": "AM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AM"
          },
          {
            "value": "AO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AO"
          },
          {
            "value": "AQ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AQ"
          },
          {
            "value": "AR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AR"
          },
          {
            "value": "AS",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AS"
          },
          {
            "value": "AT",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AT"
          },
          {
            "value": "AU",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AU"
          },
          {
            "value": "AW",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AW"
          },
          {
            "value": "AX",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AX"
          },
          {
            "value": "AZ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AZ"
          },
          {
            "value": "BA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BA"
          },
          {
            "value": "BB",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BB"
          },
          {
            "value": "BD",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BD"
          },
          {
            "value": "BE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BE"
          },
          {
            "value": "BF",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BF"
          },
          {
            "value": "BG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BG"
          },
          {
            "value": "BH",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BH"
          },
          {
            "value": "BI",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BI"
          },
          {
            "value": "BJ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BJ"
          },
          {
            "value": "BL",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BL"
          },
          {
            "value": "BM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BM"
          },
          {
            "value": "BN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BN"
          },
          {
            "value": "BO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BO"
          },
          {
            "value": "BQ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BQ"
          },
          {
            "value": "BR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BR"
          },
          {
            "value": "BS",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BS"
          },
          {
            "value": "BT",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BT"
          },
          {
            "value": "BV",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BV"
          },
          {
            "value": "BW",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BW"
          },
          {
            "value": "BY",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BY"
          },
          {
            "value": "BZ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BZ"
          },
          {
            "value": "CA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CA"
          },
          {
            "value": "CC",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CC"
          },
          {
            "value": "CD",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CD"
          },
          {
            "value": "CF",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CF"
          },
          {
            "value": "CG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CG"
          },
          {
            "value": "CH",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CH"
          },
          {
            "value": "CI",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CI"
          },
          {
            "value": "CK",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CK"
          },
          {
            "value": "CL",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CL"
          },
          {
            "value": "CM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CM"
          },
          {
            "value": "CN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CN"
          },
          {
            "value": "CO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CO"
          },
          {
            "value": "CR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CR"
          },
          {
            "value": "CU",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CU"
          },
          {
            "value": "CV",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CV"
          },
          {
            "value": "CW",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CW"
          },
          {
            "value": "CX",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CX"
          },
          {
            "value": "CY",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CY"
          },
          {
            "value": "CZ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CZ"
          },
          {
            "value": "DE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_DE"
          },
          {
            "value": "DJ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_DJ"
          },
          {
            "value": "DK",
            "label": "ACCOUNT.CURRENCY.COUNTRY_DK"
          },
          {
            "value": "DM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_DM"
          },
          {
            "value": "DO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_DO"
          },
          {
            "value": "DZ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_DZ"
          },
          {
            "value": "EC",
            "label": "ACCOUNT.CURRENCY.COUNTRY_EC"
          },
          {
            "value": "EE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_EE"
          },
          {
            "value": "EG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_EG"
          },
          {
            "value": "EH",
            "label": "ACCOUNT.CURRENCY.COUNTRY_EH"
          },
          {
            "value": "ER",
            "label": "ACCOUNT.CURRENCY.COUNTRY_ER"
          },
          {
            "value": "ES",
            "label": "ACCOUNT.CURRENCY.COUNTRY_ES"
          },
          {
            "value": "ET",
            "label": "ACCOUNT.CURRENCY.COUNTRY_ET"
          },
          {
            "value": "FI",
            "label": "ACCOUNT.CURRENCY.COUNTRY_FI"
          },
          {
            "value": "FJ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_FJ"
          },
          {
            "value": "FK",
            "label": "ACCOUNT.CURRENCY.COUNTRY_FK"
          },
          {
            "value": "FM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_FM"
          },
          {
            "value": "FO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_FO"
          },
          {
            "value": "FR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_FR"
          },
          {
            "value": "GA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GA"
          },
          {
            "value": "GB",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GB"
          },
          {
            "value": "GD",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GD"
          },
          {
            "value": "GE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GE"
          },
          {
            "value": "GF",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GF"
          },
          {
            "value": "GG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GG"
          },
          {
            "value": "GH",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GH"
          },
          {
            "value": "GI",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GI"
          },
          {
            "value": "GL",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GL"
          },
          {
            "value": "GM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GM"
          },
          {
            "value": "GN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GN"
          },
          {
            "value": "GP",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GP"
          },
          {
            "value": "GQ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GQ"
          },
          {
            "value": "GR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GR"
          },
          {
            "value": "GS",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GS"
          },
          {
            "value": "GT",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GT"
          },
          {
            "value": "GU",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GU"
          },
          {
            "value": "GW",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GW"
          },
          {
            "value": "GY",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GY"
          },
          {
            "value": "HK",
            "label": "ACCOUNT.CURRENCY.COUNTRY_HK"
          },
          {
            "value": "HM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_HM"
          },
          {
            "value": "HN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_HN"
          },
          {
            "value": "HR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_HR"
          },
          {
            "value": "HT",
            "label": "ACCOUNT.CURRENCY.COUNTRY_HT"
          },
          {
            "value": "HU",
            "label": "ACCOUNT.CURRENCY.COUNTRY_HU"
          },
          {
            "value": "ID",
            "label": "ACCOUNT.CURRENCY.COUNTRY_ID"
          },
          {
            "value": "IE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_IE"
          },
          {
            "value": "IL",
            "label": "ACCOUNT.CURRENCY.COUNTRY_IL"
          },
          {
            "value": "IM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_IM"
          },
          {
            "value": "IN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_IN"
          },
          {
            "value": "IO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_IO"
          },
          {
            "value": "IQ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_IQ"
          },
          {
            "value": "IR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_IR"
          },
          {
            "value": "IS",
            "label": "ACCOUNT.CURRENCY.COUNTRY_IS"
          },
          {
            "value": "IT",
            "label": "ACCOUNT.CURRENCY.COUNTRY_IT"
          },
          {
            "value": "JE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_JE"
          },
          {
            "value": "JM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_JM"
          },
          {
            "value": "JO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_JO"
          },
          {
            "value": "JP",
            "label": "ACCOUNT.CURRENCY.COUNTRY_JP"
          },
          {
            "value": "KE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KE"
          },
          {
            "value": "KG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KG"
          },
          {
            "value": "KH",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KH"
          },
          {
            "value": "KI",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KI"
          },
          {
            "value": "KM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KM"
          },
          {
            "value": "KN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KN"
          },
          {
            "value": "KP",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KP"
          },
          {
            "value": "KR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KR"
          },
          {
            "value": "KW",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KW"
          },
          {
            "value": "KY",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KY"
          },
          {
            "value": "KZ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KZ"
          },
          {
            "value": "LA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LA"
          },
          {
            "value": "LB",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LB"
          },
          {
            "value": "LC",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LC"
          },
          {
            "value": "LI",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LI"
          },
          {
            "value": "LK",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LK"
          },
          {
            "value": "LR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LR"
          },
          {
            "value": "LS",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LS"
          },
          {
            "value": "LT",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LT"
          },
          {
            "value": "LU",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LU"
          },
          {
            "value": "LV",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LV"
          },
          {
            "value": "LY",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LY"
          },
          {
            "value": "MA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MA"
          },
          {
            "value": "MC",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MC"
          },
          {
            "value": "MD",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MD"
          },
          {
            "value": "ME",
            "label": "ACCOUNT.CURRENCY.COUNTRY_ME"
          },
          {
            "value": "MF",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MF"
          },
          {
            "value": "MG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MG"
          },
          {
            "value": "MH",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MH"
          },
          {
            "value": "MK",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MK"
          },
          {
            "value": "ML",
            "label": "ACCOUNT.CURRENCY.COUNTRY_ML"
          },
          {
            "value": "MM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MM"
          },
          {
            "value": "MN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MN"
          },
          {
            "value": "MO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MO"
          },
          {
            "value": "MP",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MP"
          },
          {
            "value": "MQ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MQ"
          },
          {
            "value": "MR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MR"
          },
          {
            "value": "MS",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MS"
          },
          {
            "value": "MT",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MT"
          },
          {
            "value": "MU",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MU"
          },
          {
            "value": "MV",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MV"
          },
          {
            "value": "MW",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MW"
          },
          {
            "value": "MX",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MX"
          },
          {
            "value": "MY",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MY"
          },
          {
            "value": "MZ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MZ"
          },
          {
            "value": "NA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NA"
          },
          {
            "value": "NC",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NC"
          },
          {
            "value": "NE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NE"
          },
          {
            "value": "NF",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NF"
          },
          {
            "value": "NG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NG"
          },
          {
            "value": "NI",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NI"
          },
          {
            "value": "NL",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NL"
          },
          {
            "value": "NO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NO"
          },
          {
            "value": "NP",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NP"
          },
          {
            "value": "NR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NR"
          },
          {
            "value": "NU",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NU"
          },
          {
            "value": "NZ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NZ"
          },
          {
            "value": "OM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_OM"
          },
          {
            "value": "PA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PA"
          },
          {
            "value": "PE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PE"
          },
          {
            "value": "PF",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PF"
          },
          {
            "value": "PG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PG"
          },
          {
            "value": "PH",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PH"
          },
          {
            "value": "PK",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PK"
          },
          {
            "value": "PL",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PL"
          },
          {
            "value": "PM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PM"
          },
          {
            "value": "PN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PN"
          },
          {
            "value": "PR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PR"
          },
          {
            "value": "PS",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PS"
          },
          {
            "value": "PT",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PT"
          },
          {
            "value": "PW",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PW"
          },
          {
            "value": "PY",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PY"
          },
          {
            "value": "QA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_QA"
          },
          {
            "value": "RE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_RE"
          },
          {
            "value": "RO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_RO"
          },
          {
            "value": "RS",
            "label": "ACCOUNT.CURRENCY.COUNTRY_RS"
          },
          {
            "value": "RU",
            "label": "ACCOUNT.CURRENCY.COUNTRY_RU"
          },
          {
            "value": "RW",
            "label": "ACCOUNT.CURRENCY.COUNTRY_RW"
          },
          {
            "value": "SA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SA"
          },
          {
            "value": "SB",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SB"
          },
          {
            "value": "SC",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SC"
          },
          {
            "value": "SD",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SD"
          },
          {
            "value": "SE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SE"
          },
          {
            "value": "SG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SG"
          },
          {
            "value": "SH",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SH"
          },
          {
            "value": "SI",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SI"
          },
          {
            "value": "SJ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SJ"
          },
          {
            "value": "SK",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SK"
          },
          {
            "value": "SL",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SL"
          },
          {
            "value": "SM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SM"
          },
          {
            "value": "SN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SN"
          },
          {
            "value": "SO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SO"
          },
          {
            "value": "SR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SR"
          },
          {
            "value": "SS",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SS"
          },
          {
            "value": "ST",
            "label": "ACCOUNT.CURRENCY.COUNTRY_ST"
          },
          {
            "value": "SV",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SV"
          },
          {
            "value": "SX",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SX"
          },
          {
            "value": "SY",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SY"
          },
          {
            "value": "SZ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SZ"
          },
          {
            "value": "TC",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TC"
          },
          {
            "value": "TD",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TD"
          },
          {
            "value": "TF",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TF"
          },
          {
            "value": "TG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TG"
          },
          {
            "value": "TH",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TH"
          },
          {
            "value": "TJ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TJ"
          },
          {
            "value": "TK",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TK"
          },
          {
            "value": "TL",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TL"
          },
          {
            "value": "TM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TM"
          },
          {
            "value": "TN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TN"
          },
          {
            "value": "TO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TO"
          },
          {
            "value": "TR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TR"
          },
          {
            "value": "TT",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TT"
          },
          {
            "value": "TV",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TV"
          },
          {
            "value": "TW",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TW"
          },
          {
            "value": "TZ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TZ"
          },
          {
            "value": "UA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_UA"
          },
          {
            "value": "UG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_UG"
          },
          {
            "value": "UM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_UM"
          },
          {
            "value": "US",
            "label": "ACCOUNT.CURRENCY.COUNTRY_US"
          },
          {
            "value": "UY",
            "label": "ACCOUNT.CURRENCY.COUNTRY_UY"
          },
          {
            "value": "UZ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_UZ"
          },
          {
            "value": "VA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_VA"
          },
          {
            "value": "VC",
            "label": "ACCOUNT.CURRENCY.COUNTRY_VC"
          },
          {
            "value": "VE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_VE"
          },
          {
            "value": "VG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_VG"
          },
          {
            "value": "VI",
            "label": "ACCOUNT.CURRENCY.COUNTRY_VI"
          },
          {
            "value": "VN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_VN"
          },
          {
            "value": "VU",
            "label": "ACCOUNT.CURRENCY.COUNTRY_VU"
          },
          {
            "value": "WF",
            "label": "ACCOUNT.CURRENCY.COUNTRY_WF"
          },
          {
            "value": "WS",
            "label": "ACCOUNT.CURRENCY.COUNTRY_WS"
          },
          {
            "value": "XK",
            "label": "ACCOUNT.CURRENCY.COUNTRY_XK"
          },
          {
            "value": "YE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_YE"
          },
          {
            "value": "YT",
            "label": "ACCOUNT.CURRENCY.COUNTRY_YT"
          },
          {
            "value": "ZA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_ZA"
          },
          {
            "value": "ZM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_ZM"
          },
          {
            "value": "ZW",
            "label": "ACCOUNT.CURRENCY.COUNTRY_ZW"
          }
        ],
        "validators": [
          "required"
        ]
      },
      "tradeCurrencies": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.CURRENCY",
        "options": [
          {
            "value": "AED",
            "label": "ACCOUNT.CURRENCY.CURRENCY_AED"
          },
          {
            "value": "AFN",
            "label": "ACCOUNT.CURRENCY.CURRENCY_AFN"
          },
          {
            "value": "ALL",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ALL"
          },
          {
            "value": "AMD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_AMD"
          },
          {
            "value": "ANG",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ANG"
          },
          {
            "value": "AOA",
            "label": "ACCOUNT.CURRENCY.CURRENCY_AOA"
          },
          {
            "value": "ARS",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ARS"
          },
          {
            "value": "AUD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_AUD"
          },
          {
            "value": "AWG",
            "label": "ACCOUNT.CURRENCY.CURRENCY_AWG"
          },
          {
            "value": "AZN",
            "label": "ACCOUNT.CURRENCY.CURRENCY_AZN"
          },
          {
            "value": "BAM",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BAM"
          },
          {
            "value": "BBD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BBD"
          },
          {
            "value": "BDT",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BDT"
          },
          {
            "value": "BGN",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BGN"
          },
          {
            "value": "BHD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BHD"
          },
          {
            "value": "BIF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BIF"
          },
          {
            "value": "BMD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BMD"
          },
          {
            "value": "BND",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BND"
          },
          {
            "value": "BOB",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BOB"
          },
          {
            "value": "BRL",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BRL"
          },
          {
            "value": "BSD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BSD"
          },
          {
            "value": "BTN",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BTN"
          },
          {
            "value": "BWP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BWP"
          },
          {
            "value": "BYR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BYR"
          },
          {
            "value": "BZD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BZD"
          },
          {
            "value": "CAD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_CAD"
          },
          {
            "value": "CDF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_CDF"
          },
          {
            "value": "CHF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_CHF"
          },
          {
            "value": "CLP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_CLP"
          },
          {
            "value": "CNY",
            "label": "ACCOUNT.CURRENCY.CURRENCY_CNY"
          },
          {
            "value": "COP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_COP"
          },
          {
            "value": "CRC",
            "label": "ACCOUNT.CURRENCY.CURRENCY_CRC"
          },
          {
            "value": "CUP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_CUP"
          },
          {
            "value": "CVE",
            "label": "ACCOUNT.CURRENCY.CURRENCY_CVE"
          },
          {
            "value": "CZK",
            "label": "ACCOUNT.CURRENCY.CURRENCY_CZK"
          },
          {
            "value": "DJF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_DJF"
          },
          {
            "value": "DKK",
            "label": "ACCOUNT.CURRENCY.CURRENCY_DKK"
          },
          {
            "value": "DOP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_DOP"
          },
          {
            "value": "DZD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_DZD"
          },
          {
            "value": "ECS",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ECS"
          },
          {
            "value": "EGP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_EGP"
          },
          {
            "value": "ERN",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ERN"
          },
          {
            "value": "ETB",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ETB"
          },
          {
            "value": "EUR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_EUR"
          },
          {
            "value": "FJD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_FJD"
          },
          {
            "value": "FKP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_FKP"
          },
          {
            "value": "GBP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_GBP"
          },
          {
            "value": "GEL",
            "label": "ACCOUNT.CURRENCY.CURRENCY_GEL"
          },
          {
            "value": "GGP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_GGP"
          },
          {
            "value": "GHS",
            "label": "ACCOUNT.CURRENCY.CURRENCY_GHS"
          },
          {
            "value": "GIP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_GIP"
          },
          {
            "value": "GMD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_GMD"
          },
          {
            "value": "GNF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_GNF"
          },
          {
            "value": "GWP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_GWP"
          },
          {
            "value": "GYD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_GYD"
          },
          {
            "value": "HKD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_HKD"
          },
          {
            "value": "HNL",
            "label": "ACCOUNT.CURRENCY.CURRENCY_HNL"
          },
          {
            "value": "HRK",
            "label": "ACCOUNT.CURRENCY.CURRENCY_HRK"
          },
          {
            "value": "HTG",
            "label": "ACCOUNT.CURRENCY.CURRENCY_HTG"
          },
          {
            "value": "HUF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_HUF"
          },
          {
            "value": "ILS",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ILS"
          },
          {
            "value": "INR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_INR"
          },
          {
            "value": "IQD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_IQD"
          },
          {
            "value": "IRR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_IRR"
          },
          {
            "value": "ISK",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ISK"
          },
          {
            "value": "Itd",
            "label": "ACCOUNT.CURRENCY.CURRENCY_Itd"
          },
          {
            "value": "JMD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_JMD"
          },
          {
            "value": "JOD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_JOD"
          },
          {
            "value": "JPY",
            "label": "ACCOUNT.CURRENCY.CURRENCY_JPY"
          },
          {
            "value": "KES",
            "label": "ACCOUNT.CURRENCY.CURRENCY_KES"
          },
          {
            "value": "KGS",
            "label": "ACCOUNT.CURRENCY.CURRENCY_KGS"
          },
          {
            "value": "KHR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_KHR"
          },
          {
            "value": "KMF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_KMF"
          },
          {
            "value": "KPW",
            "label": "ACCOUNT.CURRENCY.CURRENCY_KPW"
          },
          {
            "value": "KRW",
            "label": "ACCOUNT.CURRENCY.CURRENCY_KRW"
          },
          {
            "value": "KWD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_KWD"
          },
          {
            "value": "KYD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_KYD"
          },
          {
            "value": "KZT",
            "label": "ACCOUNT.CURRENCY.CURRENCY_KZT"
          },
          {
            "value": "LAK",
            "label": "ACCOUNT.CURRENCY.CURRENCY_LAK"
          },
          {
            "value": "LBP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_LBP"
          },
          {
            "value": "LKR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_LKR"
          },
          {
            "value": "LRD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_LRD"
          },
          {
            "value": "LSL",
            "label": "ACCOUNT.CURRENCY.CURRENCY_LSL"
          },
          {
            "value": "LTL",
            "label": "ACCOUNT.CURRENCY.CURRENCY_LTL"
          },
          {
            "value": "LVL",
            "label": "ACCOUNT.CURRENCY.CURRENCY_LVL"
          },
          {
            "value": "LYD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_LYD"
          },
          {
            "value": "MAD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MAD"
          },
          {
            "value": "MDL",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MDL"
          },
          {
            "value": "MGF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MGF"
          },
          {
            "value": "MKD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MKD"
          },
          {
            "value": "MMK",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MMK"
          },
          {
            "value": "MNT",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MNT"
          },
          {
            "value": "MOP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MOP"
          },
          {
            "value": "MRO",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MRO"
          },
          {
            "value": "MUR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MUR"
          },
          {
            "value": "MVR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MVR"
          },
          {
            "value": "MWK",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MWK"
          },
          {
            "value": "MXN",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MXN"
          },
          {
            "value": "MYR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MYR"
          },
          {
            "value": "MZN",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MZN"
          },
          {
            "value": "NAD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_NAD"
          },
          {
            "value": "NGN",
            "label": "ACCOUNT.CURRENCY.CURRENCY_NGN"
          },
          {
            "value": "NIO",
            "label": "ACCOUNT.CURRENCY.CURRENCY_NIO"
          },
          {
            "value": "NOK",
            "label": "ACCOUNT.CURRENCY.CURRENCY_NOK"
          },
          {
            "value": "NPR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_NPR"
          },
          {
            "value": "NZD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_NZD"
          },
          {
            "value": "OMR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_OMR"
          },
          {
            "value": "PAB",
            "label": "ACCOUNT.CURRENCY.CURRENCY_PAB"
          },
          {
            "value": "PEN",
            "label": "ACCOUNT.CURRENCY.CURRENCY_PEN"
          },
          {
            "value": "PGK",
            "label": "ACCOUNT.CURRENCY.CURRENCY_PGK"
          },
          {
            "value": "PHP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_PHP"
          },
          {
            "value": "PKR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_PKR"
          },
          {
            "value": "PLN",
            "label": "ACCOUNT.CURRENCY.CURRENCY_PLN"
          },
          {
            "value": "PYG",
            "label": "ACCOUNT.CURRENCY.CURRENCY_PYG"
          },
          {
            "value": "QAR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_QAR"
          },
          {
            "value": "QTQ",
            "label": "ACCOUNT.CURRENCY.CURRENCY_QTQ"
          },
          {
            "value": "RON",
            "label": "ACCOUNT.CURRENCY.CURRENCY_RON"
          },
          {
            "value": "RSD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_RSD"
          },
          {
            "value": "RUB",
            "label": "ACCOUNT.CURRENCY.CURRENCY_RUB"
          },
          {
            "value": "RWF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_RWF"
          },
          {
            "value": "SAR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SAR"
          },
          {
            "value": "SBD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SBD"
          },
          {
            "value": "SCR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SCR"
          },
          {
            "value": "SDG",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SDG"
          },
          {
            "value": "SEK",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SEK"
          },
          {
            "value": "SGD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SGD"
          },
          {
            "value": "SHP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SHP"
          },
          {
            "value": "SLL",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SLL"
          },
          {
            "value": "SOS",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SOS"
          },
          {
            "value": "SRD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SRD"
          },
          {
            "value": "SSP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SSP"
          },
          {
            "value": "STD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_STD"
          },
          {
            "value": "SVC",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SVC"
          },
          {
            "value": "SYP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SYP"
          },
          {
            "value": "SZL",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SZL"
          },
          {
            "value": "THB",
            "label": "ACCOUNT.CURRENCY.CURRENCY_THB"
          },
          {
            "value": "TJS",
            "label": "ACCOUNT.CURRENCY.CURRENCY_TJS"
          },
          {
            "value": "TMT",
            "label": "ACCOUNT.CURRENCY.CURRENCY_TMT"
          },
          {
            "value": "TND",
            "label": "ACCOUNT.CURRENCY.CURRENCY_TND"
          },
          {
            "value": "TOP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_TOP"
          },
          {
            "value": "TRY",
            "label": "ACCOUNT.CURRENCY.CURRENCY_TRY"
          },
          {
            "value": "TTD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_TTD"
          },
          {
            "value": "TWD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_TWD"
          },
          {
            "value": "TZS",
            "label": "ACCOUNT.CURRENCY.CURRENCY_TZS"
          },
          {
            "value": "UAH",
            "label": "ACCOUNT.CURRENCY.CURRENCY_UAH"
          },
          {
            "value": "UGX",
            "label": "ACCOUNT.CURRENCY.CURRENCY_UGX"
          },
          {
            "value": "USD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_USD"
          },
          {
            "value": "UYU",
            "label": "ACCOUNT.CURRENCY.CURRENCY_UYU"
          },
          {
            "value": "UZS",
            "label": "ACCOUNT.CURRENCY.CURRENCY_UZS"
          },
          {
            "value": "VEF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_VEF"
          },
          {
            "value": "VND",
            "label": "ACCOUNT.CURRENCY.CURRENCY_VND"
          },
          {
            "value": "VUV",
            "label": "ACCOUNT.CURRENCY.CURRENCY_VUV"
          },
          {
            "value": "WST",
            "label": "ACCOUNT.CURRENCY.CURRENCY_WST"
          },
          {
            "value": "XAF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_XAF"
          },
          {
            "value": "XCD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_XCD"
          },
          {
            "value": "XOF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_XOF"
          },
          {
            "value": "XPF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_XPF"
          },
          {
            "value": "YER",
            "label": "ACCOUNT.CURRENCY.CURRENCY_YER"
          },
          {
            "value": "ZAR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ZAR"
          },
          {
            "value": "ZMW",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ZMW"
          },
          {
            "value": "ZWD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ZWD"
          }
        ],
        "validators": [
          "required"
        ]
      },
      "holderName": {
        "type": "text",
        "label": "ACCOUNT.CURRENCY.OWNER_NAME",
        "validators": [
          "required"
        ]
      },
      "bankName": {
        "type": "text",
        "label": "ACCOUNT.CURRENCY.BANK_NAME"
      },
      "bankId": {
        "type": "text",
        "label": "ACCOUNT.CURRENCY.BANK_ID"
      },
      "branchId": {
        "type": "text",
        "label": "ACCOUNT.CURRENCY.BRANCH_NO"
      },
      "accountNr": {
        "type": "text",
        "label": "ACCOUNT.CURRENCY.ACCOUNT_NO_IBAN"
      },
      "accountName": {
        "type": "text",
        "label": "ACCOUNT.CURRENCY.ACCOUNT_NAME",
        "validators": [
          "required"
        ]
      },
      "limitations": {
        "type": "footer",
        "label": "ACCOUNT.CURRENCY.LIMITATIONS",
        "text": "ACCOUNT.CURRENCY.LIMITATION_4_0625_0"
      }
    }
  },
  {
    "key": "OK_PAY",
    "label": "OKPay",
    "form": {
      "accountNr": {"type": "text", "label": "ACCOUNT.CURRENCY.WALLET_ID", "validators": ["required"]},
      "tradeCurrencies": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.SUPPORTED_CURRENCIES",
        "multiple": true,
        "value": ["EUR", "USD", "GBP", "CHF", "RUB", "PLN", "JPY", "CAD", "AUD", "CZK", "NOK", "SEK", "DKK", "HRK", "HUF", "NZD", "RON", "TRY", "ZAR", "HKD", "CNY"],
        "options": [{"value": "EUR", "label": "ACCOUNT.CURRENCY.CURRENCY_EUR"}, {
          "value": "USD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_USD"
        }, {"value": "GBP", "label": "ACCOUNT.CURRENCY.CURRENCY_GBP"}, {
          "value": "CHF",
          "label": "ACCOUNT.CURRENCY.CURRENCY_CHF"
        }, {"value": "RUB", "label": "ACCOUNT.CURRENCY.CURRENCY_RUB"}, {
          "value": "PLN",
          "label": "ACCOUNT.CURRENCY.CURRENCY_PLN"
        }, {"value": "JPY", "label": "ACCOUNT.CURRENCY.CURRENCY_JPY"}, {
          "value": "CAD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_CAD"
        }, {"value": "AUD", "label": "ACCOUNT.CURRENCY.CURRENCY_AUD"}, {
          "value": "CZK",
          "label": "ACCOUNT.CURRENCY.CURRENCY_CZK"
        }, {"value": "NOK", "label": "ACCOUNT.CURRENCY.CURRENCY_NOK"}, {
          "value": "SEK",
          "label": "ACCOUNT.CURRENCY.CURRENCY_SEK"
        }, {"value": "DKK", "label": "ACCOUNT.CURRENCY.CURRENCY_DKK"}, {
          "value": "HRK",
          "label": "ACCOUNT.CURRENCY.CURRENCY_HRK"
        }, {"value": "HUF", "label": "ACCOUNT.CURRENCY.CURRENCY_HUF"}, {
          "value": "NZD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_NZD"
        }, {"value": "RON", "label": "ACCOUNT.CURRENCY.CURRENCY_RON"}, {
          "value": "TRY",
          "label": "ACCOUNT.CURRENCY.CURRENCY_TRY"
        }, {"value": "ZAR", "label": "ACCOUNT.CURRENCY.CURRENCY_ZAR"}, {
          "value": "HKD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_HKD"
        }, {"value": "CNY", "label": "ACCOUNT.CURRENCY.CURRENCY_CNY"}],
        "validators": ["required"]
      },
      "accountName": {"type": "text", "label": "ACCOUNT.CURRENCY.ACCOUNT_NAME", "validators": ["required"]},
      "limitations": {
        "type": "footer",
        "label": "ACCOUNT.CURRENCY.LIMITATIONS",
        "text": "ACCOUNT.CURRENCY.LIMITATION_1_025_0"
      }
    }
  },
  {
    "key": "PERFECT_MONEY",
    "label": "Perfect Money",
    "form": {
      "accountNr": {"type": "text", "label": "ACCOUNT.CURRENCY.ACCOUNT_NO", "validators": ["required"]},
      "tradeCurrencies": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.CURRENCY",
        "options": [{"value": "USD", "label": "ACCOUNT.CURRENCY.CURRENCY_USD"}, {
          "value": "EUR",
          "label": "ACCOUNT.CURRENCY.CURRENCY_EUR"
        }],
        "validators": ["required"]
      },
      "accountName": {"type": "text", "label": "ACCOUNT.CURRENCY.ACCOUNT_NAME", "validators": ["required"]},
      "limitations": {
        "type": "footer",
        "label": "ACCOUNT.CURRENCY.LIMITATIONS",
        "text": "ACCOUNT.CURRENCY.LIMITATION_1_0125_0"
      }
    }
  },
  {
    "key": "POPMONEY",
    "label": "Popmoney",
    "form": {
      "holderName": {"type": "text", "label": "ACCOUNT.CURRENCY.OWNER_NAME", "validators": ["required"]},
      "accountId": {"type": "text", "label": "ACCOUNT.CURRENCY.EMAIL_OR_PHONE", "validators": ["required"]},
      "tradeCurrencies": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.CURRENCY",
        "value": "USD",
        "options": [{"value": "USD", "label": "ACCOUNT.CURRENCY.CURRENCY_USD"}],
        "disabled": true
      },
      "accountName": {"type": "text", "label": "ACCOUNT.CURRENCY.ACCOUNT_NAME", "validators": ["required"]},
      "limitations": {
        "type": "footer",
        "label": "ACCOUNT.CURRENCY.LIMITATIONS",
        "text": "ACCOUNT.CURRENCY.LIMITATION_1_04_0"
      }
    }
  },
  {
    "key": "REVOLUT",
    "label": "Revolut",
    "form": {
      "accountId": {"type": "text", "label": "ACCOUNT.CURRENCY.EMAIL_OR_PHONE", "validators": ["required"]},
      "tradeCurrencies": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.SUPPORTED_CURRENCIES",
        "multiple": true,
        "value": ["USD", "GBP", "EUR", "PLN", "CHF", "DKK", "NOK", "SEK", "RON", "SGD", "HKD", "AUD", "NZD", "TRY", "ILS", "AED", "CAD", "HUF", "INR", "JPY", "MAD", "QAR", "THB", "ZAR"],
        "options": [{"value": "USD", "label": "ACCOUNT.CURRENCY.CURRENCY_USD"}, {
          "value": "GBP",
          "label": "ACCOUNT.CURRENCY.CURRENCY_GBP"
        }, {"value": "EUR", "label": "ACCOUNT.CURRENCY.CURRENCY_EUR"}, {
          "value": "PLN",
          "label": "ACCOUNT.CURRENCY.CURRENCY_PLN"
        }, {"value": "CHF", "label": "ACCOUNT.CURRENCY.CURRENCY_CHF"}, {
          "value": "DKK",
          "label": "ACCOUNT.CURRENCY.CURRENCY_DKK"
        }, {"value": "NOK", "label": "ACCOUNT.CURRENCY.CURRENCY_NOK"}, {
          "value": "SEK",
          "label": "ACCOUNT.CURRENCY.CURRENCY_SEK"
        }, {"value": "RON", "label": "ACCOUNT.CURRENCY.CURRENCY_RON"}, {
          "value": "SGD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_SGD"
        }, {"value": "HKD", "label": "ACCOUNT.CURRENCY.CURRENCY_HKD"}, {
          "value": "AUD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_AUD"
        }, {"value": "NZD", "label": "ACCOUNT.CURRENCY.CURRENCY_NZD"}, {
          "value": "TRY",
          "label": "ACCOUNT.CURRENCY.CURRENCY_TRY"
        }, {"value": "ILS", "label": "ACCOUNT.CURRENCY.CURRENCY_ILS"}, {
          "value": "AED",
          "label": "ACCOUNT.CURRENCY.CURRENCY_AED"
        }, {"value": "CAD", "label": "ACCOUNT.CURRENCY.CURRENCY_CAD"}, {
          "value": "HUF",
          "label": "ACCOUNT.CURRENCY.CURRENCY_HUF"
        }, {"value": "INR", "label": "ACCOUNT.CURRENCY.CURRENCY_INR"}, {
          "value": "JPY",
          "label": "ACCOUNT.CURRENCY.CURRENCY_JPY"
        }, {"value": "MAD", "label": "ACCOUNT.CURRENCY.CURRENCY_MAD"}, {
          "value": "QAR",
          "label": "ACCOUNT.CURRENCY.CURRENCY_QAR"
        }, {"value": "THB", "label": "ACCOUNT.CURRENCY.CURRENCY_THB"}, {
          "value": "ZAR",
          "label": "ACCOUNT.CURRENCY.CURRENCY_ZAR"
        }],
        "validators": ["required"]
      },
      "accountName": {"type": "text", "label": "ACCOUNT.CURRENCY.ACCOUNT_NAME", "validators": ["required"]},
      "limitations": {
        "type": "footer",
        "label": "ACCOUNT.CURRENCY.LIMITATIONS",
        "text": "ACCOUNT.CURRENCY.LIMITATION_1_025_0"
      }
    }
  },
  {
    "key": "SAME_BANK",
    "label": "ACCOUNT.CURRENCY.SAME_BANK_TRANSFER",
    "form": {
      "countryCode": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.COUNTRY",
        "options": [
          {
            "value": "AD",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AD"
          },
          {
            "value": "AE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AE"
          },
          {
            "value": "AF",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AF"
          },
          {
            "value": "AG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AG"
          },
          {
            "value": "AI",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AI"
          },
          {
            "value": "AL",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AL"
          },
          {
            "value": "AM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AM"
          },
          {
            "value": "AO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AO"
          },
          {
            "value": "AQ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AQ"
          },
          {
            "value": "AR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AR"
          },
          {
            "value": "AS",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AS"
          },
          {
            "value": "AT",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AT"
          },
          {
            "value": "AU",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AU"
          },
          {
            "value": "AW",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AW"
          },
          {
            "value": "AX",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AX"
          },
          {
            "value": "AZ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_AZ"
          },
          {
            "value": "BA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BA"
          },
          {
            "value": "BB",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BB"
          },
          {
            "value": "BD",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BD"
          },
          {
            "value": "BE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BE"
          },
          {
            "value": "BF",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BF"
          },
          {
            "value": "BG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BG"
          },
          {
            "value": "BH",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BH"
          },
          {
            "value": "BI",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BI"
          },
          {
            "value": "BJ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BJ"
          },
          {
            "value": "BL",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BL"
          },
          {
            "value": "BM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BM"
          },
          {
            "value": "BN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BN"
          },
          {
            "value": "BO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BO"
          },
          {
            "value": "BQ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BQ"
          },
          {
            "value": "BR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BR"
          },
          {
            "value": "BS",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BS"
          },
          {
            "value": "BT",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BT"
          },
          {
            "value": "BV",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BV"
          },
          {
            "value": "BW",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BW"
          },
          {
            "value": "BY",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BY"
          },
          {
            "value": "BZ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_BZ"
          },
          {
            "value": "CA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CA"
          },
          {
            "value": "CC",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CC"
          },
          {
            "value": "CD",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CD"
          },
          {
            "value": "CF",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CF"
          },
          {
            "value": "CG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CG"
          },
          {
            "value": "CH",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CH"
          },
          {
            "value": "CI",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CI"
          },
          {
            "value": "CK",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CK"
          },
          {
            "value": "CL",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CL"
          },
          {
            "value": "CM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CM"
          },
          {
            "value": "CN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CN"
          },
          {
            "value": "CO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CO"
          },
          {
            "value": "CR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CR"
          },
          {
            "value": "CU",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CU"
          },
          {
            "value": "CV",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CV"
          },
          {
            "value": "CW",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CW"
          },
          {
            "value": "CX",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CX"
          },
          {
            "value": "CY",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CY"
          },
          {
            "value": "CZ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_CZ"
          },
          {
            "value": "DE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_DE"
          },
          {
            "value": "DJ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_DJ"
          },
          {
            "value": "DK",
            "label": "ACCOUNT.CURRENCY.COUNTRY_DK"
          },
          {
            "value": "DM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_DM"
          },
          {
            "value": "DO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_DO"
          },
          {
            "value": "DZ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_DZ"
          },
          {
            "value": "EC",
            "label": "ACCOUNT.CURRENCY.COUNTRY_EC"
          },
          {
            "value": "EE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_EE"
          },
          {
            "value": "EG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_EG"
          },
          {
            "value": "EH",
            "label": "ACCOUNT.CURRENCY.COUNTRY_EH"
          },
          {
            "value": "ER",
            "label": "ACCOUNT.CURRENCY.COUNTRY_ER"
          },
          {
            "value": "ES",
            "label": "ACCOUNT.CURRENCY.COUNTRY_ES"
          },
          {
            "value": "ET",
            "label": "ACCOUNT.CURRENCY.COUNTRY_ET"
          },
          {
            "value": "FI",
            "label": "ACCOUNT.CURRENCY.COUNTRY_FI"
          },
          {
            "value": "FJ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_FJ"
          },
          {
            "value": "FK",
            "label": "ACCOUNT.CURRENCY.COUNTRY_FK"
          },
          {
            "value": "FM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_FM"
          },
          {
            "value": "FO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_FO"
          },
          {
            "value": "FR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_FR"
          },
          {
            "value": "GA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GA"
          },
          {
            "value": "GB",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GB"
          },
          {
            "value": "GD",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GD"
          },
          {
            "value": "GE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GE"
          },
          {
            "value": "GF",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GF"
          },
          {
            "value": "GG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GG"
          },
          {
            "value": "GH",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GH"
          },
          {
            "value": "GI",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GI"
          },
          {
            "value": "GL",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GL"
          },
          {
            "value": "GM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GM"
          },
          {
            "value": "GN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GN"
          },
          {
            "value": "GP",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GP"
          },
          {
            "value": "GQ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GQ"
          },
          {
            "value": "GR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GR"
          },
          {
            "value": "GS",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GS"
          },
          {
            "value": "GT",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GT"
          },
          {
            "value": "GU",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GU"
          },
          {
            "value": "GW",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GW"
          },
          {
            "value": "GY",
            "label": "ACCOUNT.CURRENCY.COUNTRY_GY"
          },
          {
            "value": "HK",
            "label": "ACCOUNT.CURRENCY.COUNTRY_HK"
          },
          {
            "value": "HM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_HM"
          },
          {
            "value": "HN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_HN"
          },
          {
            "value": "HR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_HR"
          },
          {
            "value": "HT",
            "label": "ACCOUNT.CURRENCY.COUNTRY_HT"
          },
          {
            "value": "HU",
            "label": "ACCOUNT.CURRENCY.COUNTRY_HU"
          },
          {
            "value": "ID",
            "label": "ACCOUNT.CURRENCY.COUNTRY_ID"
          },
          {
            "value": "IE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_IE"
          },
          {
            "value": "IL",
            "label": "ACCOUNT.CURRENCY.COUNTRY_IL"
          },
          {
            "value": "IM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_IM"
          },
          {
            "value": "IN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_IN"
          },
          {
            "value": "IO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_IO"
          },
          {
            "value": "IQ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_IQ"
          },
          {
            "value": "IR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_IR"
          },
          {
            "value": "IS",
            "label": "ACCOUNT.CURRENCY.COUNTRY_IS"
          },
          {
            "value": "IT",
            "label": "ACCOUNT.CURRENCY.COUNTRY_IT"
          },
          {
            "value": "JE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_JE"
          },
          {
            "value": "JM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_JM"
          },
          {
            "value": "JO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_JO"
          },
          {
            "value": "JP",
            "label": "ACCOUNT.CURRENCY.COUNTRY_JP"
          },
          {
            "value": "KE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KE"
          },
          {
            "value": "KG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KG"
          },
          {
            "value": "KH",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KH"
          },
          {
            "value": "KI",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KI"
          },
          {
            "value": "KM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KM"
          },
          {
            "value": "KN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KN"
          },
          {
            "value": "KP",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KP"
          },
          {
            "value": "KR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KR"
          },
          {
            "value": "KW",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KW"
          },
          {
            "value": "KY",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KY"
          },
          {
            "value": "KZ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_KZ"
          },
          {
            "value": "LA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LA"
          },
          {
            "value": "LB",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LB"
          },
          {
            "value": "LC",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LC"
          },
          {
            "value": "LI",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LI"
          },
          {
            "value": "LK",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LK"
          },
          {
            "value": "LR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LR"
          },
          {
            "value": "LS",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LS"
          },
          {
            "value": "LT",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LT"
          },
          {
            "value": "LU",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LU"
          },
          {
            "value": "LV",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LV"
          },
          {
            "value": "LY",
            "label": "ACCOUNT.CURRENCY.COUNTRY_LY"
          },
          {
            "value": "MA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MA"
          },
          {
            "value": "MC",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MC"
          },
          {
            "value": "MD",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MD"
          },
          {
            "value": "ME",
            "label": "ACCOUNT.CURRENCY.COUNTRY_ME"
          },
          {
            "value": "MF",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MF"
          },
          {
            "value": "MG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MG"
          },
          {
            "value": "MH",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MH"
          },
          {
            "value": "MK",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MK"
          },
          {
            "value": "ML",
            "label": "ACCOUNT.CURRENCY.COUNTRY_ML"
          },
          {
            "value": "MM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MM"
          },
          {
            "value": "MN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MN"
          },
          {
            "value": "MO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MO"
          },
          {
            "value": "MP",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MP"
          },
          {
            "value": "MQ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MQ"
          },
          {
            "value": "MR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MR"
          },
          {
            "value": "MS",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MS"
          },
          {
            "value": "MT",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MT"
          },
          {
            "value": "MU",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MU"
          },
          {
            "value": "MV",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MV"
          },
          {
            "value": "MW",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MW"
          },
          {
            "value": "MX",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MX"
          },
          {
            "value": "MY",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MY"
          },
          {
            "value": "MZ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_MZ"
          },
          {
            "value": "NA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NA"
          },
          {
            "value": "NC",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NC"
          },
          {
            "value": "NE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NE"
          },
          {
            "value": "NF",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NF"
          },
          {
            "value": "NG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NG"
          },
          {
            "value": "NI",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NI"
          },
          {
            "value": "NL",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NL"
          },
          {
            "value": "NO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NO"
          },
          {
            "value": "NP",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NP"
          },
          {
            "value": "NR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NR"
          },
          {
            "value": "NU",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NU"
          },
          {
            "value": "NZ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_NZ"
          },
          {
            "value": "OM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_OM"
          },
          {
            "value": "PA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PA"
          },
          {
            "value": "PE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PE"
          },
          {
            "value": "PF",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PF"
          },
          {
            "value": "PG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PG"
          },
          {
            "value": "PH",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PH"
          },
          {
            "value": "PK",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PK"
          },
          {
            "value": "PL",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PL"
          },
          {
            "value": "PM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PM"
          },
          {
            "value": "PN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PN"
          },
          {
            "value": "PR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PR"
          },
          {
            "value": "PS",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PS"
          },
          {
            "value": "PT",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PT"
          },
          {
            "value": "PW",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PW"
          },
          {
            "value": "PY",
            "label": "ACCOUNT.CURRENCY.COUNTRY_PY"
          },
          {
            "value": "QA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_QA"
          },
          {
            "value": "RE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_RE"
          },
          {
            "value": "RO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_RO"
          },
          {
            "value": "RS",
            "label": "ACCOUNT.CURRENCY.COUNTRY_RS"
          },
          {
            "value": "RU",
            "label": "ACCOUNT.CURRENCY.COUNTRY_RU"
          },
          {
            "value": "RW",
            "label": "ACCOUNT.CURRENCY.COUNTRY_RW"
          },
          {
            "value": "SA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SA"
          },
          {
            "value": "SB",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SB"
          },
          {
            "value": "SC",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SC"
          },
          {
            "value": "SD",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SD"
          },
          {
            "value": "SE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SE"
          },
          {
            "value": "SG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SG"
          },
          {
            "value": "SH",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SH"
          },
          {
            "value": "SI",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SI"
          },
          {
            "value": "SJ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SJ"
          },
          {
            "value": "SK",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SK"
          },
          {
            "value": "SL",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SL"
          },
          {
            "value": "SM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SM"
          },
          {
            "value": "SN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SN"
          },
          {
            "value": "SO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SO"
          },
          {
            "value": "SR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SR"
          },
          {
            "value": "SS",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SS"
          },
          {
            "value": "ST",
            "label": "ACCOUNT.CURRENCY.COUNTRY_ST"
          },
          {
            "value": "SV",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SV"
          },
          {
            "value": "SX",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SX"
          },
          {
            "value": "SY",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SY"
          },
          {
            "value": "SZ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_SZ"
          },
          {
            "value": "TC",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TC"
          },
          {
            "value": "TD",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TD"
          },
          {
            "value": "TF",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TF"
          },
          {
            "value": "TG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TG"
          },
          {
            "value": "TH",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TH"
          },
          {
            "value": "TJ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TJ"
          },
          {
            "value": "TK",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TK"
          },
          {
            "value": "TL",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TL"
          },
          {
            "value": "TM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TM"
          },
          {
            "value": "TN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TN"
          },
          {
            "value": "TO",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TO"
          },
          {
            "value": "TR",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TR"
          },
          {
            "value": "TT",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TT"
          },
          {
            "value": "TV",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TV"
          },
          {
            "value": "TW",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TW"
          },
          {
            "value": "TZ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_TZ"
          },
          {
            "value": "UA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_UA"
          },
          {
            "value": "UG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_UG"
          },
          {
            "value": "UM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_UM"
          },
          {
            "value": "US",
            "label": "ACCOUNT.CURRENCY.COUNTRY_US"
          },
          {
            "value": "UY",
            "label": "ACCOUNT.CURRENCY.COUNTRY_UY"
          },
          {
            "value": "UZ",
            "label": "ACCOUNT.CURRENCY.COUNTRY_UZ"
          },
          {
            "value": "VA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_VA"
          },
          {
            "value": "VC",
            "label": "ACCOUNT.CURRENCY.COUNTRY_VC"
          },
          {
            "value": "VE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_VE"
          },
          {
            "value": "VG",
            "label": "ACCOUNT.CURRENCY.COUNTRY_VG"
          },
          {
            "value": "VI",
            "label": "ACCOUNT.CURRENCY.COUNTRY_VI"
          },
          {
            "value": "VN",
            "label": "ACCOUNT.CURRENCY.COUNTRY_VN"
          },
          {
            "value": "VU",
            "label": "ACCOUNT.CURRENCY.COUNTRY_VU"
          },
          {
            "value": "WF",
            "label": "ACCOUNT.CURRENCY.COUNTRY_WF"
          },
          {
            "value": "WS",
            "label": "ACCOUNT.CURRENCY.COUNTRY_WS"
          },
          {
            "value": "XK",
            "label": "ACCOUNT.CURRENCY.COUNTRY_XK"
          },
          {
            "value": "YE",
            "label": "ACCOUNT.CURRENCY.COUNTRY_YE"
          },
          {
            "value": "YT",
            "label": "ACCOUNT.CURRENCY.COUNTRY_YT"
          },
          {
            "value": "ZA",
            "label": "ACCOUNT.CURRENCY.COUNTRY_ZA"
          },
          {
            "value": "ZM",
            "label": "ACCOUNT.CURRENCY.COUNTRY_ZM"
          },
          {
            "value": "ZW",
            "label": "ACCOUNT.CURRENCY.COUNTRY_ZW"
          }
        ],
        "validators": [
          "required"
        ]
      },
      "tradeCurrencies": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.CURRENCY",
        "options": [
          {
            "value": "AED",
            "label": "ACCOUNT.CURRENCY.CURRENCY_AED"
          },
          {
            "value": "AFN",
            "label": "ACCOUNT.CURRENCY.CURRENCY_AFN"
          },
          {
            "value": "ALL",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ALL"
          },
          {
            "value": "AMD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_AMD"
          },
          {
            "value": "ANG",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ANG"
          },
          {
            "value": "AOA",
            "label": "ACCOUNT.CURRENCY.CURRENCY_AOA"
          },
          {
            "value": "ARS",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ARS"
          },
          {
            "value": "AUD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_AUD"
          },
          {
            "value": "AWG",
            "label": "ACCOUNT.CURRENCY.CURRENCY_AWG"
          },
          {
            "value": "AZN",
            "label": "ACCOUNT.CURRENCY.CURRENCY_AZN"
          },
          {
            "value": "BAM",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BAM"
          },
          {
            "value": "BBD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BBD"
          },
          {
            "value": "BDT",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BDT"
          },
          {
            "value": "BGN",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BGN"
          },
          {
            "value": "BHD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BHD"
          },
          {
            "value": "BIF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BIF"
          },
          {
            "value": "BMD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BMD"
          },
          {
            "value": "BND",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BND"
          },
          {
            "value": "BOB",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BOB"
          },
          {
            "value": "BRL",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BRL"
          },
          {
            "value": "BSD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BSD"
          },
          {
            "value": "BTN",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BTN"
          },
          {
            "value": "BWP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BWP"
          },
          {
            "value": "BYR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BYR"
          },
          {
            "value": "BZD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_BZD"
          },
          {
            "value": "CAD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_CAD"
          },
          {
            "value": "CDF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_CDF"
          },
          {
            "value": "CHF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_CHF"
          },
          {
            "value": "CLP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_CLP"
          },
          {
            "value": "CNY",
            "label": "ACCOUNT.CURRENCY.CURRENCY_CNY"
          },
          {
            "value": "COP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_COP"
          },
          {
            "value": "CRC",
            "label": "ACCOUNT.CURRENCY.CURRENCY_CRC"
          },
          {
            "value": "CUP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_CUP"
          },
          {
            "value": "CVE",
            "label": "ACCOUNT.CURRENCY.CURRENCY_CVE"
          },
          {
            "value": "CZK",
            "label": "ACCOUNT.CURRENCY.CURRENCY_CZK"
          },
          {
            "value": "DJF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_DJF"
          },
          {
            "value": "DKK",
            "label": "ACCOUNT.CURRENCY.CURRENCY_DKK"
          },
          {
            "value": "DOP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_DOP"
          },
          {
            "value": "DZD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_DZD"
          },
          {
            "value": "ECS",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ECS"
          },
          {
            "value": "EGP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_EGP"
          },
          {
            "value": "ERN",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ERN"
          },
          {
            "value": "ETB",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ETB"
          },
          {
            "value": "EUR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_EUR"
          },
          {
            "value": "FJD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_FJD"
          },
          {
            "value": "FKP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_FKP"
          },
          {
            "value": "GBP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_GBP"
          },
          {
            "value": "GEL",
            "label": "ACCOUNT.CURRENCY.CURRENCY_GEL"
          },
          {
            "value": "GGP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_GGP"
          },
          {
            "value": "GHS",
            "label": "ACCOUNT.CURRENCY.CURRENCY_GHS"
          },
          {
            "value": "GIP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_GIP"
          },
          {
            "value": "GMD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_GMD"
          },
          {
            "value": "GNF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_GNF"
          },
          {
            "value": "GWP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_GWP"
          },
          {
            "value": "GYD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_GYD"
          },
          {
            "value": "HKD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_HKD"
          },
          {
            "value": "HNL",
            "label": "ACCOUNT.CURRENCY.CURRENCY_HNL"
          },
          {
            "value": "HRK",
            "label": "ACCOUNT.CURRENCY.CURRENCY_HRK"
          },
          {
            "value": "HTG",
            "label": "ACCOUNT.CURRENCY.CURRENCY_HTG"
          },
          {
            "value": "HUF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_HUF"
          },
          {
            "value": "ILS",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ILS"
          },
          {
            "value": "INR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_INR"
          },
          {
            "value": "IQD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_IQD"
          },
          {
            "value": "IRR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_IRR"
          },
          {
            "value": "ISK",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ISK"
          },
          {
            "value": "Itd",
            "label": "ACCOUNT.CURRENCY.CURRENCY_Itd"
          },
          {
            "value": "JMD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_JMD"
          },
          {
            "value": "JOD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_JOD"
          },
          {
            "value": "JPY",
            "label": "ACCOUNT.CURRENCY.CURRENCY_JPY"
          },
          {
            "value": "KES",
            "label": "ACCOUNT.CURRENCY.CURRENCY_KES"
          },
          {
            "value": "KGS",
            "label": "ACCOUNT.CURRENCY.CURRENCY_KGS"
          },
          {
            "value": "KHR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_KHR"
          },
          {
            "value": "KMF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_KMF"
          },
          {
            "value": "KPW",
            "label": "ACCOUNT.CURRENCY.CURRENCY_KPW"
          },
          {
            "value": "KRW",
            "label": "ACCOUNT.CURRENCY.CURRENCY_KRW"
          },
          {
            "value": "KWD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_KWD"
          },
          {
            "value": "KYD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_KYD"
          },
          {
            "value": "KZT",
            "label": "ACCOUNT.CURRENCY.CURRENCY_KZT"
          },
          {
            "value": "LAK",
            "label": "ACCOUNT.CURRENCY.CURRENCY_LAK"
          },
          {
            "value": "LBP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_LBP"
          },
          {
            "value": "LKR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_LKR"
          },
          {
            "value": "LRD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_LRD"
          },
          {
            "value": "LSL",
            "label": "ACCOUNT.CURRENCY.CURRENCY_LSL"
          },
          {
            "value": "LTL",
            "label": "ACCOUNT.CURRENCY.CURRENCY_LTL"
          },
          {
            "value": "LVL",
            "label": "ACCOUNT.CURRENCY.CURRENCY_LVL"
          },
          {
            "value": "LYD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_LYD"
          },
          {
            "value": "MAD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MAD"
          },
          {
            "value": "MDL",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MDL"
          },
          {
            "value": "MGF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MGF"
          },
          {
            "value": "MKD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MKD"
          },
          {
            "value": "MMK",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MMK"
          },
          {
            "value": "MNT",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MNT"
          },
          {
            "value": "MOP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MOP"
          },
          {
            "value": "MRO",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MRO"
          },
          {
            "value": "MUR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MUR"
          },
          {
            "value": "MVR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MVR"
          },
          {
            "value": "MWK",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MWK"
          },
          {
            "value": "MXN",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MXN"
          },
          {
            "value": "MYR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MYR"
          },
          {
            "value": "MZN",
            "label": "ACCOUNT.CURRENCY.CURRENCY_MZN"
          },
          {
            "value": "NAD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_NAD"
          },
          {
            "value": "NGN",
            "label": "ACCOUNT.CURRENCY.CURRENCY_NGN"
          },
          {
            "value": "NIO",
            "label": "ACCOUNT.CURRENCY.CURRENCY_NIO"
          },
          {
            "value": "NOK",
            "label": "ACCOUNT.CURRENCY.CURRENCY_NOK"
          },
          {
            "value": "NPR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_NPR"
          },
          {
            "value": "NZD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_NZD"
          },
          {
            "value": "OMR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_OMR"
          },
          {
            "value": "PAB",
            "label": "ACCOUNT.CURRENCY.CURRENCY_PAB"
          },
          {
            "value": "PEN",
            "label": "ACCOUNT.CURRENCY.CURRENCY_PEN"
          },
          {
            "value": "PGK",
            "label": "ACCOUNT.CURRENCY.CURRENCY_PGK"
          },
          {
            "value": "PHP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_PHP"
          },
          {
            "value": "PKR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_PKR"
          },
          {
            "value": "PLN",
            "label": "ACCOUNT.CURRENCY.CURRENCY_PLN"
          },
          {
            "value": "PYG",
            "label": "ACCOUNT.CURRENCY.CURRENCY_PYG"
          },
          {
            "value": "QAR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_QAR"
          },
          {
            "value": "QTQ",
            "label": "ACCOUNT.CURRENCY.CURRENCY_QTQ"
          },
          {
            "value": "RON",
            "label": "ACCOUNT.CURRENCY.CURRENCY_RON"
          },
          {
            "value": "RSD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_RSD"
          },
          {
            "value": "RUB",
            "label": "ACCOUNT.CURRENCY.CURRENCY_RUB"
          },
          {
            "value": "RWF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_RWF"
          },
          {
            "value": "SAR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SAR"
          },
          {
            "value": "SBD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SBD"
          },
          {
            "value": "SCR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SCR"
          },
          {
            "value": "SDG",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SDG"
          },
          {
            "value": "SEK",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SEK"
          },
          {
            "value": "SGD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SGD"
          },
          {
            "value": "SHP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SHP"
          },
          {
            "value": "SLL",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SLL"
          },
          {
            "value": "SOS",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SOS"
          },
          {
            "value": "SRD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SRD"
          },
          {
            "value": "SSP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SSP"
          },
          {
            "value": "STD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_STD"
          },
          {
            "value": "SVC",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SVC"
          },
          {
            "value": "SYP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SYP"
          },
          {
            "value": "SZL",
            "label": "ACCOUNT.CURRENCY.CURRENCY_SZL"
          },
          {
            "value": "THB",
            "label": "ACCOUNT.CURRENCY.CURRENCY_THB"
          },
          {
            "value": "TJS",
            "label": "ACCOUNT.CURRENCY.CURRENCY_TJS"
          },
          {
            "value": "TMT",
            "label": "ACCOUNT.CURRENCY.CURRENCY_TMT"
          },
          {
            "value": "TND",
            "label": "ACCOUNT.CURRENCY.CURRENCY_TND"
          },
          {
            "value": "TOP",
            "label": "ACCOUNT.CURRENCY.CURRENCY_TOP"
          },
          {
            "value": "TRY",
            "label": "ACCOUNT.CURRENCY.CURRENCY_TRY"
          },
          {
            "value": "TTD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_TTD"
          },
          {
            "value": "TWD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_TWD"
          },
          {
            "value": "TZS",
            "label": "ACCOUNT.CURRENCY.CURRENCY_TZS"
          },
          {
            "value": "UAH",
            "label": "ACCOUNT.CURRENCY.CURRENCY_UAH"
          },
          {
            "value": "UGX",
            "label": "ACCOUNT.CURRENCY.CURRENCY_UGX"
          },
          {
            "value": "USD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_USD"
          },
          {
            "value": "UYU",
            "label": "ACCOUNT.CURRENCY.CURRENCY_UYU"
          },
          {
            "value": "UZS",
            "label": "ACCOUNT.CURRENCY.CURRENCY_UZS"
          },
          {
            "value": "VEF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_VEF"
          },
          {
            "value": "VND",
            "label": "ACCOUNT.CURRENCY.CURRENCY_VND"
          },
          {
            "value": "VUV",
            "label": "ACCOUNT.CURRENCY.CURRENCY_VUV"
          },
          {
            "value": "WST",
            "label": "ACCOUNT.CURRENCY.CURRENCY_WST"
          },
          {
            "value": "XAF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_XAF"
          },
          {
            "value": "XCD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_XCD"
          },
          {
            "value": "XOF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_XOF"
          },
          {
            "value": "XPF",
            "label": "ACCOUNT.CURRENCY.CURRENCY_XPF"
          },
          {
            "value": "YER",
            "label": "ACCOUNT.CURRENCY.CURRENCY_YER"
          },
          {
            "value": "ZAR",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ZAR"
          },
          {
            "value": "ZMW",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ZMW"
          },
          {
            "value": "ZWD",
            "label": "ACCOUNT.CURRENCY.CURRENCY_ZWD"
          }
        ],
        "validators": [
          "required"
        ]
      },
      "holderName": {
        "type": "text",
        "label": "ACCOUNT.CURRENCY.OWNER_NAME",
        "validators": [
          "required"
        ]
      },
      "bankName": {
        "type": "text",
        "label": "ACCOUNT.CURRENCY.BANK_NAME"
      },
      "bankId": {
        "type": "text",
        "label": "ACCOUNT.CURRENCY.BANK_ID"
      },
      "branchId": {
        "type": "text",
        "label": "ACCOUNT.CURRENCY.BRANCH_NO"
      },
      "accountNr": {
        "type": "text",
        "label": "ACCOUNT.CURRENCY.ACCOUNT_NO_IBAN"
      },
      "accountName": {
        "type": "text",
        "label": "ACCOUNT.CURRENCY.ACCOUNT_NAME",
        "validators": [
          "required"
        ]
      },
      "limitations": {
        "type": "footer",
        "label": "ACCOUNT.CURRENCY.LIMITATIONS",
        "text": "ACCOUNT.CURRENCY.LIMITATION_2_0625_0"
      }
    }
  },
  {
    "key": "SEPA",
    "label": "SEPA",
    "form": {
      "holderName": {"type": "text", "label": "ACCOUNT.CURRENCY.OWNER_NAME", "validators": ["required"]},
      "iban": {"type": "text", "label": "IBAN", "validators": ["required", "iban"]},
      "bic": {"type": "text", "label": "BIC", "validators": ["required", "bic"]},
      "countryCode": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.BANK_COUNTRY",
        "options": [{"value": "AT", "label": "ACCOUNT.CURRENCY.COUNTRY_AT"}, {
          "value": "BE",
          "label": "ACCOUNT.CURRENCY.COUNTRY_BE"
        }, {"value": "CY", "label": "ACCOUNT.CURRENCY.COUNTRY_CY"}, {
          "value": "EE",
          "label": "ACCOUNT.CURRENCY.COUNTRY_EE"
        }, {"value": "FI", "label": "ACCOUNT.CURRENCY.COUNTRY_FI"}, {
          "value": "FR",
          "label": "ACCOUNT.CURRENCY.COUNTRY_FR"
        }, {"value": "GR", "label": "ACCOUNT.CURRENCY.COUNTRY_GR"}, {
          "value": "ES",
          "label": "ACCOUNT.CURRENCY.COUNTRY_ES"
        }, {"value": "NL", "label": "ACCOUNT.CURRENCY.COUNTRY_NL"}, {
          "value": "IE",
          "label": "ACCOUNT.CURRENCY.COUNTRY_IE"
        }, {"value": "LT", "label": "ACCOUNT.CURRENCY.COUNTRY_LT"}, {
          "value": "LU",
          "label": "ACCOUNT.CURRENCY.COUNTRY_LU"
        }, {"value": "MT", "label": "ACCOUNT.CURRENCY.COUNTRY_MT"}, {
          "value": "MC",
          "label": "ACCOUNT.CURRENCY.COUNTRY_MC"
        }, {"value": "DE", "label": "ACCOUNT.CURRENCY.COUNTRY_DE"}, {
          "value": "PT",
          "label": "ACCOUNT.CURRENCY.COUNTRY_PT"
        }, {"value": "SK", "label": "ACCOUNT.CURRENCY.COUNTRY_SK"}, {
          "value": "SI",
          "label": "ACCOUNT.CURRENCY.COUNTRY_SI"
        }, {"value": "IT", "label": "ACCOUNT.CURRENCY.COUNTRY_IT"}, {
          "value": "LV",
          "label": "ACCOUNT.CURRENCY.COUNTRY_LV"
        }, {"value": "BG", "label": "ACCOUNT.CURRENCY.COUNTRY_BG"}, {
          "value": "HR",
          "label": "ACCOUNT.CURRENCY.COUNTRY_HR"
        }, {"value": "DK", "label": "ACCOUNT.CURRENCY.COUNTRY_DK"}, {
          "value": "IS",
          "label": "ACCOUNT.CURRENCY.COUNTRY_IS"
        }, {"value": "LI", "label": "ACCOUNT.CURRENCY.COUNTRY_LI"}, {
          "value": "NO",
          "label": "ACCOUNT.CURRENCY.COUNTRY_NO"
        }, {"value": "PL", "label": "ACCOUNT.CURRENCY.COUNTRY_PL"}, {
          "value": "CZ",
          "label": "ACCOUNT.CURRENCY.COUNTRY_CZ"
        }, {"value": "RO", "label": "ACCOUNT.CURRENCY.COUNTRY_RO"}, {
          "value": "CH",
          "label": "ACCOUNT.CURRENCY.COUNTRY_CH"
        }, {"value": "SE", "label": "ACCOUNT.CURRENCY.COUNTRY_SE"}, {
          "value": "GB",
          "label": "ACCOUNT.CURRENCY.COUNTRY_GB"
        }, {"value": "HU", "label": "ACCOUNT.CURRENCY.COUNTRY_HU"}],
        "validators": ["required"]
      },
      "tradeCurrencies": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.CURRENCY",
        "options": [{"value": "EUR", "label": "ACCOUNT.CURRENCY.CURRENCY_EUR"}, {
          "value": "BGN",
          "label": "ACCOUNT.CURRENCY.CURRENCY_BGN"
        }, {"value": "DKK", "label": "ACCOUNT.CURRENCY.CURRENCY_DKK"}, {
          "value": "ISK",
          "label": "ACCOUNT.CURRENCY.CURRENCY_ISK"
        }, {"value": "CHF", "label": "ACCOUNT.CURRENCY.CURRENCY_CHF"}, {
          "value": "NOK",
          "label": "ACCOUNT.CURRENCY.CURRENCY_NOK"
        }, {"value": "PLN", "label": "ACCOUNT.CURRENCY.CURRENCY_PLN"}, {
          "value": "CZK",
          "label": "ACCOUNT.CURRENCY.CURRENCY_CZK"
        }, {"value": "RON", "label": "ACCOUNT.CURRENCY.CURRENCY_RON"}, {
          "value": "SEK",
          "label": "ACCOUNT.CURRENCY.CURRENCY_SEK"
        }, {"value": "HUF", "label": "ACCOUNT.CURRENCY.CURRENCY_HUF"}],
        "validators": ["required"]
      },
      "acceptedCountriesEuro": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.ACCEPTED_TRADES_EURO",
        "multiple": true,
        "value": ["AT", "BE", "CY", "EE", "FI", "FR", "GR", "ES", "NL", "IE", "LT", "LU", "MT", "MC", "DE", "PT", "SK", "SI", "IT", "LV"],
        "options": [{"value": "AT", "label": "AT"}, {"value": "BE", "label": "BE"}, {
          "value": "CY",
          "label": "CY"
        }, {"value": "EE", "label": "EE"}, {"value": "FI", "label": "FI"}, {
          "value": "FR",
          "label": "FR"
        }, {"value": "GR", "label": "GR"}, {"value": "ES", "label": "ES"}, {
          "value": "NL",
          "label": "NL"
        }, {"value": "IE", "label": "IE"}, {"value": "LT", "label": "LT"}, {
          "value": "LU",
          "label": "LU"
        }, {"value": "MT", "label": "MT"}, {"value": "MC", "label": "MC"}, {
          "value": "DE",
          "label": "DE"
        }, {"value": "PT", "label": "PT"}, {"value": "SK", "label": "SK"}, {
          "value": "SI",
          "label": "SI"
        }, {"value": "IT", "label": "IT"}, {"value": "LV", "label": "LV"}]
      },
      "acceptedCountriesNonEuro": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.ACCEPTED_TRADES_NON_EURO",
        "multiple": true,
        "value": ["BG", "HR", "DK", "IS", "LI", "NO", "PL", "CZ", "RO", "CH", "SE", "GB", "HU"],
        "options": [{"value": "BG", "label": "BG"}, {"value": "HR", "label": "HR"}, {
          "value": "DK",
          "label": "DK"
        }, {"value": "IS", "label": "IS"}, {"value": "LI", "label": "LI"}, {
          "value": "NO",
          "label": "NO"
        }, {"value": "PL", "label": "PL"}, {"value": "CZ", "label": "CZ"}, {
          "value": "RO",
          "label": "RO"
        }, {"value": "CH", "label": "CH"}, {"value": "SE", "label": "SE"}, {
          "value": "GB",
          "label": "GB"
        }, {"value": "HU", "label": "HU"}]
      },
      "accountName": {"type": "text", "label": "ACCOUNT.CURRENCY.ACCOUNT_NAME", "validators": ["required"]},
      "limitations": {
        "type": "footer",
        "label": "ACCOUNT.CURRENCY.LIMITATIONS",
        "text": "ACCOUNT.CURRENCY.LIMITATION_6_0625_0"
      }
    }
  },
  {
    "key": "SEPA_INSTANT",
    "label": "SEPA Instant Payments",
    "form": {
      "holderName": {"type": "text", "label": "ACCOUNT.CURRENCY.OWNER_NAME", "validators": ["required"]},
      "iban": {"type": "text", "label": "IBAN", "validators": ["required", "iban"]},
      "bic": {"type": "text", "label": "BIC", "validators": ["required", "bic"]},
      "countryCode": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.BANK_COUNTRY",
        "options": [{"value": "AT", "label": "ACCOUNT.CURRENCY.COUNTRY_AT"}, {
          "value": "BE",
          "label": "ACCOUNT.CURRENCY.COUNTRY_BE"
        }, {"value": "CY", "label": "ACCOUNT.CURRENCY.COUNTRY_CY"}, {
          "value": "EE",
          "label": "ACCOUNT.CURRENCY.COUNTRY_EE"
        }, {"value": "FI", "label": "ACCOUNT.CURRENCY.COUNTRY_FI"}, {
          "value": "FR",
          "label": "ACCOUNT.CURRENCY.COUNTRY_FR"
        }, {"value": "GR", "label": "ACCOUNT.CURRENCY.COUNTRY_GR"}, {
          "value": "ES",
          "label": "ACCOUNT.CURRENCY.COUNTRY_ES"
        }, {"value": "NL", "label": "ACCOUNT.CURRENCY.COUNTRY_NL"}, {
          "value": "IE",
          "label": "ACCOUNT.CURRENCY.COUNTRY_IE"
        }, {"value": "LT", "label": "ACCOUNT.CURRENCY.COUNTRY_LT"}, {
          "value": "LU",
          "label": "ACCOUNT.CURRENCY.COUNTRY_LU"
        }, {"value": "MT", "label": "ACCOUNT.CURRENCY.COUNTRY_MT"}, {
          "value": "MC",
          "label": "ACCOUNT.CURRENCY.COUNTRY_MC"
        }, {"value": "DE", "label": "ACCOUNT.CURRENCY.COUNTRY_DE"}, {
          "value": "PT",
          "label": "ACCOUNT.CURRENCY.COUNTRY_PT"
        }, {"value": "SK", "label": "ACCOUNT.CURRENCY.COUNTRY_SK"}, {
          "value": "SI",
          "label": "ACCOUNT.CURRENCY.COUNTRY_SI"
        }, {"value": "IT", "label": "ACCOUNT.CURRENCY.COUNTRY_IT"}, {
          "value": "LV",
          "label": "ACCOUNT.CURRENCY.COUNTRY_LV"
        }, {"value": "BG", "label": "ACCOUNT.CURRENCY.COUNTRY_BG"}, {
          "value": "HR",
          "label": "ACCOUNT.CURRENCY.COUNTRY_HR"
        }, {"value": "DK", "label": "ACCOUNT.CURRENCY.COUNTRY_DK"}, {
          "value": "IS",
          "label": "ACCOUNT.CURRENCY.COUNTRY_IS"
        }, {"value": "LI", "label": "ACCOUNT.CURRENCY.COUNTRY_LI"}, {
          "value": "NO",
          "label": "ACCOUNT.CURRENCY.COUNTRY_NO"
        }, {"value": "PL", "label": "ACCOUNT.CURRENCY.COUNTRY_PL"}, {
          "value": "CZ",
          "label": "ACCOUNT.CURRENCY.COUNTRY_CZ"
        }, {"value": "RO", "label": "ACCOUNT.CURRENCY.COUNTRY_RO"}, {
          "value": "CH",
          "label": "ACCOUNT.CURRENCY.COUNTRY_CH"
        }, {"value": "SE", "label": "ACCOUNT.CURRENCY.COUNTRY_SE"}, {
          "value": "GB",
          "label": "ACCOUNT.CURRENCY.COUNTRY_GB"
        }, {"value": "HU", "label": "ACCOUNT.CURRENCY.COUNTRY_HU"}],
        "validators": ["required"]
      },
      "tradeCurrencies": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.CURRENCY",
        "options": [{"value": "EUR", "label": "ACCOUNT.CURRENCY.CURRENCY_EUR"}, {
          "value": "BGN",
          "label": "ACCOUNT.CURRENCY.CURRENCY_BGN"
        }, {"value": "DKK", "label": "ACCOUNT.CURRENCY.CURRENCY_DKK"}, {
          "value": "ISK",
          "label": "ACCOUNT.CURRENCY.CURRENCY_ISK"
        }, {"value": "CHF", "label": "ACCOUNT.CURRENCY.CURRENCY_CHF"}, {
          "value": "NOK",
          "label": "ACCOUNT.CURRENCY.CURRENCY_NOK"
        }, {"value": "PLN", "label": "ACCOUNT.CURRENCY.CURRENCY_PLN"}, {
          "value": "CZK",
          "label": "ACCOUNT.CURRENCY.CURRENCY_CZK"
        }, {"value": "RON", "label": "ACCOUNT.CURRENCY.CURRENCY_RON"}, {
          "value": "SEK",
          "label": "ACCOUNT.CURRENCY.CURRENCY_SEK"
        }, {"value": "HUF", "label": "ACCOUNT.CURRENCY.CURRENCY_HUF"}],
        "validators": ["required"]
      },
      "acceptedCountriesEuro": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.ACCEPTED_TRADES_EURO",
        "multiple": true,
        "value": ["AT", "BE", "CY", "EE", "FI", "FR", "GR", "ES", "NL", "IE", "LT", "LU", "MT", "MC", "DE", "PT", "SK", "SI", "IT", "LV"],
        "options": [{"value": "AT", "label": "AT"}, {"value": "BE", "label": "BE"}, {
          "value": "CY",
          "label": "CY"
        }, {"value": "EE", "label": "EE"}, {"value": "FI", "label": "FI"}, {
          "value": "FR",
          "label": "FR"
        }, {"value": "GR", "label": "GR"}, {"value": "ES", "label": "ES"}, {
          "value": "NL",
          "label": "NL"
        }, {"value": "IE", "label": "IE"}, {"value": "LT", "label": "LT"}, {
          "value": "LU",
          "label": "LU"
        }, {"value": "MT", "label": "MT"}, {"value": "MC", "label": "MC"}, {
          "value": "DE",
          "label": "DE"
        }, {"value": "PT", "label": "PT"}, {"value": "SK", "label": "SK"}, {
          "value": "SI",
          "label": "SI"
        }, {"value": "IT", "label": "IT"}, {"value": "LV", "label": "LV"}]
      },
      "acceptedCountriesNonEuro": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.ACCEPTED_TRADES_NON_EURO",
        "multiple": true,
        "value": ["BG", "HR", "DK", "IS", "LI", "NO", "PL", "CZ", "RO", "CH", "SE", "GB", "HU"],
        "options": [{"value": "BG", "label": "BG"}, {"value": "HR", "label": "HR"}, {
          "value": "DK",
          "label": "DK"
        }, {"value": "IS", "label": "IS"}, {"value": "LI", "label": "LI"}, {
          "value": "NO",
          "label": "NO"
        }, {"value": "PL", "label": "PL"}, {"value": "CZ", "label": "CZ"}, {
          "value": "RO",
          "label": "RO"
        }, {"value": "CH", "label": "CH"}, {"value": "SE", "label": "SE"}, {
          "value": "GB",
          "label": "GB"
        }, {"value": "HU", "label": "HU"}]
      },
      "accountName": {"type": "text", "label": "ACCOUNT.CURRENCY.ACCOUNT_NAME", "validators": ["required"]},
      "limitations": {
        "type": "footer",
        "label": "ACCOUNT.CURRENCY.LIMITATIONS",
        "text": "ACCOUNT.CURRENCY.LIMITATION_1_0625_0"
      }
    }
  },
  {
    "key": "SPECIFIC_BANKS",
    "label": "ACCOUNT.CURRENCY.SPECIFIC_BANKS_TRANSFER",
    "form": {
      "countryCode": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.COUNTRY",
        "options": [{"value": "AD", "label": "ACCOUNT.CURRENCY.COUNTRY_AD"}, {
          "value": "AE",
          "label": "ACCOUNT.CURRENCY.COUNTRY_AE"
        }, {"value": "AF", "label": "ACCOUNT.CURRENCY.COUNTRY_AF"}, {
          "value": "AG",
          "label": "ACCOUNT.CURRENCY.COUNTRY_AG"
        }, {"value": "AI", "label": "ACCOUNT.CURRENCY.COUNTRY_AI"}, {
          "value": "AL",
          "label": "ACCOUNT.CURRENCY.COUNTRY_AL"
        }, {"value": "AM", "label": "ACCOUNT.CURRENCY.COUNTRY_AM"}, {
          "value": "AO",
          "label": "ACCOUNT.CURRENCY.COUNTRY_AO"
        }, {"value": "AQ", "label": "ACCOUNT.CURRENCY.COUNTRY_AQ"}, {
          "value": "AR",
          "label": "ACCOUNT.CURRENCY.COUNTRY_AR"
        }, {"value": "AS", "label": "ACCOUNT.CURRENCY.COUNTRY_AS"}, {
          "value": "AT",
          "label": "ACCOUNT.CURRENCY.COUNTRY_AT"
        }, {"value": "AU", "label": "ACCOUNT.CURRENCY.COUNTRY_AU"}, {
          "value": "AW",
          "label": "ACCOUNT.CURRENCY.COUNTRY_AW"
        }, {"value": "AX", "label": "ACCOUNT.CURRENCY.COUNTRY_AX"}, {
          "value": "AZ",
          "label": "ACCOUNT.CURRENCY.COUNTRY_AZ"
        }, {"value": "BA", "label": "ACCOUNT.CURRENCY.COUNTRY_BA"}, {
          "value": "BB",
          "label": "ACCOUNT.CURRENCY.COUNTRY_BB"
        }, {"value": "BD", "label": "ACCOUNT.CURRENCY.COUNTRY_BD"}, {
          "value": "BE",
          "label": "ACCOUNT.CURRENCY.COUNTRY_BE"
        }, {"value": "BF", "label": "ACCOUNT.CURRENCY.COUNTRY_BF"}, {
          "value": "BG",
          "label": "ACCOUNT.CURRENCY.COUNTRY_BG"
        }, {"value": "BH", "label": "ACCOUNT.CURRENCY.COUNTRY_BH"}, {
          "value": "BI",
          "label": "ACCOUNT.CURRENCY.COUNTRY_BI"
        }, {"value": "BJ", "label": "ACCOUNT.CURRENCY.COUNTRY_BJ"}, {
          "value": "BL",
          "label": "ACCOUNT.CURRENCY.COUNTRY_BL"
        }, {"value": "BM", "label": "ACCOUNT.CURRENCY.COUNTRY_BM"}, {
          "value": "BN",
          "label": "ACCOUNT.CURRENCY.COUNTRY_BN"
        }, {"value": "BO", "label": "ACCOUNT.CURRENCY.COUNTRY_BO"}, {
          "value": "BQ",
          "label": "ACCOUNT.CURRENCY.COUNTRY_BQ"
        }, {"value": "BR", "label": "ACCOUNT.CURRENCY.COUNTRY_BR"}, {
          "value": "BS",
          "label": "ACCOUNT.CURRENCY.COUNTRY_BS"
        }, {"value": "BT", "label": "ACCOUNT.CURRENCY.COUNTRY_BT"}, {
          "value": "BV",
          "label": "ACCOUNT.CURRENCY.COUNTRY_BV"
        }, {"value": "BW", "label": "ACCOUNT.CURRENCY.COUNTRY_BW"}, {
          "value": "BY",
          "label": "ACCOUNT.CURRENCY.COUNTRY_BY"
        }, {"value": "BZ", "label": "ACCOUNT.CURRENCY.COUNTRY_BZ"}, {
          "value": "CA",
          "label": "ACCOUNT.CURRENCY.COUNTRY_CA"
        }, {"value": "CC", "label": "ACCOUNT.CURRENCY.COUNTRY_CC"}, {
          "value": "CD",
          "label": "ACCOUNT.CURRENCY.COUNTRY_CD"
        }, {"value": "CF", "label": "ACCOUNT.CURRENCY.COUNTRY_CF"}, {
          "value": "CG",
          "label": "ACCOUNT.CURRENCY.COUNTRY_CG"
        }, {"value": "CH", "label": "ACCOUNT.CURRENCY.COUNTRY_CH"}, {
          "value": "CI",
          "label": "ACCOUNT.CURRENCY.COUNTRY_CI"
        }, {"value": "CK", "label": "ACCOUNT.CURRENCY.COUNTRY_CK"}, {
          "value": "CL",
          "label": "ACCOUNT.CURRENCY.COUNTRY_CL"
        }, {"value": "CM", "label": "ACCOUNT.CURRENCY.COUNTRY_CM"}, {
          "value": "CN",
          "label": "ACCOUNT.CURRENCY.COUNTRY_CN"
        }, {"value": "CO", "label": "ACCOUNT.CURRENCY.COUNTRY_CO"}, {
          "value": "CR",
          "label": "ACCOUNT.CURRENCY.COUNTRY_CR"
        }, {"value": "CU", "label": "ACCOUNT.CURRENCY.COUNTRY_CU"}, {
          "value": "CV",
          "label": "ACCOUNT.CURRENCY.COUNTRY_CV"
        }, {"value": "CW", "label": "ACCOUNT.CURRENCY.COUNTRY_CW"}, {
          "value": "CX",
          "label": "ACCOUNT.CURRENCY.COUNTRY_CX"
        }, {"value": "CY", "label": "ACCOUNT.CURRENCY.COUNTRY_CY"}, {
          "value": "CZ",
          "label": "ACCOUNT.CURRENCY.COUNTRY_CZ"
        }, {"value": "DE", "label": "ACCOUNT.CURRENCY.COUNTRY_DE"}, {
          "value": "DJ",
          "label": "ACCOUNT.CURRENCY.COUNTRY_DJ"
        }, {"value": "DK", "label": "ACCOUNT.CURRENCY.COUNTRY_DK"}, {
          "value": "DM",
          "label": "ACCOUNT.CURRENCY.COUNTRY_DM"
        }, {"value": "DO", "label": "ACCOUNT.CURRENCY.COUNTRY_DO"}, {
          "value": "DZ",
          "label": "ACCOUNT.CURRENCY.COUNTRY_DZ"
        }, {"value": "EC", "label": "ACCOUNT.CURRENCY.COUNTRY_EC"}, {
          "value": "EE",
          "label": "ACCOUNT.CURRENCY.COUNTRY_EE"
        }, {"value": "EG", "label": "ACCOUNT.CURRENCY.COUNTRY_EG"}, {
          "value": "EH",
          "label": "ACCOUNT.CURRENCY.COUNTRY_EH"
        }, {"value": "ER", "label": "ACCOUNT.CURRENCY.COUNTRY_ER"}, {
          "value": "ES",
          "label": "ACCOUNT.CURRENCY.COUNTRY_ES"
        }, {"value": "ET", "label": "ACCOUNT.CURRENCY.COUNTRY_ET"}, {
          "value": "FI",
          "label": "ACCOUNT.CURRENCY.COUNTRY_FI"
        }, {"value": "FJ", "label": "ACCOUNT.CURRENCY.COUNTRY_FJ"}, {
          "value": "FK",
          "label": "ACCOUNT.CURRENCY.COUNTRY_FK"
        }, {"value": "FM", "label": "ACCOUNT.CURRENCY.COUNTRY_FM"}, {
          "value": "FO",
          "label": "ACCOUNT.CURRENCY.COUNTRY_FO"
        }, {"value": "FR", "label": "ACCOUNT.CURRENCY.COUNTRY_FR"}, {
          "value": "GA",
          "label": "ACCOUNT.CURRENCY.COUNTRY_GA"
        }, {"value": "GB", "label": "ACCOUNT.CURRENCY.COUNTRY_GB"}, {
          "value": "GD",
          "label": "ACCOUNT.CURRENCY.COUNTRY_GD"
        }, {"value": "GE", "label": "ACCOUNT.CURRENCY.COUNTRY_GE"}, {
          "value": "GF",
          "label": "ACCOUNT.CURRENCY.COUNTRY_GF"
        }, {"value": "GG", "label": "ACCOUNT.CURRENCY.COUNTRY_GG"}, {
          "value": "GH",
          "label": "ACCOUNT.CURRENCY.COUNTRY_GH"
        }, {"value": "GI", "label": "ACCOUNT.CURRENCY.COUNTRY_GI"}, {
          "value": "GL",
          "label": "ACCOUNT.CURRENCY.COUNTRY_GL"
        }, {"value": "GM", "label": "ACCOUNT.CURRENCY.COUNTRY_GM"}, {
          "value": "GN",
          "label": "ACCOUNT.CURRENCY.COUNTRY_GN"
        }, {"value": "GP", "label": "ACCOUNT.CURRENCY.COUNTRY_GP"}, {
          "value": "GQ",
          "label": "ACCOUNT.CURRENCY.COUNTRY_GQ"
        }, {"value": "GR", "label": "ACCOUNT.CURRENCY.COUNTRY_GR"}, {
          "value": "GS",
          "label": "ACCOUNT.CURRENCY.COUNTRY_GS"
        }, {"value": "GT", "label": "ACCOUNT.CURRENCY.COUNTRY_GT"}, {
          "value": "GU",
          "label": "ACCOUNT.CURRENCY.COUNTRY_GU"
        }, {"value": "GW", "label": "ACCOUNT.CURRENCY.COUNTRY_GW"}, {
          "value": "GY",
          "label": "ACCOUNT.CURRENCY.COUNTRY_GY"
        }, {"value": "HK", "label": "ACCOUNT.CURRENCY.COUNTRY_HK"}, {
          "value": "HM",
          "label": "ACCOUNT.CURRENCY.COUNTRY_HM"
        }, {"value": "HN", "label": "ACCOUNT.CURRENCY.COUNTRY_HN"}, {
          "value": "HR",
          "label": "ACCOUNT.CURRENCY.COUNTRY_HR"
        }, {"value": "HT", "label": "ACCOUNT.CURRENCY.COUNTRY_HT"}, {
          "value": "HU",
          "label": "ACCOUNT.CURRENCY.COUNTRY_HU"
        }, {"value": "ID", "label": "ACCOUNT.CURRENCY.COUNTRY_ID"}, {
          "value": "IE",
          "label": "ACCOUNT.CURRENCY.COUNTRY_IE"
        }, {"value": "IL", "label": "ACCOUNT.CURRENCY.COUNTRY_IL"}, {
          "value": "IM",
          "label": "ACCOUNT.CURRENCY.COUNTRY_IM"
        }, {"value": "IN", "label": "ACCOUNT.CURRENCY.COUNTRY_IN"}, {
          "value": "IO",
          "label": "ACCOUNT.CURRENCY.COUNTRY_IO"
        }, {"value": "IQ", "label": "ACCOUNT.CURRENCY.COUNTRY_IQ"}, {
          "value": "IR",
          "label": "ACCOUNT.CURRENCY.COUNTRY_IR"
        }, {"value": "IS", "label": "ACCOUNT.CURRENCY.COUNTRY_IS"}, {
          "value": "IT",
          "label": "ACCOUNT.CURRENCY.COUNTRY_IT"
        }, {"value": "JE", "label": "ACCOUNT.CURRENCY.COUNTRY_JE"}, {
          "value": "JM",
          "label": "ACCOUNT.CURRENCY.COUNTRY_JM"
        }, {"value": "JO", "label": "ACCOUNT.CURRENCY.COUNTRY_JO"}, {
          "value": "JP",
          "label": "ACCOUNT.CURRENCY.COUNTRY_JP"
        }, {"value": "KE", "label": "ACCOUNT.CURRENCY.COUNTRY_KE"}, {
          "value": "KG",
          "label": "ACCOUNT.CURRENCY.COUNTRY_KG"
        }, {"value": "KH", "label": "ACCOUNT.CURRENCY.COUNTRY_KH"}, {
          "value": "KI",
          "label": "ACCOUNT.CURRENCY.COUNTRY_KI"
        }, {"value": "KM", "label": "ACCOUNT.CURRENCY.COUNTRY_KM"}, {
          "value": "KN",
          "label": "ACCOUNT.CURRENCY.COUNTRY_KN"
        }, {"value": "KP", "label": "ACCOUNT.CURRENCY.COUNTRY_KP"}, {
          "value": "KR",
          "label": "ACCOUNT.CURRENCY.COUNTRY_KR"
        }, {"value": "KW", "label": "ACCOUNT.CURRENCY.COUNTRY_KW"}, {
          "value": "KY",
          "label": "ACCOUNT.CURRENCY.COUNTRY_KY"
        }, {"value": "KZ", "label": "ACCOUNT.CURRENCY.COUNTRY_KZ"}, {
          "value": "LA",
          "label": "ACCOUNT.CURRENCY.COUNTRY_LA"
        }, {"value": "LB", "label": "ACCOUNT.CURRENCY.COUNTRY_LB"}, {
          "value": "LC",
          "label": "ACCOUNT.CURRENCY.COUNTRY_LC"
        }, {"value": "LI", "label": "ACCOUNT.CURRENCY.COUNTRY_LI"}, {
          "value": "LK",
          "label": "ACCOUNT.CURRENCY.COUNTRY_LK"
        }, {"value": "LR", "label": "ACCOUNT.CURRENCY.COUNTRY_LR"}, {
          "value": "LS",
          "label": "ACCOUNT.CURRENCY.COUNTRY_LS"
        }, {"value": "LT", "label": "ACCOUNT.CURRENCY.COUNTRY_LT"}, {
          "value": "LU",
          "label": "ACCOUNT.CURRENCY.COUNTRY_LU"
        }, {"value": "LV", "label": "ACCOUNT.CURRENCY.COUNTRY_LV"}, {
          "value": "LY",
          "label": "ACCOUNT.CURRENCY.COUNTRY_LY"
        }, {"value": "MA", "label": "ACCOUNT.CURRENCY.COUNTRY_MA"}, {
          "value": "MC",
          "label": "ACCOUNT.CURRENCY.COUNTRY_MC"
        }, {"value": "MD", "label": "ACCOUNT.CURRENCY.COUNTRY_MD"}, {
          "value": "ME",
          "label": "ACCOUNT.CURRENCY.COUNTRY_ME"
        }, {"value": "MF", "label": "ACCOUNT.CURRENCY.COUNTRY_MF"}, {
          "value": "MG",
          "label": "ACCOUNT.CURRENCY.COUNTRY_MG"
        }, {"value": "MH", "label": "ACCOUNT.CURRENCY.COUNTRY_MH"}, {
          "value": "MK",
          "label": "ACCOUNT.CURRENCY.COUNTRY_MK"
        }, {"value": "ML", "label": "ACCOUNT.CURRENCY.COUNTRY_ML"}, {
          "value": "MM",
          "label": "ACCOUNT.CURRENCY.COUNTRY_MM"
        }, {"value": "MN", "label": "ACCOUNT.CURRENCY.COUNTRY_MN"}, {
          "value": "MO",
          "label": "ACCOUNT.CURRENCY.COUNTRY_MO"
        }, {"value": "MP", "label": "ACCOUNT.CURRENCY.COUNTRY_MP"}, {
          "value": "MQ",
          "label": "ACCOUNT.CURRENCY.COUNTRY_MQ"
        }, {"value": "MR", "label": "ACCOUNT.CURRENCY.COUNTRY_MR"}, {
          "value": "MS",
          "label": "ACCOUNT.CURRENCY.COUNTRY_MS"
        }, {"value": "MT", "label": "ACCOUNT.CURRENCY.COUNTRY_MT"}, {
          "value": "MU",
          "label": "ACCOUNT.CURRENCY.COUNTRY_MU"
        }, {"value": "MV", "label": "ACCOUNT.CURRENCY.COUNTRY_MV"}, {
          "value": "MW",
          "label": "ACCOUNT.CURRENCY.COUNTRY_MW"
        }, {"value": "MX", "label": "ACCOUNT.CURRENCY.COUNTRY_MX"}, {
          "value": "MY",
          "label": "ACCOUNT.CURRENCY.COUNTRY_MY"
        }, {"value": "MZ", "label": "ACCOUNT.CURRENCY.COUNTRY_MZ"}, {
          "value": "NA",
          "label": "ACCOUNT.CURRENCY.COUNTRY_NA"
        }, {"value": "NC", "label": "ACCOUNT.CURRENCY.COUNTRY_NC"}, {
          "value": "NE",
          "label": "ACCOUNT.CURRENCY.COUNTRY_NE"
        }, {"value": "NF", "label": "ACCOUNT.CURRENCY.COUNTRY_NF"}, {
          "value": "NG",
          "label": "ACCOUNT.CURRENCY.COUNTRY_NG"
        }, {"value": "NI", "label": "ACCOUNT.CURRENCY.COUNTRY_NI"}, {
          "value": "NL",
          "label": "ACCOUNT.CURRENCY.COUNTRY_NL"
        }, {"value": "NO", "label": "ACCOUNT.CURRENCY.COUNTRY_NO"}, {
          "value": "NP",
          "label": "ACCOUNT.CURRENCY.COUNTRY_NP"
        }, {"value": "NR", "label": "ACCOUNT.CURRENCY.COUNTRY_NR"}, {
          "value": "NU",
          "label": "ACCOUNT.CURRENCY.COUNTRY_NU"
        }, {"value": "NZ", "label": "ACCOUNT.CURRENCY.COUNTRY_NZ"}, {
          "value": "OM",
          "label": "ACCOUNT.CURRENCY.COUNTRY_OM"
        }, {"value": "PA", "label": "ACCOUNT.CURRENCY.COUNTRY_PA"}, {
          "value": "PE",
          "label": "ACCOUNT.CURRENCY.COUNTRY_PE"
        }, {"value": "PF", "label": "ACCOUNT.CURRENCY.COUNTRY_PF"}, {
          "value": "PG",
          "label": "ACCOUNT.CURRENCY.COUNTRY_PG"
        }, {"value": "PH", "label": "ACCOUNT.CURRENCY.COUNTRY_PH"}, {
          "value": "PK",
          "label": "ACCOUNT.CURRENCY.COUNTRY_PK"
        }, {"value": "PL", "label": "ACCOUNT.CURRENCY.COUNTRY_PL"}, {
          "value": "PM",
          "label": "ACCOUNT.CURRENCY.COUNTRY_PM"
        }, {"value": "PN", "label": "ACCOUNT.CURRENCY.COUNTRY_PN"}, {
          "value": "PR",
          "label": "ACCOUNT.CURRENCY.COUNTRY_PR"
        }, {"value": "PS", "label": "ACCOUNT.CURRENCY.COUNTRY_PS"}, {
          "value": "PT",
          "label": "ACCOUNT.CURRENCY.COUNTRY_PT"
        }, {"value": "PW", "label": "ACCOUNT.CURRENCY.COUNTRY_PW"}, {
          "value": "PY",
          "label": "ACCOUNT.CURRENCY.COUNTRY_PY"
        }, {"value": "QA", "label": "ACCOUNT.CURRENCY.COUNTRY_QA"}, {
          "value": "RE",
          "label": "ACCOUNT.CURRENCY.COUNTRY_RE"
        }, {"value": "RO", "label": "ACCOUNT.CURRENCY.COUNTRY_RO"}, {
          "value": "RS",
          "label": "ACCOUNT.CURRENCY.COUNTRY_RS"
        }, {"value": "RU", "label": "ACCOUNT.CURRENCY.COUNTRY_RU"}, {
          "value": "RW",
          "label": "ACCOUNT.CURRENCY.COUNTRY_RW"
        }, {"value": "SA", "label": "ACCOUNT.CURRENCY.COUNTRY_SA"}, {
          "value": "SB",
          "label": "ACCOUNT.CURRENCY.COUNTRY_SB"
        }, {"value": "SC", "label": "ACCOUNT.CURRENCY.COUNTRY_SC"}, {
          "value": "SD",
          "label": "ACCOUNT.CURRENCY.COUNTRY_SD"
        }, {"value": "SE", "label": "ACCOUNT.CURRENCY.COUNTRY_SE"}, {
          "value": "SG",
          "label": "ACCOUNT.CURRENCY.COUNTRY_SG"
        }, {"value": "SH", "label": "ACCOUNT.CURRENCY.COUNTRY_SH"}, {
          "value": "SI",
          "label": "ACCOUNT.CURRENCY.COUNTRY_SI"
        }, {"value": "SJ", "label": "ACCOUNT.CURRENCY.COUNTRY_SJ"}, {
          "value": "SK",
          "label": "ACCOUNT.CURRENCY.COUNTRY_SK"
        }, {"value": "SL", "label": "ACCOUNT.CURRENCY.COUNTRY_SL"}, {
          "value": "SM",
          "label": "ACCOUNT.CURRENCY.COUNTRY_SM"
        }, {"value": "SN", "label": "ACCOUNT.CURRENCY.COUNTRY_SN"}, {
          "value": "SO",
          "label": "ACCOUNT.CURRENCY.COUNTRY_SO"
        }, {"value": "SR", "label": "ACCOUNT.CURRENCY.COUNTRY_SR"}, {
          "value": "SS",
          "label": "ACCOUNT.CURRENCY.COUNTRY_SS"
        }, {"value": "ST", "label": "ACCOUNT.CURRENCY.COUNTRY_ST"}, {
          "value": "SV",
          "label": "ACCOUNT.CURRENCY.COUNTRY_SV"
        }, {"value": "SX", "label": "ACCOUNT.CURRENCY.COUNTRY_SX"}, {
          "value": "SY",
          "label": "ACCOUNT.CURRENCY.COUNTRY_SY"
        }, {"value": "SZ", "label": "ACCOUNT.CURRENCY.COUNTRY_SZ"}, {
          "value": "TC",
          "label": "ACCOUNT.CURRENCY.COUNTRY_TC"
        }, {"value": "TD", "label": "ACCOUNT.CURRENCY.COUNTRY_TD"}, {
          "value": "TF",
          "label": "ACCOUNT.CURRENCY.COUNTRY_TF"
        }, {"value": "TG", "label": "ACCOUNT.CURRENCY.COUNTRY_TG"}, {
          "value": "TH",
          "label": "ACCOUNT.CURRENCY.COUNTRY_TH"
        }, {"value": "TJ", "label": "ACCOUNT.CURRENCY.COUNTRY_TJ"}, {
          "value": "TK",
          "label": "ACCOUNT.CURRENCY.COUNTRY_TK"
        }, {"value": "TL", "label": "ACCOUNT.CURRENCY.COUNTRY_TL"}, {
          "value": "TM",
          "label": "ACCOUNT.CURRENCY.COUNTRY_TM"
        }, {"value": "TN", "label": "ACCOUNT.CURRENCY.COUNTRY_TN"}, {
          "value": "TO",
          "label": "ACCOUNT.CURRENCY.COUNTRY_TO"
        }, {"value": "TR", "label": "ACCOUNT.CURRENCY.COUNTRY_TR"}, {
          "value": "TT",
          "label": "ACCOUNT.CURRENCY.COUNTRY_TT"
        }, {"value": "TV", "label": "ACCOUNT.CURRENCY.COUNTRY_TV"}, {
          "value": "TW",
          "label": "ACCOUNT.CURRENCY.COUNTRY_TW"
        }, {"value": "TZ", "label": "ACCOUNT.CURRENCY.COUNTRY_TZ"}, {
          "value": "UA",
          "label": "ACCOUNT.CURRENCY.COUNTRY_UA"
        }, {"value": "UG", "label": "ACCOUNT.CURRENCY.COUNTRY_UG"}, {
          "value": "UM",
          "label": "ACCOUNT.CURRENCY.COUNTRY_UM"
        }, {"value": "US", "label": "ACCOUNT.CURRENCY.COUNTRY_US"}, {
          "value": "UY",
          "label": "ACCOUNT.CURRENCY.COUNTRY_UY"
        }, {"value": "UZ", "label": "ACCOUNT.CURRENCY.COUNTRY_UZ"}, {
          "value": "VA",
          "label": "ACCOUNT.CURRENCY.COUNTRY_VA"
        }, {"value": "VC", "label": "ACCOUNT.CURRENCY.COUNTRY_VC"}, {
          "value": "VE",
          "label": "ACCOUNT.CURRENCY.COUNTRY_VE"
        }, {"value": "VG", "label": "ACCOUNT.CURRENCY.COUNTRY_VG"}, {
          "value": "VI",
          "label": "ACCOUNT.CURRENCY.COUNTRY_VI"
        }, {"value": "VN", "label": "ACCOUNT.CURRENCY.COUNTRY_VN"}, {
          "value": "VU",
          "label": "ACCOUNT.CURRENCY.COUNTRY_VU"
        }, {"value": "WF", "label": "ACCOUNT.CURRENCY.COUNTRY_WF"}, {
          "value": "WS",
          "label": "ACCOUNT.CURRENCY.COUNTRY_WS"
        }, {"value": "XK", "label": "ACCOUNT.CURRENCY.COUNTRY_XK"}, {
          "value": "YE",
          "label": "ACCOUNT.CURRENCY.COUNTRY_YE"
        }, {"value": "YT", "label": "ACCOUNT.CURRENCY.COUNTRY_YT"}, {
          "value": "ZA",
          "label": "ACCOUNT.CURRENCY.COUNTRY_ZA"
        }, {"value": "ZM", "label": "ACCOUNT.CURRENCY.COUNTRY_ZM"}, {
          "value": "ZW",
          "label": "ACCOUNT.CURRENCY.COUNTRY_ZW"
        }],
        "validators": ["required"]
      },
      "tradeCurrencies": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.CURRENCY",
        "options": [{"value": "AED", "label": "ACCOUNT.CURRENCY.CURRENCY_AED"}, {
          "value": "AFN",
          "label": "ACCOUNT.CURRENCY.CURRENCY_AFN"
        }, {"value": "ALL", "label": "ACCOUNT.CURRENCY.CURRENCY_ALL"}, {
          "value": "AMD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_AMD"
        }, {"value": "ANG", "label": "ACCOUNT.CURRENCY.CURRENCY_ANG"}, {
          "value": "AOA",
          "label": "ACCOUNT.CURRENCY.CURRENCY_AOA"
        }, {"value": "ARS", "label": "ACCOUNT.CURRENCY.CURRENCY_ARS"}, {
          "value": "AUD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_AUD"
        }, {"value": "AWG", "label": "ACCOUNT.CURRENCY.CURRENCY_AWG"}, {
          "value": "AZN",
          "label": "ACCOUNT.CURRENCY.CURRENCY_AZN"
        }, {"value": "BAM", "label": "ACCOUNT.CURRENCY.CURRENCY_BAM"}, {
          "value": "BBD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_BBD"
        }, {"value": "BDT", "label": "ACCOUNT.CURRENCY.CURRENCY_BDT"}, {
          "value": "BGN",
          "label": "ACCOUNT.CURRENCY.CURRENCY_BGN"
        }, {"value": "BHD", "label": "ACCOUNT.CURRENCY.CURRENCY_BHD"}, {
          "value": "BIF",
          "label": "ACCOUNT.CURRENCY.CURRENCY_BIF"
        }, {"value": "BMD", "label": "ACCOUNT.CURRENCY.CURRENCY_BMD"}, {
          "value": "BND",
          "label": "ACCOUNT.CURRENCY.CURRENCY_BND"
        }, {"value": "BOB", "label": "ACCOUNT.CURRENCY.CURRENCY_BOB"}, {
          "value": "BRL",
          "label": "ACCOUNT.CURRENCY.CURRENCY_BRL"
        }, {"value": "BSD", "label": "ACCOUNT.CURRENCY.CURRENCY_BSD"}, {
          "value": "BTN",
          "label": "ACCOUNT.CURRENCY.CURRENCY_BTN"
        }, {"value": "BWP", "label": "ACCOUNT.CURRENCY.CURRENCY_BWP"}, {
          "value": "BYR",
          "label": "ACCOUNT.CURRENCY.CURRENCY_BYR"
        }, {"value": "BZD", "label": "ACCOUNT.CURRENCY.CURRENCY_BZD"}, {
          "value": "CAD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_CAD"
        }, {"value": "CDF", "label": "ACCOUNT.CURRENCY.CURRENCY_CDF"}, {
          "value": "CHF",
          "label": "ACCOUNT.CURRENCY.CURRENCY_CHF"
        }, {"value": "CLP", "label": "ACCOUNT.CURRENCY.CURRENCY_CLP"}, {
          "value": "CNY",
          "label": "ACCOUNT.CURRENCY.CURRENCY_CNY"
        }, {"value": "COP", "label": "ACCOUNT.CURRENCY.CURRENCY_COP"}, {
          "value": "CRC",
          "label": "ACCOUNT.CURRENCY.CURRENCY_CRC"
        }, {"value": "CUP", "label": "ACCOUNT.CURRENCY.CURRENCY_CUP"}, {
          "value": "CVE",
          "label": "ACCOUNT.CURRENCY.CURRENCY_CVE"
        }, {"value": "CZK", "label": "ACCOUNT.CURRENCY.CURRENCY_CZK"}, {
          "value": "DJF",
          "label": "ACCOUNT.CURRENCY.CURRENCY_DJF"
        }, {"value": "DKK", "label": "ACCOUNT.CURRENCY.CURRENCY_DKK"}, {
          "value": "DOP",
          "label": "ACCOUNT.CURRENCY.CURRENCY_DOP"
        }, {"value": "DZD", "label": "ACCOUNT.CURRENCY.CURRENCY_DZD"}, {
          "value": "ECS",
          "label": "ACCOUNT.CURRENCY.CURRENCY_ECS"
        }, {"value": "EGP", "label": "ACCOUNT.CURRENCY.CURRENCY_EGP"}, {
          "value": "ERN",
          "label": "ACCOUNT.CURRENCY.CURRENCY_ERN"
        }, {"value": "ETB", "label": "ACCOUNT.CURRENCY.CURRENCY_ETB"}, {
          "value": "EUR",
          "label": "ACCOUNT.CURRENCY.CURRENCY_EUR"
        }, {"value": "FJD", "label": "ACCOUNT.CURRENCY.CURRENCY_FJD"}, {
          "value": "FKP",
          "label": "ACCOUNT.CURRENCY.CURRENCY_FKP"
        }, {"value": "GBP", "label": "ACCOUNT.CURRENCY.CURRENCY_GBP"}, {
          "value": "GEL",
          "label": "ACCOUNT.CURRENCY.CURRENCY_GEL"
        }, {"value": "GGP", "label": "ACCOUNT.CURRENCY.CURRENCY_GGP"}, {
          "value": "GHS",
          "label": "ACCOUNT.CURRENCY.CURRENCY_GHS"
        }, {"value": "GIP", "label": "ACCOUNT.CURRENCY.CURRENCY_GIP"}, {
          "value": "GMD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_GMD"
        }, {"value": "GNF", "label": "ACCOUNT.CURRENCY.CURRENCY_GNF"}, {
          "value": "GWP",
          "label": "ACCOUNT.CURRENCY.CURRENCY_GWP"
        }, {"value": "GYD", "label": "ACCOUNT.CURRENCY.CURRENCY_GYD"}, {
          "value": "HKD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_HKD"
        }, {"value": "HNL", "label": "ACCOUNT.CURRENCY.CURRENCY_HNL"}, {
          "value": "HRK",
          "label": "ACCOUNT.CURRENCY.CURRENCY_HRK"
        }, {"value": "HTG", "label": "ACCOUNT.CURRENCY.CURRENCY_HTG"}, {
          "value": "HUF",
          "label": "ACCOUNT.CURRENCY.CURRENCY_HUF"
        }, {"value": "ILS", "label": "ACCOUNT.CURRENCY.CURRENCY_ILS"}, {
          "value": "INR",
          "label": "ACCOUNT.CURRENCY.CURRENCY_INR"
        }, {"value": "IQD", "label": "ACCOUNT.CURRENCY.CURRENCY_IQD"}, {
          "value": "IRR",
          "label": "ACCOUNT.CURRENCY.CURRENCY_IRR"
        }, {"value": "ISK", "label": "ACCOUNT.CURRENCY.CURRENCY_ISK"}, {
          "value": "Itd",
          "label": "ACCOUNT.CURRENCY.CURRENCY_Itd"
        }, {"value": "JMD", "label": "ACCOUNT.CURRENCY.CURRENCY_JMD"}, {
          "value": "JOD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_JOD"
        }, {"value": "JPY", "label": "ACCOUNT.CURRENCY.CURRENCY_JPY"}, {
          "value": "KES",
          "label": "ACCOUNT.CURRENCY.CURRENCY_KES"
        }, {"value": "KGS", "label": "ACCOUNT.CURRENCY.CURRENCY_KGS"}, {
          "value": "KHR",
          "label": "ACCOUNT.CURRENCY.CURRENCY_KHR"
        }, {"value": "KMF", "label": "ACCOUNT.CURRENCY.CURRENCY_KMF"}, {
          "value": "KPW",
          "label": "ACCOUNT.CURRENCY.CURRENCY_KPW"
        }, {"value": "KRW", "label": "ACCOUNT.CURRENCY.CURRENCY_KRW"}, {
          "value": "KWD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_KWD"
        }, {"value": "KYD", "label": "ACCOUNT.CURRENCY.CURRENCY_KYD"}, {
          "value": "KZT",
          "label": "ACCOUNT.CURRENCY.CURRENCY_KZT"
        }, {"value": "LAK", "label": "ACCOUNT.CURRENCY.CURRENCY_LAK"}, {
          "value": "LBP",
          "label": "ACCOUNT.CURRENCY.CURRENCY_LBP"
        }, {"value": "LKR", "label": "ACCOUNT.CURRENCY.CURRENCY_LKR"}, {
          "value": "LRD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_LRD"
        }, {"value": "LSL", "label": "ACCOUNT.CURRENCY.CURRENCY_LSL"}, {
          "value": "LTL",
          "label": "ACCOUNT.CURRENCY.CURRENCY_LTL"
        }, {"value": "LVL", "label": "ACCOUNT.CURRENCY.CURRENCY_LVL"}, {
          "value": "LYD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_LYD"
        }, {"value": "MAD", "label": "ACCOUNT.CURRENCY.CURRENCY_MAD"}, {
          "value": "MDL",
          "label": "ACCOUNT.CURRENCY.CURRENCY_MDL"
        }, {"value": "MGF", "label": "ACCOUNT.CURRENCY.CURRENCY_MGF"}, {
          "value": "MKD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_MKD"
        }, {"value": "MMK", "label": "ACCOUNT.CURRENCY.CURRENCY_MMK"}, {
          "value": "MNT",
          "label": "ACCOUNT.CURRENCY.CURRENCY_MNT"
        }, {"value": "MOP", "label": "ACCOUNT.CURRENCY.CURRENCY_MOP"}, {
          "value": "MRO",
          "label": "ACCOUNT.CURRENCY.CURRENCY_MRO"
        }, {"value": "MUR", "label": "ACCOUNT.CURRENCY.CURRENCY_MUR"}, {
          "value": "MVR",
          "label": "ACCOUNT.CURRENCY.CURRENCY_MVR"
        }, {"value": "MWK", "label": "ACCOUNT.CURRENCY.CURRENCY_MWK"}, {
          "value": "MXN",
          "label": "ACCOUNT.CURRENCY.CURRENCY_MXN"
        }, {"value": "MYR", "label": "ACCOUNT.CURRENCY.CURRENCY_MYR"}, {
          "value": "MZN",
          "label": "ACCOUNT.CURRENCY.CURRENCY_MZN"
        }, {"value": "NAD", "label": "ACCOUNT.CURRENCY.CURRENCY_NAD"}, {
          "value": "NGN",
          "label": "ACCOUNT.CURRENCY.CURRENCY_NGN"
        }, {"value": "NIO", "label": "ACCOUNT.CURRENCY.CURRENCY_NIO"}, {
          "value": "NOK",
          "label": "ACCOUNT.CURRENCY.CURRENCY_NOK"
        }, {"value": "NPR", "label": "ACCOUNT.CURRENCY.CURRENCY_NPR"}, {
          "value": "NZD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_NZD"
        }, {"value": "OMR", "label": "ACCOUNT.CURRENCY.CURRENCY_OMR"}, {
          "value": "PAB",
          "label": "ACCOUNT.CURRENCY.CURRENCY_PAB"
        }, {"value": "PEN", "label": "ACCOUNT.CURRENCY.CURRENCY_PEN"}, {
          "value": "PGK",
          "label": "ACCOUNT.CURRENCY.CURRENCY_PGK"
        }, {"value": "PHP", "label": "ACCOUNT.CURRENCY.CURRENCY_PHP"}, {
          "value": "PKR",
          "label": "ACCOUNT.CURRENCY.CURRENCY_PKR"
        }, {"value": "PLN", "label": "ACCOUNT.CURRENCY.CURRENCY_PLN"}, {
          "value": "PYG",
          "label": "ACCOUNT.CURRENCY.CURRENCY_PYG"
        }, {"value": "QAR", "label": "ACCOUNT.CURRENCY.CURRENCY_QAR"}, {
          "value": "QTQ",
          "label": "ACCOUNT.CURRENCY.CURRENCY_QTQ"
        }, {"value": "RON", "label": "ACCOUNT.CURRENCY.CURRENCY_RON"}, {
          "value": "RSD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_RSD"
        }, {"value": "RUB", "label": "ACCOUNT.CURRENCY.CURRENCY_RUB"}, {
          "value": "RWF",
          "label": "ACCOUNT.CURRENCY.CURRENCY_RWF"
        }, {"value": "SAR", "label": "ACCOUNT.CURRENCY.CURRENCY_SAR"}, {
          "value": "SBD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_SBD"
        }, {"value": "SCR", "label": "ACCOUNT.CURRENCY.CURRENCY_SCR"}, {
          "value": "SDG",
          "label": "ACCOUNT.CURRENCY.CURRENCY_SDG"
        }, {"value": "SEK", "label": "ACCOUNT.CURRENCY.CURRENCY_SEK"}, {
          "value": "SGD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_SGD"
        }, {"value": "SHP", "label": "ACCOUNT.CURRENCY.CURRENCY_SHP"}, {
          "value": "SLL",
          "label": "ACCOUNT.CURRENCY.CURRENCY_SLL"
        }, {"value": "SOS", "label": "ACCOUNT.CURRENCY.CURRENCY_SOS"}, {
          "value": "SRD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_SRD"
        }, {"value": "SSP", "label": "ACCOUNT.CURRENCY.CURRENCY_SSP"}, {
          "value": "STD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_STD"
        }, {"value": "SVC", "label": "ACCOUNT.CURRENCY.CURRENCY_SVC"}, {
          "value": "SYP",
          "label": "ACCOUNT.CURRENCY.CURRENCY_SYP"
        }, {"value": "SZL", "label": "ACCOUNT.CURRENCY.CURRENCY_SZL"}, {
          "value": "THB",
          "label": "ACCOUNT.CURRENCY.CURRENCY_THB"
        }, {"value": "TJS", "label": "ACCOUNT.CURRENCY.CURRENCY_TJS"}, {
          "value": "TMT",
          "label": "ACCOUNT.CURRENCY.CURRENCY_TMT"
        }, {"value": "TND", "label": "ACCOUNT.CURRENCY.CURRENCY_TND"}, {
          "value": "TOP",
          "label": "ACCOUNT.CURRENCY.CURRENCY_TOP"
        }, {"value": "TRY", "label": "ACCOUNT.CURRENCY.CURRENCY_TRY"}, {
          "value": "TTD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_TTD"
        }, {"value": "TWD", "label": "ACCOUNT.CURRENCY.CURRENCY_TWD"}, {
          "value": "TZS",
          "label": "ACCOUNT.CURRENCY.CURRENCY_TZS"
        }, {"value": "UAH", "label": "ACCOUNT.CURRENCY.CURRENCY_UAH"}, {
          "value": "UGX",
          "label": "ACCOUNT.CURRENCY.CURRENCY_UGX"
        }, {"value": "USD", "label": "ACCOUNT.CURRENCY.CURRENCY_USD"}, {
          "value": "UYU",
          "label": "ACCOUNT.CURRENCY.CURRENCY_UYU"
        }, {"value": "UZS", "label": "ACCOUNT.CURRENCY.CURRENCY_UZS"}, {
          "value": "VEF",
          "label": "ACCOUNT.CURRENCY.CURRENCY_VEF"
        }, {"value": "VND", "label": "ACCOUNT.CURRENCY.CURRENCY_VND"}, {
          "value": "VUV",
          "label": "ACCOUNT.CURRENCY.CURRENCY_VUV"
        }, {"value": "WST", "label": "ACCOUNT.CURRENCY.CURRENCY_WST"}, {
          "value": "XAF",
          "label": "ACCOUNT.CURRENCY.CURRENCY_XAF"
        }, {"value": "XCD", "label": "ACCOUNT.CURRENCY.CURRENCY_XCD"}, {
          "value": "XOF",
          "label": "ACCOUNT.CURRENCY.CURRENCY_XOF"
        }, {"value": "XPF", "label": "ACCOUNT.CURRENCY.CURRENCY_XPF"}, {
          "value": "YER",
          "label": "ACCOUNT.CURRENCY.CURRENCY_YER"
        }, {"value": "ZAR", "label": "ACCOUNT.CURRENCY.CURRENCY_ZAR"}, {
          "value": "ZMW",
          "label": "ACCOUNT.CURRENCY.CURRENCY_ZMW"
        }, {"value": "ZWD", "label": "ACCOUNT.CURRENCY.CURRENCY_ZWD"}],
        "validators": ["required"]
      },
      "acceptedBanks": {"type": "text", "label": "ACCOUNT.CURRENCY.ACCEPTED_BANKS_ID", "validators": ["required"]},
      "holderName": {"type": "text", "label": "ACCOUNT.CURRENCY.OWNER_NAME", "validators": ["required"]},
      "bankName": {"type": "text", "label": "ACCOUNT.CURRENCY.BANK_NAME", "validators": ["required"]},
      "bankId": {"type": "text", "label": "ACCOUNT.CURRENCY.BANK_ID", "validators": ["required"]},
      "branchId": {"type": "text", "label": "ACCOUNT.CURRENCY.BRANCH_NO", "validators": ["required"]},
      "accountNr": {"type": "text", "label": "ACCOUNT.CURRENCY.ACCOUNT_NO_IBAN", "validators": ["required"]},
      "accountName": {"type": "text", "label": "ACCOUNT.CURRENCY.ACCOUNT_NAME", "validators": ["required"]},
      "limitations": {
        "type": "footer",
        "label": "ACCOUNT.CURRENCY.LIMITATIONS",
        "text": "ACCOUNT.CURRENCY.LIMITATION_4_0625_0"
      }
    }
  },
  {
    "key": "SWISH",
    "label": "SWISH",
    "form": {
      "holderName": {"type": "text", "label": "ACCOUNT.CURRENCY.OWNER_NAME", "validators": ["required"]},
      "mobileNr": {"type": "number", "label": "ACCOUNT.CURRENCY.MOBILE_NO", "validators": ["required"]},
      "tradeCurrencies": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.CURRENCY",
        "value": "SEK",
        "options": [{"value": "SEK", "label": "ACCOUNT.CURRENCY.CURRENCY_SEK"}],
        "disabled": true
      },
      "accountName": {"type": "text", "label": "ACCOUNT.CURRENCY.ACCOUNT_NAME", "validators": ["required"]},
      "limitations": {
        "type": "footer",
        "label": "ACCOUNT.CURRENCY.LIMITATIONS",
        "text": "ACCOUNT.CURRENCY.LIMITATION_1_125_0"
      }
    }
  },
  {
    "key": "UPHOLD",
    "label": "Uphold",
    "form": {
      "accountId": {
        "type": "text",
        "label": "ACCOUNT.CURRENCY.USERNAME_OR_EMAIL_OR_PHONE",
        "validators": ["required"]
      },
      "tradeCurrencies": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.SUPPORTED_CURRENCIES",
        "multiple": true,
        "value": ["USD", "EUR", "GBP", "CNY", "JPY", "CHF", "INR", "MXN", "AUD", "CAD", "HKD", "NZD", "SGD", "KES", "ILS", "DKK", "NOK", "SEK", "PLN", "ARS", "BRL", "AED", "PHP"],
        "options": [{"value": "USD", "label": "ACCOUNT.CURRENCY.CURRENCY_USD"}, {
          "value": "EUR",
          "label": "ACCOUNT.CURRENCY.CURRENCY_EUR"
        }, {"value": "GBP", "label": "ACCOUNT.CURRENCY.CURRENCY_GBP"}, {
          "value": "CNY",
          "label": "ACCOUNT.CURRENCY.CURRENCY_CNY"
        }, {"value": "JPY", "label": "ACCOUNT.CURRENCY.CURRENCY_JPY"}, {
          "value": "CHF",
          "label": "ACCOUNT.CURRENCY.CURRENCY_CHF"
        }, {"value": "INR", "label": "ACCOUNT.CURRENCY.CURRENCY_INR"}, {
          "value": "MXN",
          "label": "ACCOUNT.CURRENCY.CURRENCY_MXN"
        }, {"value": "AUD", "label": "ACCOUNT.CURRENCY.CURRENCY_AUD"}, {
          "value": "CAD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_CAD"
        }, {"value": "HKD", "label": "ACCOUNT.CURRENCY.CURRENCY_HKD"}, {
          "value": "NZD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_NZD"
        }, {"value": "SGD", "label": "ACCOUNT.CURRENCY.CURRENCY_SGD"}, {
          "value": "KES",
          "label": "ACCOUNT.CURRENCY.CURRENCY_KES"
        }, {"value": "ILS", "label": "ACCOUNT.CURRENCY.CURRENCY_ILS"}, {
          "value": "DKK",
          "label": "ACCOUNT.CURRENCY.CURRENCY_DKK"
        }, {"value": "NOK", "label": "ACCOUNT.CURRENCY.CURRENCY_NOK"}, {
          "value": "SEK",
          "label": "ACCOUNT.CURRENCY.CURRENCY_SEK"
        }, {"value": "PLN", "label": "ACCOUNT.CURRENCY.CURRENCY_PLN"}, {
          "value": "ARS",
          "label": "ACCOUNT.CURRENCY.CURRENCY_ARS"
        }, {"value": "BRL", "label": "ACCOUNT.CURRENCY.CURRENCY_BRL"}, {
          "value": "AED",
          "label": "ACCOUNT.CURRENCY.CURRENCY_AED"
        }, {"value": "PHP", "label": "ACCOUNT.CURRENCY.CURRENCY_PHP"}]
      },
      "accountName": {"type": "text", "label": "ACCOUNT.CURRENCY.ACCOUNT_NAME", "validators": ["required"]},
      "limitations": {
        "type": "footer",
        "label": "ACCOUNT.CURRENCY.LIMITATIONS",
        "text": "ACCOUNT.CURRENCY.LIMITATION_1_125_0"
      }
    }
  },
  {
    "key": "US_POSTAL_MONEY_ORDER",
    "label": "ACCOUNT.CURRENCY.US_POSTAL_MONEY_ORDER",
    "form": {
      "holderName": {"type": "text", "label": "ACCOUNT.CURRENCY.OWNER_NAME", "validators": ["required"]},
      "postalAddress": {"type": "textarea", "label": "ACCOUNT.CURRENCY.POSTAL_ADDRESS", "validators": ["required"]},
      "tradeCurrencies": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.CURRENCY",
        "value": "USD",
        "options": [{"value": "USD", "label": "ACCOUNT.CURRENCY.CURRENCY_USD"}],
        "disabled": true
      },
      "accountName": {"type": "text", "label": "ACCOUNT.CURRENCY.ACCOUNT_NAME", "validators": ["required"]},
      "limitations": {
        "type": "footer",
        "label": "ACCOUNT.CURRENCY.LIMITATIONS",
        "text": "ACCOUNT.CURRENCY.LIMITATION_1_0625_0"
      }
    }
  },
  {
    "key": "VENMO",
    "label": "Venmo",
    "form": {
      "holderName": {"type": "text", "label": "ACCOUNT.CURRENCY.OWNER_NAME", "validators": ["required"]},
      "venmoUserName": {"type": "text", "label": "ACCOUNT.CURRENCY.VENMO_NAME", "validators": ["required"]},
      "tradeCurrencies": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.CURRENCY",
        "value": "USD",
        "options": [{"value": "USD", "label": "ACCOUNT.CURRENCY.CURRENCY_USD"}],
        "disabled": true
      },
      "accountName": {"type": "text", "label": "ACCOUNT.CURRENCY.ACCOUNT_NAME", "validators": ["required"]},
      "limitations": {
        "type": "footer",
        "label": "ACCOUNT.CURRENCY.LIMITATIONS",
        "text": "ACCOUNT.CURRENCY.LIMITATION_1_04_0"
      }
    }
  },
  {
    "key": "WESTERN_UNION",
    "label": "Western Union",
    "form": {
      "countryCode": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.COUNTRY",
        "options": [{"value": "AD", "label": "ACCOUNT.CURRENCY.COUNTRY_AD"}, {
          "value": "AE",
          "label": "ACCOUNT.CURRENCY.COUNTRY_AE"
        }, {"value": "AF", "label": "ACCOUNT.CURRENCY.COUNTRY_AF"}, {
          "value": "AG",
          "label": "ACCOUNT.CURRENCY.COUNTRY_AG"
        }, {"value": "AI", "label": "ACCOUNT.CURRENCY.COUNTRY_AI"}, {
          "value": "AL",
          "label": "ACCOUNT.CURRENCY.COUNTRY_AL"
        }, {"value": "AM", "label": "ACCOUNT.CURRENCY.COUNTRY_AM"}, {
          "value": "AO",
          "label": "ACCOUNT.CURRENCY.COUNTRY_AO"
        }, {"value": "AQ", "label": "ACCOUNT.CURRENCY.COUNTRY_AQ"}, {
          "value": "AR",
          "label": "ACCOUNT.CURRENCY.COUNTRY_AR"
        }, {"value": "AS", "label": "ACCOUNT.CURRENCY.COUNTRY_AS"}, {
          "value": "AT",
          "label": "ACCOUNT.CURRENCY.COUNTRY_AT"
        }, {"value": "AU", "label": "ACCOUNT.CURRENCY.COUNTRY_AU"}, {
          "value": "AW",
          "label": "ACCOUNT.CURRENCY.COUNTRY_AW"
        }, {"value": "AX", "label": "ACCOUNT.CURRENCY.COUNTRY_AX"}, {
          "value": "AZ",
          "label": "ACCOUNT.CURRENCY.COUNTRY_AZ"
        }, {"value": "BA", "label": "ACCOUNT.CURRENCY.COUNTRY_BA"}, {
          "value": "BB",
          "label": "ACCOUNT.CURRENCY.COUNTRY_BB"
        }, {"value": "BD", "label": "ACCOUNT.CURRENCY.COUNTRY_BD"}, {
          "value": "BE",
          "label": "ACCOUNT.CURRENCY.COUNTRY_BE"
        }, {"value": "BF", "label": "ACCOUNT.CURRENCY.COUNTRY_BF"}, {
          "value": "BG",
          "label": "ACCOUNT.CURRENCY.COUNTRY_BG"
        }, {"value": "BH", "label": "ACCOUNT.CURRENCY.COUNTRY_BH"}, {
          "value": "BI",
          "label": "ACCOUNT.CURRENCY.COUNTRY_BI"
        }, {"value": "BJ", "label": "ACCOUNT.CURRENCY.COUNTRY_BJ"}, {
          "value": "BL",
          "label": "ACCOUNT.CURRENCY.COUNTRY_BL"
        }, {"value": "BM", "label": "ACCOUNT.CURRENCY.COUNTRY_BM"}, {
          "value": "BN",
          "label": "ACCOUNT.CURRENCY.COUNTRY_BN"
        }, {"value": "BO", "label": "ACCOUNT.CURRENCY.COUNTRY_BO"}, {
          "value": "BQ",
          "label": "ACCOUNT.CURRENCY.COUNTRY_BQ"
        }, {"value": "BR", "label": "ACCOUNT.CURRENCY.COUNTRY_BR"}, {
          "value": "BS",
          "label": "ACCOUNT.CURRENCY.COUNTRY_BS"
        }, {"value": "BT", "label": "ACCOUNT.CURRENCY.COUNTRY_BT"}, {
          "value": "BV",
          "label": "ACCOUNT.CURRENCY.COUNTRY_BV"
        }, {"value": "BW", "label": "ACCOUNT.CURRENCY.COUNTRY_BW"}, {
          "value": "BY",
          "label": "ACCOUNT.CURRENCY.COUNTRY_BY"
        }, {"value": "BZ", "label": "ACCOUNT.CURRENCY.COUNTRY_BZ"}, {
          "value": "CA",
          "label": "ACCOUNT.CURRENCY.COUNTRY_CA"
        }, {"value": "CC", "label": "ACCOUNT.CURRENCY.COUNTRY_CC"}, {
          "value": "CD",
          "label": "ACCOUNT.CURRENCY.COUNTRY_CD"
        }, {"value": "CF", "label": "ACCOUNT.CURRENCY.COUNTRY_CF"}, {
          "value": "CG",
          "label": "ACCOUNT.CURRENCY.COUNTRY_CG"
        }, {"value": "CH", "label": "ACCOUNT.CURRENCY.COUNTRY_CH"}, {
          "value": "CI",
          "label": "ACCOUNT.CURRENCY.COUNTRY_CI"
        }, {"value": "CK", "label": "ACCOUNT.CURRENCY.COUNTRY_CK"}, {
          "value": "CL",
          "label": "ACCOUNT.CURRENCY.COUNTRY_CL"
        }, {"value": "CM", "label": "ACCOUNT.CURRENCY.COUNTRY_CM"}, {
          "value": "CN",
          "label": "ACCOUNT.CURRENCY.COUNTRY_CN"
        }, {"value": "CO", "label": "ACCOUNT.CURRENCY.COUNTRY_CO"}, {
          "value": "CR",
          "label": "ACCOUNT.CURRENCY.COUNTRY_CR"
        }, {"value": "CU", "label": "ACCOUNT.CURRENCY.COUNTRY_CU"}, {
          "value": "CV",
          "label": "ACCOUNT.CURRENCY.COUNTRY_CV"
        }, {"value": "CW", "label": "ACCOUNT.CURRENCY.COUNTRY_CW"}, {
          "value": "CX",
          "label": "ACCOUNT.CURRENCY.COUNTRY_CX"
        }, {"value": "CY", "label": "ACCOUNT.CURRENCY.COUNTRY_CY"}, {
          "value": "CZ",
          "label": "ACCOUNT.CURRENCY.COUNTRY_CZ"
        }, {"value": "DE", "label": "ACCOUNT.CURRENCY.COUNTRY_DE"}, {
          "value": "DJ",
          "label": "ACCOUNT.CURRENCY.COUNTRY_DJ"
        }, {"value": "DK", "label": "ACCOUNT.CURRENCY.COUNTRY_DK"}, {
          "value": "DM",
          "label": "ACCOUNT.CURRENCY.COUNTRY_DM"
        }, {"value": "DO", "label": "ACCOUNT.CURRENCY.COUNTRY_DO"}, {
          "value": "DZ",
          "label": "ACCOUNT.CURRENCY.COUNTRY_DZ"
        }, {"value": "EC", "label": "ACCOUNT.CURRENCY.COUNTRY_EC"}, {
          "value": "EE",
          "label": "ACCOUNT.CURRENCY.COUNTRY_EE"
        }, {"value": "EG", "label": "ACCOUNT.CURRENCY.COUNTRY_EG"}, {
          "value": "EH",
          "label": "ACCOUNT.CURRENCY.COUNTRY_EH"
        }, {"value": "ER", "label": "ACCOUNT.CURRENCY.COUNTRY_ER"}, {
          "value": "ES",
          "label": "ACCOUNT.CURRENCY.COUNTRY_ES"
        }, {"value": "ET", "label": "ACCOUNT.CURRENCY.COUNTRY_ET"}, {
          "value": "FI",
          "label": "ACCOUNT.CURRENCY.COUNTRY_FI"
        }, {"value": "FJ", "label": "ACCOUNT.CURRENCY.COUNTRY_FJ"}, {
          "value": "FK",
          "label": "ACCOUNT.CURRENCY.COUNTRY_FK"
        }, {"value": "FM", "label": "ACCOUNT.CURRENCY.COUNTRY_FM"}, {
          "value": "FO",
          "label": "ACCOUNT.CURRENCY.COUNTRY_FO"
        }, {"value": "FR", "label": "ACCOUNT.CURRENCY.COUNTRY_FR"}, {
          "value": "GA",
          "label": "ACCOUNT.CURRENCY.COUNTRY_GA"
        }, {"value": "GB", "label": "ACCOUNT.CURRENCY.COUNTRY_GB"}, {
          "value": "GD",
          "label": "ACCOUNT.CURRENCY.COUNTRY_GD"
        }, {"value": "GE", "label": "ACCOUNT.CURRENCY.COUNTRY_GE"}, {
          "value": "GF",
          "label": "ACCOUNT.CURRENCY.COUNTRY_GF"
        }, {"value": "GG", "label": "ACCOUNT.CURRENCY.COUNTRY_GG"}, {
          "value": "GH",
          "label": "ACCOUNT.CURRENCY.COUNTRY_GH"
        }, {"value": "GI", "label": "ACCOUNT.CURRENCY.COUNTRY_GI"}, {
          "value": "GL",
          "label": "ACCOUNT.CURRENCY.COUNTRY_GL"
        }, {"value": "GM", "label": "ACCOUNT.CURRENCY.COUNTRY_GM"}, {
          "value": "GN",
          "label": "ACCOUNT.CURRENCY.COUNTRY_GN"
        }, {"value": "GP", "label": "ACCOUNT.CURRENCY.COUNTRY_GP"}, {
          "value": "GQ",
          "label": "ACCOUNT.CURRENCY.COUNTRY_GQ"
        }, {"value": "GR", "label": "ACCOUNT.CURRENCY.COUNTRY_GR"}, {
          "value": "GS",
          "label": "ACCOUNT.CURRENCY.COUNTRY_GS"
        }, {"value": "GT", "label": "ACCOUNT.CURRENCY.COUNTRY_GT"}, {
          "value": "GU",
          "label": "ACCOUNT.CURRENCY.COUNTRY_GU"
        }, {"value": "GW", "label": "ACCOUNT.CURRENCY.COUNTRY_GW"}, {
          "value": "GY",
          "label": "ACCOUNT.CURRENCY.COUNTRY_GY"
        }, {"value": "HK", "label": "ACCOUNT.CURRENCY.COUNTRY_HK"}, {
          "value": "HM",
          "label": "ACCOUNT.CURRENCY.COUNTRY_HM"
        }, {"value": "HN", "label": "ACCOUNT.CURRENCY.COUNTRY_HN"}, {
          "value": "HR",
          "label": "ACCOUNT.CURRENCY.COUNTRY_HR"
        }, {"value": "HT", "label": "ACCOUNT.CURRENCY.COUNTRY_HT"}, {
          "value": "HU",
          "label": "ACCOUNT.CURRENCY.COUNTRY_HU"
        }, {"value": "ID", "label": "ACCOUNT.CURRENCY.COUNTRY_ID"}, {
          "value": "IE",
          "label": "ACCOUNT.CURRENCY.COUNTRY_IE"
        }, {"value": "IL", "label": "ACCOUNT.CURRENCY.COUNTRY_IL"}, {
          "value": "IM",
          "label": "ACCOUNT.CURRENCY.COUNTRY_IM"
        }, {"value": "IN", "label": "ACCOUNT.CURRENCY.COUNTRY_IN"}, {
          "value": "IO",
          "label": "ACCOUNT.CURRENCY.COUNTRY_IO"
        }, {"value": "IQ", "label": "ACCOUNT.CURRENCY.COUNTRY_IQ"}, {
          "value": "IR",
          "label": "ACCOUNT.CURRENCY.COUNTRY_IR"
        }, {"value": "IS", "label": "ACCOUNT.CURRENCY.COUNTRY_IS"}, {
          "value": "IT",
          "label": "ACCOUNT.CURRENCY.COUNTRY_IT"
        }, {"value": "JE", "label": "ACCOUNT.CURRENCY.COUNTRY_JE"}, {
          "value": "JM",
          "label": "ACCOUNT.CURRENCY.COUNTRY_JM"
        }, {"value": "JO", "label": "ACCOUNT.CURRENCY.COUNTRY_JO"}, {
          "value": "JP",
          "label": "ACCOUNT.CURRENCY.COUNTRY_JP"
        }, {"value": "KE", "label": "ACCOUNT.CURRENCY.COUNTRY_KE"}, {
          "value": "KG",
          "label": "ACCOUNT.CURRENCY.COUNTRY_KG"
        }, {"value": "KH", "label": "ACCOUNT.CURRENCY.COUNTRY_KH"}, {
          "value": "KI",
          "label": "ACCOUNT.CURRENCY.COUNTRY_KI"
        }, {"value": "KM", "label": "ACCOUNT.CURRENCY.COUNTRY_KM"}, {
          "value": "KN",
          "label": "ACCOUNT.CURRENCY.COUNTRY_KN"
        }, {"value": "KP", "label": "ACCOUNT.CURRENCY.COUNTRY_KP"}, {
          "value": "KR",
          "label": "ACCOUNT.CURRENCY.COUNTRY_KR"
        }, {"value": "KW", "label": "ACCOUNT.CURRENCY.COUNTRY_KW"}, {
          "value": "KY",
          "label": "ACCOUNT.CURRENCY.COUNTRY_KY"
        }, {"value": "KZ", "label": "ACCOUNT.CURRENCY.COUNTRY_KZ"}, {
          "value": "LA",
          "label": "ACCOUNT.CURRENCY.COUNTRY_LA"
        }, {"value": "LB", "label": "ACCOUNT.CURRENCY.COUNTRY_LB"}, {
          "value": "LC",
          "label": "ACCOUNT.CURRENCY.COUNTRY_LC"
        }, {"value": "LI", "label": "ACCOUNT.CURRENCY.COUNTRY_LI"}, {
          "value": "LK",
          "label": "ACCOUNT.CURRENCY.COUNTRY_LK"
        }, {"value": "LR", "label": "ACCOUNT.CURRENCY.COUNTRY_LR"}, {
          "value": "LS",
          "label": "ACCOUNT.CURRENCY.COUNTRY_LS"
        }, {"value": "LT", "label": "ACCOUNT.CURRENCY.COUNTRY_LT"}, {
          "value": "LU",
          "label": "ACCOUNT.CURRENCY.COUNTRY_LU"
        }, {"value": "LV", "label": "ACCOUNT.CURRENCY.COUNTRY_LV"}, {
          "value": "LY",
          "label": "ACCOUNT.CURRENCY.COUNTRY_LY"
        }, {"value": "MA", "label": "ACCOUNT.CURRENCY.COUNTRY_MA"}, {
          "value": "MC",
          "label": "ACCOUNT.CURRENCY.COUNTRY_MC"
        }, {"value": "MD", "label": "ACCOUNT.CURRENCY.COUNTRY_MD"}, {
          "value": "ME",
          "label": "ACCOUNT.CURRENCY.COUNTRY_ME"
        }, {"value": "MF", "label": "ACCOUNT.CURRENCY.COUNTRY_MF"}, {
          "value": "MG",
          "label": "ACCOUNT.CURRENCY.COUNTRY_MG"
        }, {"value": "MH", "label": "ACCOUNT.CURRENCY.COUNTRY_MH"}, {
          "value": "MK",
          "label": "ACCOUNT.CURRENCY.COUNTRY_MK"
        }, {"value": "ML", "label": "ACCOUNT.CURRENCY.COUNTRY_ML"}, {
          "value": "MM",
          "label": "ACCOUNT.CURRENCY.COUNTRY_MM"
        }, {"value": "MN", "label": "ACCOUNT.CURRENCY.COUNTRY_MN"}, {
          "value": "MO",
          "label": "ACCOUNT.CURRENCY.COUNTRY_MO"
        }, {"value": "MP", "label": "ACCOUNT.CURRENCY.COUNTRY_MP"}, {
          "value": "MQ",
          "label": "ACCOUNT.CURRENCY.COUNTRY_MQ"
        }, {"value": "MR", "label": "ACCOUNT.CURRENCY.COUNTRY_MR"}, {
          "value": "MS",
          "label": "ACCOUNT.CURRENCY.COUNTRY_MS"
        }, {"value": "MT", "label": "ACCOUNT.CURRENCY.COUNTRY_MT"}, {
          "value": "MU",
          "label": "ACCOUNT.CURRENCY.COUNTRY_MU"
        }, {"value": "MV", "label": "ACCOUNT.CURRENCY.COUNTRY_MV"}, {
          "value": "MW",
          "label": "ACCOUNT.CURRENCY.COUNTRY_MW"
        }, {"value": "MX", "label": "ACCOUNT.CURRENCY.COUNTRY_MX"}, {
          "value": "MY",
          "label": "ACCOUNT.CURRENCY.COUNTRY_MY"
        }, {"value": "MZ", "label": "ACCOUNT.CURRENCY.COUNTRY_MZ"}, {
          "value": "NA",
          "label": "ACCOUNT.CURRENCY.COUNTRY_NA"
        }, {"value": "NC", "label": "ACCOUNT.CURRENCY.COUNTRY_NC"}, {
          "value": "NE",
          "label": "ACCOUNT.CURRENCY.COUNTRY_NE"
        }, {"value": "NF", "label": "ACCOUNT.CURRENCY.COUNTRY_NF"}, {
          "value": "NG",
          "label": "ACCOUNT.CURRENCY.COUNTRY_NG"
        }, {"value": "NI", "label": "ACCOUNT.CURRENCY.COUNTRY_NI"}, {
          "value": "NL",
          "label": "ACCOUNT.CURRENCY.COUNTRY_NL"
        }, {"value": "NO", "label": "ACCOUNT.CURRENCY.COUNTRY_NO"}, {
          "value": "NP",
          "label": "ACCOUNT.CURRENCY.COUNTRY_NP"
        }, {"value": "NR", "label": "ACCOUNT.CURRENCY.COUNTRY_NR"}, {
          "value": "NU",
          "label": "ACCOUNT.CURRENCY.COUNTRY_NU"
        }, {"value": "NZ", "label": "ACCOUNT.CURRENCY.COUNTRY_NZ"}, {
          "value": "OM",
          "label": "ACCOUNT.CURRENCY.COUNTRY_OM"
        }, {"value": "PA", "label": "ACCOUNT.CURRENCY.COUNTRY_PA"}, {
          "value": "PE",
          "label": "ACCOUNT.CURRENCY.COUNTRY_PE"
        }, {"value": "PF", "label": "ACCOUNT.CURRENCY.COUNTRY_PF"}, {
          "value": "PG",
          "label": "ACCOUNT.CURRENCY.COUNTRY_PG"
        }, {"value": "PH", "label": "ACCOUNT.CURRENCY.COUNTRY_PH"}, {
          "value": "PK",
          "label": "ACCOUNT.CURRENCY.COUNTRY_PK"
        }, {"value": "PL", "label": "ACCOUNT.CURRENCY.COUNTRY_PL"}, {
          "value": "PM",
          "label": "ACCOUNT.CURRENCY.COUNTRY_PM"
        }, {"value": "PN", "label": "ACCOUNT.CURRENCY.COUNTRY_PN"}, {
          "value": "PR",
          "label": "ACCOUNT.CURRENCY.COUNTRY_PR"
        }, {"value": "PS", "label": "ACCOUNT.CURRENCY.COUNTRY_PS"}, {
          "value": "PT",
          "label": "ACCOUNT.CURRENCY.COUNTRY_PT"
        }, {"value": "PW", "label": "ACCOUNT.CURRENCY.COUNTRY_PW"}, {
          "value": "PY",
          "label": "ACCOUNT.CURRENCY.COUNTRY_PY"
        }, {"value": "QA", "label": "ACCOUNT.CURRENCY.COUNTRY_QA"}, {
          "value": "RE",
          "label": "ACCOUNT.CURRENCY.COUNTRY_RE"
        }, {"value": "RO", "label": "ACCOUNT.CURRENCY.COUNTRY_RO"}, {
          "value": "RS",
          "label": "ACCOUNT.CURRENCY.COUNTRY_RS"
        }, {"value": "RU", "label": "ACCOUNT.CURRENCY.COUNTRY_RU"}, {
          "value": "RW",
          "label": "ACCOUNT.CURRENCY.COUNTRY_RW"
        }, {"value": "SA", "label": "ACCOUNT.CURRENCY.COUNTRY_SA"}, {
          "value": "SB",
          "label": "ACCOUNT.CURRENCY.COUNTRY_SB"
        }, {"value": "SC", "label": "ACCOUNT.CURRENCY.COUNTRY_SC"}, {
          "value": "SD",
          "label": "ACCOUNT.CURRENCY.COUNTRY_SD"
        }, {"value": "SE", "label": "ACCOUNT.CURRENCY.COUNTRY_SE"}, {
          "value": "SG",
          "label": "ACCOUNT.CURRENCY.COUNTRY_SG"
        }, {"value": "SH", "label": "ACCOUNT.CURRENCY.COUNTRY_SH"}, {
          "value": "SI",
          "label": "ACCOUNT.CURRENCY.COUNTRY_SI"
        }, {"value": "SJ", "label": "ACCOUNT.CURRENCY.COUNTRY_SJ"}, {
          "value": "SK",
          "label": "ACCOUNT.CURRENCY.COUNTRY_SK"
        }, {"value": "SL", "label": "ACCOUNT.CURRENCY.COUNTRY_SL"}, {
          "value": "SM",
          "label": "ACCOUNT.CURRENCY.COUNTRY_SM"
        }, {"value": "SN", "label": "ACCOUNT.CURRENCY.COUNTRY_SN"}, {
          "value": "SO",
          "label": "ACCOUNT.CURRENCY.COUNTRY_SO"
        }, {"value": "SR", "label": "ACCOUNT.CURRENCY.COUNTRY_SR"}, {
          "value": "SS",
          "label": "ACCOUNT.CURRENCY.COUNTRY_SS"
        }, {"value": "ST", "label": "ACCOUNT.CURRENCY.COUNTRY_ST"}, {
          "value": "SV",
          "label": "ACCOUNT.CURRENCY.COUNTRY_SV"
        }, {"value": "SX", "label": "ACCOUNT.CURRENCY.COUNTRY_SX"}, {
          "value": "SY",
          "label": "ACCOUNT.CURRENCY.COUNTRY_SY"
        }, {"value": "SZ", "label": "ACCOUNT.CURRENCY.COUNTRY_SZ"}, {
          "value": "TC",
          "label": "ACCOUNT.CURRENCY.COUNTRY_TC"
        }, {"value": "TD", "label": "ACCOUNT.CURRENCY.COUNTRY_TD"}, {
          "value": "TF",
          "label": "ACCOUNT.CURRENCY.COUNTRY_TF"
        }, {"value": "TG", "label": "ACCOUNT.CURRENCY.COUNTRY_TG"}, {
          "value": "TH",
          "label": "ACCOUNT.CURRENCY.COUNTRY_TH"
        }, {"value": "TJ", "label": "ACCOUNT.CURRENCY.COUNTRY_TJ"}, {
          "value": "TK",
          "label": "ACCOUNT.CURRENCY.COUNTRY_TK"
        }, {"value": "TL", "label": "ACCOUNT.CURRENCY.COUNTRY_TL"}, {
          "value": "TM",
          "label": "ACCOUNT.CURRENCY.COUNTRY_TM"
        }, {"value": "TN", "label": "ACCOUNT.CURRENCY.COUNTRY_TN"}, {
          "value": "TO",
          "label": "ACCOUNT.CURRENCY.COUNTRY_TO"
        }, {"value": "TR", "label": "ACCOUNT.CURRENCY.COUNTRY_TR"}, {
          "value": "TT",
          "label": "ACCOUNT.CURRENCY.COUNTRY_TT"
        }, {"value": "TV", "label": "ACCOUNT.CURRENCY.COUNTRY_TV"}, {
          "value": "TW",
          "label": "ACCOUNT.CURRENCY.COUNTRY_TW"
        }, {"value": "TZ", "label": "ACCOUNT.CURRENCY.COUNTRY_TZ"}, {
          "value": "UA",
          "label": "ACCOUNT.CURRENCY.COUNTRY_UA"
        }, {"value": "UG", "label": "ACCOUNT.CURRENCY.COUNTRY_UG"}, {
          "value": "UM",
          "label": "ACCOUNT.CURRENCY.COUNTRY_UM"
        }, {"value": "US", "label": "ACCOUNT.CURRENCY.COUNTRY_US"}, {
          "value": "UY",
          "label": "ACCOUNT.CURRENCY.COUNTRY_UY"
        }, {"value": "UZ", "label": "ACCOUNT.CURRENCY.COUNTRY_UZ"}, {
          "value": "VA",
          "label": "ACCOUNT.CURRENCY.COUNTRY_VA"
        }, {"value": "VC", "label": "ACCOUNT.CURRENCY.COUNTRY_VC"}, {
          "value": "VE",
          "label": "ACCOUNT.CURRENCY.COUNTRY_VE"
        }, {"value": "VG", "label": "ACCOUNT.CURRENCY.COUNTRY_VG"}, {
          "value": "VI",
          "label": "ACCOUNT.CURRENCY.COUNTRY_VI"
        }, {"value": "VN", "label": "ACCOUNT.CURRENCY.COUNTRY_VN"}, {
          "value": "VU",
          "label": "ACCOUNT.CURRENCY.COUNTRY_VU"
        }, {"value": "WF", "label": "ACCOUNT.CURRENCY.COUNTRY_WF"}, {
          "value": "WS",
          "label": "ACCOUNT.CURRENCY.COUNTRY_WS"
        }, {"value": "XK", "label": "ACCOUNT.CURRENCY.COUNTRY_XK"}, {
          "value": "YE",
          "label": "ACCOUNT.CURRENCY.COUNTRY_YE"
        }, {"value": "YT", "label": "ACCOUNT.CURRENCY.COUNTRY_YT"}, {
          "value": "ZA",
          "label": "ACCOUNT.CURRENCY.COUNTRY_ZA"
        }, {"value": "ZM", "label": "ACCOUNT.CURRENCY.COUNTRY_ZM"}, {
          "value": "ZW",
          "label": "ACCOUNT.CURRENCY.COUNTRY_ZW"
        }],
        "validators": ["required"]
      },
      "tradeCurrencies": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.CURRENCY",
        "options": [{"value": "AED", "label": "ACCOUNT.CURRENCY.CURRENCY_AED"}, {
          "value": "AFN",
          "label": "ACCOUNT.CURRENCY.CURRENCY_AFN"
        }, {"value": "ALL", "label": "ACCOUNT.CURRENCY.CURRENCY_ALL"}, {
          "value": "AMD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_AMD"
        }, {"value": "ANG", "label": "ACCOUNT.CURRENCY.CURRENCY_ANG"}, {
          "value": "AOA",
          "label": "ACCOUNT.CURRENCY.CURRENCY_AOA"
        }, {"value": "ARS", "label": "ACCOUNT.CURRENCY.CURRENCY_ARS"}, {
          "value": "AUD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_AUD"
        }, {"value": "AWG", "label": "ACCOUNT.CURRENCY.CURRENCY_AWG"}, {
          "value": "AZN",
          "label": "ACCOUNT.CURRENCY.CURRENCY_AZN"
        }, {"value": "BAM", "label": "ACCOUNT.CURRENCY.CURRENCY_BAM"}, {
          "value": "BBD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_BBD"
        }, {"value": "BDT", "label": "ACCOUNT.CURRENCY.CURRENCY_BDT"}, {
          "value": "BGN",
          "label": "ACCOUNT.CURRENCY.CURRENCY_BGN"
        }, {"value": "BHD", "label": "ACCOUNT.CURRENCY.CURRENCY_BHD"}, {
          "value": "BIF",
          "label": "ACCOUNT.CURRENCY.CURRENCY_BIF"
        }, {"value": "BMD", "label": "ACCOUNT.CURRENCY.CURRENCY_BMD"}, {
          "value": "BND",
          "label": "ACCOUNT.CURRENCY.CURRENCY_BND"
        }, {"value": "BOB", "label": "ACCOUNT.CURRENCY.CURRENCY_BOB"}, {
          "value": "BRL",
          "label": "ACCOUNT.CURRENCY.CURRENCY_BRL"
        }, {"value": "BSD", "label": "ACCOUNT.CURRENCY.CURRENCY_BSD"}, {
          "value": "BTN",
          "label": "ACCOUNT.CURRENCY.CURRENCY_BTN"
        }, {"value": "BWP", "label": "ACCOUNT.CURRENCY.CURRENCY_BWP"}, {
          "value": "BYR",
          "label": "ACCOUNT.CURRENCY.CURRENCY_BYR"
        }, {"value": "BZD", "label": "ACCOUNT.CURRENCY.CURRENCY_BZD"}, {
          "value": "CAD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_CAD"
        }, {"value": "CDF", "label": "ACCOUNT.CURRENCY.CURRENCY_CDF"}, {
          "value": "CHF",
          "label": "ACCOUNT.CURRENCY.CURRENCY_CHF"
        }, {"value": "CLP", "label": "ACCOUNT.CURRENCY.CURRENCY_CLP"}, {
          "value": "CNY",
          "label": "ACCOUNT.CURRENCY.CURRENCY_CNY"
        }, {"value": "COP", "label": "ACCOUNT.CURRENCY.CURRENCY_COP"}, {
          "value": "CRC",
          "label": "ACCOUNT.CURRENCY.CURRENCY_CRC"
        }, {"value": "CUP", "label": "ACCOUNT.CURRENCY.CURRENCY_CUP"}, {
          "value": "CVE",
          "label": "ACCOUNT.CURRENCY.CURRENCY_CVE"
        }, {"value": "CZK", "label": "ACCOUNT.CURRENCY.CURRENCY_CZK"}, {
          "value": "DJF",
          "label": "ACCOUNT.CURRENCY.CURRENCY_DJF"
        }, {"value": "DKK", "label": "ACCOUNT.CURRENCY.CURRENCY_DKK"}, {
          "value": "DOP",
          "label": "ACCOUNT.CURRENCY.CURRENCY_DOP"
        }, {"value": "DZD", "label": "ACCOUNT.CURRENCY.CURRENCY_DZD"}, {
          "value": "ECS",
          "label": "ACCOUNT.CURRENCY.CURRENCY_ECS"
        }, {"value": "EGP", "label": "ACCOUNT.CURRENCY.CURRENCY_EGP"}, {
          "value": "ERN",
          "label": "ACCOUNT.CURRENCY.CURRENCY_ERN"
        }, {"value": "ETB", "label": "ACCOUNT.CURRENCY.CURRENCY_ETB"}, {
          "value": "EUR",
          "label": "ACCOUNT.CURRENCY.CURRENCY_EUR"
        }, {"value": "FJD", "label": "ACCOUNT.CURRENCY.CURRENCY_FJD"}, {
          "value": "FKP",
          "label": "ACCOUNT.CURRENCY.CURRENCY_FKP"
        }, {"value": "GBP", "label": "ACCOUNT.CURRENCY.CURRENCY_GBP"}, {
          "value": "GEL",
          "label": "ACCOUNT.CURRENCY.CURRENCY_GEL"
        }, {"value": "GGP", "label": "ACCOUNT.CURRENCY.CURRENCY_GGP"}, {
          "value": "GHS",
          "label": "ACCOUNT.CURRENCY.CURRENCY_GHS"
        }, {"value": "GIP", "label": "ACCOUNT.CURRENCY.CURRENCY_GIP"}, {
          "value": "GMD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_GMD"
        }, {"value": "GNF", "label": "ACCOUNT.CURRENCY.CURRENCY_GNF"}, {
          "value": "GWP",
          "label": "ACCOUNT.CURRENCY.CURRENCY_GWP"
        }, {"value": "GYD", "label": "ACCOUNT.CURRENCY.CURRENCY_GYD"}, {
          "value": "HKD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_HKD"
        }, {"value": "HNL", "label": "ACCOUNT.CURRENCY.CURRENCY_HNL"}, {
          "value": "HRK",
          "label": "ACCOUNT.CURRENCY.CURRENCY_HRK"
        }, {"value": "HTG", "label": "ACCOUNT.CURRENCY.CURRENCY_HTG"}, {
          "value": "HUF",
          "label": "ACCOUNT.CURRENCY.CURRENCY_HUF"
        }, {"value": "ILS", "label": "ACCOUNT.CURRENCY.CURRENCY_ILS"}, {
          "value": "INR",
          "label": "ACCOUNT.CURRENCY.CURRENCY_INR"
        }, {"value": "IQD", "label": "ACCOUNT.CURRENCY.CURRENCY_IQD"}, {
          "value": "IRR",
          "label": "ACCOUNT.CURRENCY.CURRENCY_IRR"
        }, {"value": "ISK", "label": "ACCOUNT.CURRENCY.CURRENCY_ISK"}, {
          "value": "Itd",
          "label": "ACCOUNT.CURRENCY.CURRENCY_Itd"
        }, {"value": "JMD", "label": "ACCOUNT.CURRENCY.CURRENCY_JMD"}, {
          "value": "JOD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_JOD"
        }, {"value": "JPY", "label": "ACCOUNT.CURRENCY.CURRENCY_JPY"}, {
          "value": "KES",
          "label": "ACCOUNT.CURRENCY.CURRENCY_KES"
        }, {"value": "KGS", "label": "ACCOUNT.CURRENCY.CURRENCY_KGS"}, {
          "value": "KHR",
          "label": "ACCOUNT.CURRENCY.CURRENCY_KHR"
        }, {"value": "KMF", "label": "ACCOUNT.CURRENCY.CURRENCY_KMF"}, {
          "value": "KPW",
          "label": "ACCOUNT.CURRENCY.CURRENCY_KPW"
        }, {"value": "KRW", "label": "ACCOUNT.CURRENCY.CURRENCY_KRW"}, {
          "value": "KWD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_KWD"
        }, {"value": "KYD", "label": "ACCOUNT.CURRENCY.CURRENCY_KYD"}, {
          "value": "KZT",
          "label": "ACCOUNT.CURRENCY.CURRENCY_KZT"
        }, {"value": "LAK", "label": "ACCOUNT.CURRENCY.CURRENCY_LAK"}, {
          "value": "LBP",
          "label": "ACCOUNT.CURRENCY.CURRENCY_LBP"
        }, {"value": "LKR", "label": "ACCOUNT.CURRENCY.CURRENCY_LKR"}, {
          "value": "LRD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_LRD"
        }, {"value": "LSL", "label": "ACCOUNT.CURRENCY.CURRENCY_LSL"}, {
          "value": "LTL",
          "label": "ACCOUNT.CURRENCY.CURRENCY_LTL"
        }, {"value": "LVL", "label": "ACCOUNT.CURRENCY.CURRENCY_LVL"}, {
          "value": "LYD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_LYD"
        }, {"value": "MAD", "label": "ACCOUNT.CURRENCY.CURRENCY_MAD"}, {
          "value": "MDL",
          "label": "ACCOUNT.CURRENCY.CURRENCY_MDL"
        }, {"value": "MGF", "label": "ACCOUNT.CURRENCY.CURRENCY_MGF"}, {
          "value": "MKD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_MKD"
        }, {"value": "MMK", "label": "ACCOUNT.CURRENCY.CURRENCY_MMK"}, {
          "value": "MNT",
          "label": "ACCOUNT.CURRENCY.CURRENCY_MNT"
        }, {"value": "MOP", "label": "ACCOUNT.CURRENCY.CURRENCY_MOP"}, {
          "value": "MRO",
          "label": "ACCOUNT.CURRENCY.CURRENCY_MRO"
        }, {"value": "MUR", "label": "ACCOUNT.CURRENCY.CURRENCY_MUR"}, {
          "value": "MVR",
          "label": "ACCOUNT.CURRENCY.CURRENCY_MVR"
        }, {"value": "MWK", "label": "ACCOUNT.CURRENCY.CURRENCY_MWK"}, {
          "value": "MXN",
          "label": "ACCOUNT.CURRENCY.CURRENCY_MXN"
        }, {"value": "MYR", "label": "ACCOUNT.CURRENCY.CURRENCY_MYR"}, {
          "value": "MZN",
          "label": "ACCOUNT.CURRENCY.CURRENCY_MZN"
        }, {"value": "NAD", "label": "ACCOUNT.CURRENCY.CURRENCY_NAD"}, {
          "value": "NGN",
          "label": "ACCOUNT.CURRENCY.CURRENCY_NGN"
        }, {"value": "NIO", "label": "ACCOUNT.CURRENCY.CURRENCY_NIO"}, {
          "value": "NOK",
          "label": "ACCOUNT.CURRENCY.CURRENCY_NOK"
        }, {"value": "NPR", "label": "ACCOUNT.CURRENCY.CURRENCY_NPR"}, {
          "value": "NZD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_NZD"
        }, {"value": "OMR", "label": "ACCOUNT.CURRENCY.CURRENCY_OMR"}, {
          "value": "PAB",
          "label": "ACCOUNT.CURRENCY.CURRENCY_PAB"
        }, {"value": "PEN", "label": "ACCOUNT.CURRENCY.CURRENCY_PEN"}, {
          "value": "PGK",
          "label": "ACCOUNT.CURRENCY.CURRENCY_PGK"
        }, {"value": "PHP", "label": "ACCOUNT.CURRENCY.CURRENCY_PHP"}, {
          "value": "PKR",
          "label": "ACCOUNT.CURRENCY.CURRENCY_PKR"
        }, {"value": "PLN", "label": "ACCOUNT.CURRENCY.CURRENCY_PLN"}, {
          "value": "PYG",
          "label": "ACCOUNT.CURRENCY.CURRENCY_PYG"
        }, {"value": "QAR", "label": "ACCOUNT.CURRENCY.CURRENCY_QAR"}, {
          "value": "QTQ",
          "label": "ACCOUNT.CURRENCY.CURRENCY_QTQ"
        }, {"value": "RON", "label": "ACCOUNT.CURRENCY.CURRENCY_RON"}, {
          "value": "RSD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_RSD"
        }, {"value": "RUB", "label": "ACCOUNT.CURRENCY.CURRENCY_RUB"}, {
          "value": "RWF",
          "label": "ACCOUNT.CURRENCY.CURRENCY_RWF"
        }, {"value": "SAR", "label": "ACCOUNT.CURRENCY.CURRENCY_SAR"}, {
          "value": "SBD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_SBD"
        }, {"value": "SCR", "label": "ACCOUNT.CURRENCY.CURRENCY_SCR"}, {
          "value": "SDG",
          "label": "ACCOUNT.CURRENCY.CURRENCY_SDG"
        }, {"value": "SEK", "label": "ACCOUNT.CURRENCY.CURRENCY_SEK"}, {
          "value": "SGD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_SGD"
        }, {"value": "SHP", "label": "ACCOUNT.CURRENCY.CURRENCY_SHP"}, {
          "value": "SLL",
          "label": "ACCOUNT.CURRENCY.CURRENCY_SLL"
        }, {"value": "SOS", "label": "ACCOUNT.CURRENCY.CURRENCY_SOS"}, {
          "value": "SRD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_SRD"
        }, {"value": "SSP", "label": "ACCOUNT.CURRENCY.CURRENCY_SSP"}, {
          "value": "STD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_STD"
        }, {"value": "SVC", "label": "ACCOUNT.CURRENCY.CURRENCY_SVC"}, {
          "value": "SYP",
          "label": "ACCOUNT.CURRENCY.CURRENCY_SYP"
        }, {"value": "SZL", "label": "ACCOUNT.CURRENCY.CURRENCY_SZL"}, {
          "value": "THB",
          "label": "ACCOUNT.CURRENCY.CURRENCY_THB"
        }, {"value": "TJS", "label": "ACCOUNT.CURRENCY.CURRENCY_TJS"}, {
          "value": "TMT",
          "label": "ACCOUNT.CURRENCY.CURRENCY_TMT"
        }, {"value": "TND", "label": "ACCOUNT.CURRENCY.CURRENCY_TND"}, {
          "value": "TOP",
          "label": "ACCOUNT.CURRENCY.CURRENCY_TOP"
        }, {"value": "TRY", "label": "ACCOUNT.CURRENCY.CURRENCY_TRY"}, {
          "value": "TTD",
          "label": "ACCOUNT.CURRENCY.CURRENCY_TTD"
        }, {"value": "TWD", "label": "ACCOUNT.CURRENCY.CURRENCY_TWD"}, {
          "value": "TZS",
          "label": "ACCOUNT.CURRENCY.CURRENCY_TZS"
        }, {"value": "UAH", "label": "ACCOUNT.CURRENCY.CURRENCY_UAH"}, {
          "value": "UGX",
          "label": "ACCOUNT.CURRENCY.CURRENCY_UGX"
        }, {"value": "USD", "label": "ACCOUNT.CURRENCY.CURRENCY_USD"}, {
          "value": "UYU",
          "label": "ACCOUNT.CURRENCY.CURRENCY_UYU"
        }, {"value": "UZS", "label": "ACCOUNT.CURRENCY.CURRENCY_UZS"}, {
          "value": "VEF",
          "label": "ACCOUNT.CURRENCY.CURRENCY_VEF"
        }, {"value": "VND", "label": "ACCOUNT.CURRENCY.CURRENCY_VND"}, {
          "value": "VUV",
          "label": "ACCOUNT.CURRENCY.CURRENCY_VUV"
        }, {"value": "WST", "label": "ACCOUNT.CURRENCY.CURRENCY_WST"}, {
          "value": "XAF",
          "label": "ACCOUNT.CURRENCY.CURRENCY_XAF"
        }, {"value": "XCD", "label": "ACCOUNT.CURRENCY.CURRENCY_XCD"}, {
          "value": "XOF",
          "label": "ACCOUNT.CURRENCY.CURRENCY_XOF"
        }, {"value": "XPF", "label": "ACCOUNT.CURRENCY.CURRENCY_XPF"}, {
          "value": "YER",
          "label": "ACCOUNT.CURRENCY.CURRENCY_YER"
        }, {"value": "ZAR", "label": "ACCOUNT.CURRENCY.CURRENCY_ZAR"}, {
          "value": "ZMW",
          "label": "ACCOUNT.CURRENCY.CURRENCY_ZMW"
        }, {"value": "ZWD", "label": "ACCOUNT.CURRENCY.CURRENCY_ZWD"}],
        "validators": ["required"]
      },
      "holderName": {"type": "text", "label": "ACCOUNT.CURRENCY.OWNER_NAME", "validators": ["required"]},
      "city": {"type": "text", "label": "ACCOUNT.CURRENCY.CITY", "validators": ["required"]},
      "email": {"type": "text", "label": "ACCOUNT.CURRENCY.EMAIL", "validators": ["required", "email"]},
      "accountName": {"type": "text", "label": "ACCOUNT.CURRENCY.ACCOUNT_NAME", "validators": ["required"]},
      "limitations": {
        "type": "footer",
        "label": "ACCOUNT.CURRENCY.LIMITATIONS",
        "text": "ACCOUNT.CURRENCY.LIMITATION_4_0625_0"
      }
    }
  },
  {
    "key": "CLEAR_X_CHANGE",
    "label": "Zelle (ClearXchange)",
    "form": {
      "holderName": {"type": "text", "label": "ACCOUNT.CURRENCY.OWNER_NAME", "validators": ["required"]},
      "emailOrMobileNr": {"type": "text", "label": "ACCOUNT.CURRENCY.EMAIL_OR_MOBILE", "validators": ["required"]},
      "tradeCurrencies": {
        "type": "select",
        "label": "ACCOUNT.CURRENCY.CURRENCY",
        "value": "USD",
        "options": [{"value": "USD", "label": "ACCOUNT.CURRENCY.CURRENCY_USD"}],
        "disabled": true
      },
      "accountName": {"type": "text", "label": "ACCOUNT.CURRENCY.ACCOUNT_NAME", "validators": ["required"]},
      "limitations": {
        "type": "footer",
        "label": "ACCOUNT.CURRENCY.LIMITATIONS",
        "text": "ACCOUNT.CURRENCY.LIMITATION_1_0625_0"
      }
    }
  }
]
