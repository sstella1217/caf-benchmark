// 2-letter Country-Codes and their respective Lat-Lon coordinates
// curated by Ohad Eder-Pressman (ohadpr.com)
// read: http://ohadpr.com/2010/04/countries-approximate-lat-lon-and-iso-3166-1-alpha-2

var countryCodes = {
	'AF':[33.93911,67.709953,'Afghanistan'],
	'AX':[37.0625,-95.677068,'Ã…land Islands'],
	'AL':[41.153332,20.168331,'Albania'],
	'DZ':[28.033886,1.659626,'Algeria'],
	'AS':[-14.270972,-170.132217,'American Samoa'],
	'AD':[42.546245,1.601554,'Andorra'],
	'AO':[-11.202692,17.873887,'Angola'],
	'AI':[18.220554,-63.068615,'Anguilla'],
	'AQ':[-75.250973,-0.071389,'Antarctica'],
	'AG':[17.060816,-61.796428,'Antigua and Barbuda'],
	'AR':[-38.416097,-63.616672,'Argentina'],
	'AM':[40.069099,45.038189,'Armenia'],
	'AW':[12.52111,-69.968338,'Aruba'],
	'AU':[-25.274398,133.775136,'Australia'],
	'AT':[47.516231,14.550072,'Austria'],
	'AZ':[40.143105,47.576927,'Azerbaijan'],
	'BS':[25.03428,-77.39628,'Bahamas'],
	'BH':[25.930414,50.637772,'Bahrain'],
	'BD':[23.684994,90.356331,'Bangladesh'],
	'BB':[13.193887,-59.543198,'Barbados'],
	'BY':[53.709807,27.953389,'Belarus'],
	'BE':[50.503887,4.469936,'Belgium'],
	'BZ':[17.189877,-88.49765,'Belize'],
	'BJ':[9.30769,2.315834,'Benin'],
	'BM':[32.321384,-64.75737,'Bermuda'],
	'BT':[27.514162,90.433601,'Bhutan'],
	'BO':[-16.290154,-63.588653,'Bolivia, Plurinational State of'],
	'BA':[43.915886,17.679076,'Bosnia and Herzegovina'],
	'BW':[-22.328474,24.684866,'Botswana'],
	'BV':[-54.423199,3.413194,'Bouvet Island'],
	'BR':[-14.235004,-51.92528,'Brazil'],
	'IO':[-6.343194,71.876519,'British Indian Ocean Territory'],
	'BN':[4.535277,114.727669,'Brunei Darussalam'],
	'BG':[42.733883,25.48583,'Bulgaria'],
	'BF':[12.238333,-1.561593,'Burkina Faso'],
	'BI':[-3.373056,29.918886,'Burundi'],
	'KH':[12.565679,104.990963,'Cambodia'],
	'CM':[7.369722,12.354722,'Cameroon'],
	'CA':[56.130366,-106.346771,'Canada'],
	'CV':[16.002082,-24.013197,'Cape Verde'],
	'KY':[19.513469,-80.566956,'Cayman Islands'],
	'CF':[6.611111,20.939444,'Central African Republic'],
	'TD':[15.454166,18.732207,'Chad'],
	'CL':[-35.675147,-71.542969,'Chile'],
	'CN':[35.86166,104.195397,'China'],
	'CX':[-10.447525,105.690449,'Christmas Island'],
	'CC':[37.0625,-95.677068,'Cocos (Keeling) Islands'],
	'CO':[4.570868,-74.297333,'Colombia'],
	'KM':[-11.875001,43.872219,'Comoros'],
	'CG':[-0.228021,15.827659,'Congo'],
	'CD':[-0.228021,15.827659,'Congo, the Democratic Republic of the'],
	'CK':[-21.236736,-159.777671,'Cook Islands'],
	'CR':[9.748917,-83.753428,'Costa Rica'],
	'CI':[7.539989,-5.54708,'CÃ´te d\'Ivoire'],
	'HR':[45.1,15.2,'Croatia'],
	'CU':[21.521757,-77.781167,'Cuba'],
	'CY':[35.126413,33.429859,'Cyprus'],
	'CZ':[49.817492,15.472962,'Czech Republic'],
	'DK':[56.26392,9.501785,'Denmark'],
	'DJ':[11.825138,42.590275,'Djibouti'],
	'DM':[15.414999,-61.370976,'Dominica'],
	'DO':[18.735693,-70.162651,'Dominican Republic'],
	'EC':[-1.831239,-78.183406,'Ecuador'],
	'EG':[26.820553,30.802498,'Egypt'],
	'SV':[13.794185,-88.89653,'El Salvador'],
	'GQ':[1.650801,10.267895,'Equatorial Guinea'],
	'ER':[15.179384,39.782334,'Eritrea'],
	'EE':[58.595272,25.013607,'Estonia'],
	'ET':[9.145,40.489673,'Ethiopia'],
	'FK':[-51.796253,-59.523613,'Falkland Islands (Malvinas)'],
	'FO':[61.892635,-6.911806,'Faroe Islands'],
	'FJ':[-16.578193,179.414413,'Fiji'],
	'FI':[61.92411,25.748151,'Finland'],
	'FR':[46.227638,2.213749,'France'],
	'GF':[3.933889,-53.125782,'French Guiana'],
	'PF':[-17.679742,-149.406843,'French Polynesia'],
	'TF':[37.0625,-95.677068,'French Southern Territories'],
	'GA':[-0.803689,11.609444,'Gabon'],
	'GM':[13.443182,-15.310139,'Gambia'],
	'GE':[32.157435,-82.907123,'Georgia'],
	'DE':[51.165691,10.451526,'Germany'],
	'GH':[7.946527,-1.023194,'Ghana'],
	'GI':[36.137741,-5.345374,'Gibraltar'],
	'GR':[39.074208,21.824312,'Greece'],
	'GL':[71.706936,-42.604303,'Greenland'],
	'GD':[12.262776,-61.604171,'Grenada'],
	'GP':[16.995971,-62.067641,'Guadeloupe'],
	'GU':[13.444304,144.793731,'Guam'],
	'GT':[15.783471,-90.230759,'Guatemala'],
	'GG':[49.465691,-2.585278,'Guernsey'],
	'GN':[9.945587,-9.696645,'Guinea'],
	'GW':[11.803749,-15.180413,'Guinea-Bissau'],
	'GY':[4.860416,-58.93018,'Guyana'],
	'HT':[18.971187,-72.285215,'Haiti'],
	'HM':[-53.08181,73.504158,'Heard Island and McDonald Islands'],
	'VA':[37.0625,-95.677068,'Holy See (Vatican City State)'],
	'HN':[15.199999,-86.241905,'Honduras'],
	'HK':[22.396428,114.109497,'Hong Kong'],
	'HU':[47.162494,19.503304,'Hungary'],
	'IS':[64.963051,-19.020835,'Iceland'],
	'IN':[20.593684,78.96288,'India'],
	'ID':[-0.789275,113.921327,'Indonesia'],
	'IR':[32.427908,53.688046,'Iran, Islamic Republic of'],
	'IQ':[33.223191,43.679291,'Iraq'],
	'IE':[53.41291,-8.24389,'Ireland'],
	'IM':[54.236107,-4.548056,'Isle of Man'],
	'IL':[31.046051,34.851612,'Israel'],
	'IT':[41.87194,12.56738,'Italy'],
	'JM':[18.109581,-77.297508,'Jamaica'],
	'JP':[36.204824,138.252924,'Japan'],
	'JE':[49.214439,-2.13125,'Jersey'],
	'JO':[30.585164,36.238414,'Jordan'],
	'KZ':[48.019573,66.923684,'Kazakhstan'],
	'KE':[-0.023559,37.906193,'Kenya'],
	'KI':[-3.370417,-168.734039,'Kiribati'],
	'KP':[35.907757,127.766922,'Korea, Democratic People\'s Republic of'],
	'KR':[35.907757,127.766922,'Korea, Republic of'],
	'KW':[29.31166,47.481766,'Kuwait'],
	'KG':[41.20438,74.766098,'Kyrgyzstan'],
	'LA':[19.85627,102.495496,'Lao People\'s Democratic Republic'],
	'LV':[56.879635,24.603189,'Latvia'],
	'LB':[33.854721,35.862285,'Lebanon'],
	'LS':[-29.609988,28.233608,'Lesotho'],
	'LR':[6.428055,-9.429499,'Liberia'],
	'LY':[37.0625,-95.677068,'Libyan Arab Jamahiriya'],
	'LI':[47.166,9.555373,'Liechtenstein'],
	'LT':[55.169438,23.881275,'Lithuania'],
	'LU':[49.815273,6.129583,'Luxembourg'],
	'MO':[22.198745,113.543873,'Macao'],
	'MK':[41.608635,21.745275,'Macedonia, the former Yugoslav Republic of'],
	'MG':[-18.766947,46.869107,'Madagascar'],
	'MW':[-13.254308,34.301525,'Malawi'],
	'MY':[4.210484,101.975766,'Malaysia'],
	'MV':[3.202778,73.22068,'Maldives'],
	'ML':[17.570692,-3.996166,'Mali'],
	'MT':[35.937496,14.375416,'Malta'],
	'MH':[7.131474,171.184478,'Marshall Islands'],
	'MQ':[14.641528,-61.024174,'Martinique'],
	'MR':[21.00789,-10.940835,'Mauritania'],
	'MU':[-20.348404,57.552152,'Mauritius'],
	'YT':[-12.8275,45.166244,'Mayotte'],
	'MX':[23.634501,-102.552784,'Mexico'],
	'FM':[7.425554,150.550812,'Micronesia, Federated States of'],
	'MD':[47.411631,28.369885,'Moldova, Republic of'],
	'MC':[43.750298,7.412841,'Monaco'],
	'MN':[46.862496,103.846656,'Mongolia'],
	'ME':[42.708678,19.37439,'Montenegro'],
	'MS':[16.742498,-62.187366,'Montserrat'],
	'MA':[31.791702,-7.09262,'Morocco'],
	'MZ':[-18.665695,35.529562,'Mozambique'],
	'MM':[21.913965,95.956223,'Myanmar'],
	'NA':[-22.95764,18.49041,'Namibia'],
	'NR':[-0.522778,166.931503,'Nauru'],
	'NP':[28.394857,84.124008,'Nepal'],
	'NL':[52.132633,5.291266,'Netherlands'],
	'AN':[12.226079,-69.060087,'Netherlands Antilles'],
	'NC':[-20.904305,165.618042,'New Caledonia'],
	'NZ':[-40.900557,174.885971,'New Zealand'],
	'NI':[12.865416,-85.207229,'Nicaragua'],
	'NE':[17.607789,8.081666,'Niger'],
	'NG':[9.081999,8.675277,'Nigeria'],
	'NU':[-19.054445,-169.867233,'Niue'],
	'NF':[-29.040835,167.954712,'Norfolk Island'],
	'MP':[17.33083,145.38469,'Northern Mariana Islands'],
	'NO':[60.472024,8.468946,'Norway'],
	'OM':[21.512583,55.923255,'Oman'],
	'PK':[30.375321,69.345116,'Pakistan'],
	'PW':[7.51498,134.58252,'Palau'],
	'PS':[42.094445,17.266614,'Palestinian Territory, Occupied'],
	'PA':[8.537981,-80.782127,'Panama'],
	'PG':[-6.314993,143.95555,'Papua New Guinea'],
	'PY':[-23.442503,-58.443832,'Paraguay'],
	'PE':[-9.189967,-75.015152,'Peru'],
	'PH':[12.879721,121.774017,'Philippines'],
	'PN':[-24.703615,-127.439308,'Pitcairn'],
	'PL':[51.919438,19.145136,'Poland'],
	'PT':[39.399872,-8.224454,'Portugal'],
	'PR':[18.220833,-66.590149,'Puerto Rico'],
	'QA':[25.354826,51.183884,'Qatar'],
	'RE':[-21.115141,55.536384,'RÃ©union'],
	'RO':[45.943161,24.96676,'Romania'],
	'RU':[61.52401,105.318756,'Russian Federation'],
	'RW':[-1.940278,29.873888,'Rwanda'],
	'BL':[37.0625,-95.677068,'Saint BarthÃ©lemy'],
	'SH':[-24.143474,-10.030696,'Saint Helena, Ascension and Tristan da Cunha'],
	'KN':[17.357822,-62.782998,'Saint Kitts and Nevis'],
	'LC':[13.909444,-60.978893,'Saint Lucia'],
	'MF':[43.589046,5.885031,'Saint Martin (French part)'],
	'PM':[46.941936,-56.27111,'Saint Pierre and Miquelon'],
	'VC':[12.984305,-61.287228,'Saint Vincent and the Grenadines'],
	'WS':[-13.759029,-172.104629,'Samoa'],
	'SM':[43.94236,12.457777,'San Marino'],
	'ST':[0.18636,6.613081,'Sao Tome and Principe'],
	'SA':[23.885942,45.079162,'Saudi Arabia'],
	'SN':[14.497401,-14.452362,'Senegal'],
	'RS':[44.016521,21.005859,'Serbia'],
	'SC':[-4.679574,55.491977,'Seychelles'],
	'SL':[8.460555,-11.779889,'Sierra Leone'],
	'SG':[1.352083,103.819836,'Singapore'],
	'SK':[48.669026,19.699024,'Slovakia'],
	'SI':[46.151241,14.995463,'Slovenia'],
	'SB':[-9.64571,160.156194,'Solomon Islands'],
	'SO':[5.152149,46.199616,'Somalia'],
	'ZA':[-30.559482,22.937506,'South Africa'],
	'GS':[-54.429579,-36.587909,'South Georgia and the South Sandwich Islands'],
	'ES':[40.463667,-3.74922,'Spain'],
	'LK':[7.873054,80.771797,'Sri Lanka'],
	'SD':[12.862807,30.217636,'Sudan'],
	'SR':[3.919305,-56.027783,'Suriname'],
	'SJ':[77.553604,23.670272,'Svalbard and Jan Mayen'],
	'SZ':[-26.522503,31.465866,'Swaziland'],
	'SE':[60.128161,18.643501,'Sweden'],
	'CH':[46.818188,8.227512,'Switzerland'],
	'SY':[34.802075,38.996815,'Syrian Arab Republic'],
	'TW':[23.69781,120.960515,'Taiwan, Province of China'],
	'TJ':[38.861034,71.276093,'Tajikistan'],
	'TZ':[-6.369028,34.888822,'Tanzania, United Republic of'],
	'TH':[15.870032,100.992541,'Thailand'],
	'TL':[-8.874217,125.727539,'Timor-Leste'],
	'TG':[8.619543,0.824782,'Togo'],
	'TK':[-8.967363,-171.855881,'Tokelau'],
	'TO':[-21.178986,-175.198242,'Tonga'],
	'TT':[10.691803,-61.222503,'Trinidad and Tobago'],
	'TN':[33.886917,9.537499,'Tunisia'],
	'TR':[38.963745,35.243322,'Turkey'],
	'TM':[38.969719,59.556278,'Turkmenistan'],
	'TC':[21.694025,-71.797928,'Turks and Caicos Islands'],
	'TV':[-7.109535,177.64933,'Tuvalu'],
	'UG':[1.373333,32.290275,'Uganda'],
	'UA':[48.379433,31.16558,'Ukraine'],
	'AE':[23.424076,53.847818,'United Arab Emirates'],
	'GB':[55.378051,-3.435973,'United Kingdom'],
	'US':[37.09024,-95.712891,'United States'],
	'UM':[24.747346,-167.594906,'United States Minor Outlying Islands'],
	'UY':[-32.522779,-55.765835,'Uruguay'],
	'UZ':[41.377491,64.585262,'Uzbekistan'],
	'VU':[-15.376706,166.959158,'Vanuatu'],
	'VE':[6.42375,-66.58973,'Venezuela, Bolivarian Republic of'],
	'VN':[14.058324,108.277199,'Viet Nam'],
	'VG':[18.335765,-64.896335,'Virgin Islands, British'],
	'VI':[18.335765,-64.896335,'Virgin Islands, U.S.'],
	'WF':[-13.768752,-177.156097,'Wallis and Futuna'],
	'EH':[24.215527,-12.885834,'Western Sahara'],
	'YE':[15.552727,48.516388,'Yemen'],
	'ZM':[-13.133897,27.849332,'Zambia'],
	'ZW':[-19.015438,29.154857,'Zimbabwe'],
	'US-AL':[32.318231,-86.902298,'Alabama'],
	'US-AK':[63.588753,-154.493062,'Alaska'],
	'US-AZ':[34.048928,-111.093731,'Arizona'],
	'US-AR':[35.20105,-91.831833,'Arkansas'],
	'US-CA':[36.778261,-119.417932,'California'],
	'US-CO':[39.550051,-105.782067,'Colorado'],
	'US-CT':[41.603221,-73.087749,'Connecticut'],
	'US-DE':[38.910832,-75.52767,'Delaware'],
	'US-FL':[27.664827,-81.515754,'Florida'],
	'US-GA':[32.157435,-82.907123,'Georgia'],
	'US-HI':[19.898682,-155.665857,'Hawaii'],
	'US-ID':[44.068202,-114.742041,'Idaho'],
	'US-IL':[40.633125,-89.398528,'Illinois'],
	'US-IN':[40.551216,-85.602364,'Indiana'],
	'US-IA':[41.878002,-93.097702,'Iowa'],
	'US-KS':[39.011902,-98.484246,'Kansas'],
	'US-KY':[37.839333,-84.270018,'Kentucky'],
	'US-LA':[31.244823,-92.145024,'Louisiana'],
	'US-ME':[45.253783,-69.445469,'Maine'],
	'US-MD':[39.045755,-76.641271,'Maryland'],
	'US-MA':[42.407211,-71.382437,'Massachusetts'],
	'US-MI':[44.314844,-85.602364,'Michigan'],
	'US-MN':[46.729553,-94.6859,'Minnesota'],
	'US-MS':[32.354668,-89.398528,'Mississippi'],
	'US-MO':[37.964253,-91.831833,'Missouri'],
	'US-MT':[46.879682,-110.362566,'Montana'],
	'US-NE':[41.492537,-99.901813,'Nebraska'],
	'US-NV':[38.80261,-116.419389,'Nevada'],
	'US-NH':[43.193852,-71.572395,'New Hampshire'],
	'US-NJ':[40.058324,-74.405661,'New Jersey'],
	'US-NM':[34.97273,-105.032363,'New Mexico'],
	'US-NY':[40.714269,-74.005973,'New York'],
	'US-NC':[35.759573,-79.0193,'North Carolina'],
	'US-ND':[47.551493,-101.002012,'North Dakota'],
	'US-OH':[40.417287,-82.907123,'Ohio'],
	'US-OK':[35.007752,-97.092877,'Oklahoma'],
	'US-OR':[43.804133,-120.554201,'Oregon'],
	'US-PA':[41.203322,-77.194525,'Pennsylvania'],
	'US-RI':[41.580094,-71.477429,'Rhode Island'],
	'US-SC':[33.836081,-81.163724,'South Carolina'],
	'US-SD':[43.969515,-99.901813,'South Dakota'],
	'US-TN':[35.517491,-86.580447,'Tennessee'],
	'US-TX':[31.968599,-99.901813,'Texas'],
	'US-UT':[39.32098,-111.093731,'Utah'],
	'US-VT':[44.558803,-72.577841,'Vermont'],
	'US-VA':[37.431573,-78.656894,'Virginia'],
	'US-WA':[38.895112,-77.036366,'Washington'],
	'US-WV':[38.597626,-80.454903,'West Virginia'],
	'US-WI':[43.78444,-88.787868,'Wisconsin'],
	'US-WY':[43.075968,-107.290284,'Wyoming'],
	'CA-AB':[53.933271,-116.576504,'Alberta'],
	'CA-BC':[53.726668,-127.647621,'British Columbia'],
	'CA-MB':[53.760861,-98.813876,'Manitoba'],
	'CA-NB':[40.486216,-74.451819,'New Brunswick'],
	'CA-NL':[48.402725,-54.672357,'Newfoundland and Labrador'],
	'CA-NT':[72.592678,-121.065779,'Northwest Territories'],
	'CA-NS':[44.692261,-62.657188,'Nova Scotia'],
	'CA-NU':[62.6384669,-95.677068,'Nunavut'],
	'CA-ON':[51.253775,-97.2635952,'Ontario'],
	'CA-PE':[46.219058,-62.915849,'Prince Edward Island'],
	'CA-QC':[52.939916,-73.549136,'Quebec'],
	'CA-SK':[52.939916,-106.450864,'Saskatchewan'],
	'CA-YT':[35.506722,-97.762544,'Yukon']
}

function getCountryName (countryCode) {
  if (countryCodes.hasOwnProperty(countryCode)) {
      return countryCodes[countryCode]; // countryCodes['AF']  returns  [ 33.93911, 67.709953, 'Afghanistan' ]
  } else {
      return countryCode;
  }
}

// countryCodes['AF']  returns  [ 33.93911, 67.709953, 'Afghanistan' ]
// countryCodes['AF'][0]  returns  33.93911