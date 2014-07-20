/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.home', [
  'ui.router',
  'plusOne'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

.provider('cameraService', function() {
      //http://files4.iteriscdn.com/WebApps/VA/SafeTravel/data/local/icons/metadata/icons.cameras.geojsonp
      this.cameras = {
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.456241",
                "37.013108"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "16",
              "id": "85208",
              "jurisdiction": "James River Bridge",
              "route": "US-17",
              "description": "US-17 \/ SB \/ James River Bridge - North End",
              "rtmp_url": "rtmp:\/\/8.15.251.46:1935\/rtplive\/TLJamesRiverBridgeNorthEnd",
              "ios_url": "http:\/\/8.15.251.46:1935\/rtplive\/TLJamesRiverBridgeNorthEnd\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.46:1935\/rtplive\/TLJamesRiverBridgeNorthEnd",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.460869",
                "37.009347"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "15",
              "id": "85220",
              "jurisdiction": "James River Bridge",
              "route": "US-17",
              "description": "US-17 \/SB \/ James River Bridge - .5 Mi. South",
              "rtmp_url": "rtmp:\/\/8.15.251.46:1935\/rtplive\/TLJamesRiverBridge005MiSouth",
              "ios_url": "http:\/\/8.15.251.46:1935\/rtplive\/TLJamesRiverBridge005MiSouth\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.46:1935\/rtplive\/TLJamesRiverBridge005MiSouth",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.473932",
                "36.99872"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "8",
              "id": "85230",
              "jurisdiction": "James River Bridge",
              "route": "US-17",
              "description": "US-17 \/SB \/ James River Bridge - 1 Mi. South",
              "rtmp_url": "rtmp:\/\/8.15.251.46:1935\/rtplive\/TLJamesRiverBridge010MiSouth",
              "ios_url": "http:\/\/8.15.251.46:1935\/rtplive\/TLJamesRiverBridge010MiSouth\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.46:1935\/rtplive\/TLJamesRiverBridge010MiSouth",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.478805",
                "36.99474"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "7",
              "id": "85241",
              "jurisdiction": "James River Bridge",
              "route": "US-17",
              "description": "US-17 \/ SB \/ James River Bridge - 1.5 Mi. South",
              "rtmp_url": "rtmp:\/\/8.15.251.46:1935\/rtplive\/TLJamesRiverBridge015MiSouth",
              "ios_url": "http:\/\/8.15.251.46:1935\/rtplive\/TLJamesRiverBridge015MiSouth\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.46:1935\/rtplive\/TLJamesRiverBridge015MiSouth",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.485384",
                "36.98931"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "5",
              "id": "85254",
              "jurisdiction": "James River Bridge",
              "route": "US-17",
              "description": "US-17 \/ SB \/ James River Bridge - 2.5 Mi. South",
              "rtmp_url": "rtmp:\/\/8.15.251.46:1935\/rtplive\/TLJamesRiverBridge025MiSouth",
              "ios_url": "http:\/\/8.15.251.46:1935\/rtplive\/TLJamesRiverBridge025MiSouth\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.46:1935\/rtplive\/TLJamesRiverBridge025MiSouth",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.493082",
                "36.983032"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "4",
              "id": "85270",
              "jurisdiction": "James River Bridge",
              "route": "US-17",
              "description": "US-17 \/ SB \/ James River Bridge - 3.2 Mi. South",
              "rtmp_url": "rtmp:\/\/8.15.251.46:1935\/rtplive\/TLJamesRiverBridge032MiSouth",
              "ios_url": "http:\/\/8.15.251.46:1935\/rtplive\/TLJamesRiverBridge032MiSouth\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.46:1935\/rtplive\/TLJamesRiverBridge032MiSouth",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.498372",
                "36.978716"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "3",
              "id": "85288",
              "jurisdiction": "James River Bridge",
              "route": "US-17",
              "description": "US-17 \/ SB \/ James River Bridge - 3.9 Mi. South",
              "rtmp_url": "rtmp:\/\/8.15.251.46:1935\/rtplive\/TLJamesRiverBridge039MiSouth",
              "ios_url": "http:\/\/8.15.251.46:1935\/rtplive\/TLJamesRiverBridge039MiSouth\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.46:1935\/rtplive\/TLJamesRiverBridge039MiSouth",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.468208",
                "37.003293"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "Median",
              "mrm": "14",
              "id": "85356",
              "jurisdiction": "James River Bridge",
              "route": "US-17",
              "description": "US-17 \/ Median \/ JRB South Gate",
              "rtmp_url": "rtmp:\/\/8.15.251.46:1935\/rtplive\/TLJamesRiverBridgeSouthGate",
              "ios_url": "http:\/\/8.15.251.46:1935\/rtplive\/TLJamesRiverBridgeSouthGate\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.46:1935\/rtplive\/TLJamesRiverBridgeSouthGate",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.289544444444",
                "36.833961111111"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "8.7",
              "id": "85371",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264 \/ MM  \/ WB \/ I-264 @ Downtown Tunnel WB Tube",
              "rtmp_url": "rtmp:\/\/8.15.251.46:1935\/rtplive\/HamptonRds1212",
              "ios_url": "http:\/\/8.15.251.46:1935\/rtplive\/HamptonRds1212\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.46:1935\/rtplive\/HamptonRds1212",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.08669",
                "38.07589"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "217",
              "id": "85383",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81 \/ MM 217 \/ NB ",
              "rtmp_url": "rtmp:\/\/8.15.251.46:1935\/rtplive\/StauntonCCTV81217N",
              "ios_url": "http:\/\/8.15.251.46:1935\/rtplive\/StauntonCCTV81217N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.46:1935\/rtplive\/StauntonCCTV81217N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.24963",
                "38.99323"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "3",
              "id": "85434",
              "jurisdiction": "Staunton",
              "route": "I-66",
              "description": "I-66 \/ MM 3 \/ WB",
              "rtmp_url": "rtmp:\/\/8.15.251.46:1935\/rtplive\/StauntonCCTV663",
              "ios_url": "http:\/\/8.15.251.46:1935\/rtplive\/StauntonCCTV663\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.46:1935\/rtplive\/StauntonCCTV663",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.6899",
                "38.4638"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "0.98",
              "id": "85450",
              "jurisdiction": "Staunton",
              "route": "US-250",
              "description": " US-250 \/ WB \/ US-250 near US-640",
              "rtmp_url": "rtmp:\/\/8.15.251.46:1935\/rtplive\/StauntonUS250US640",
              "ios_url": "http:\/\/8.15.251.46:1935\/rtplive\/StauntonUS250US640\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.46:1935\/rtplive\/StauntonUS250US640",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.547354",
                "38.358447"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "",
              "id": "85533",
              "jurisdiction": "Staunton",
              "route": "US-33",
              "description": "US-33 at Skyline Drive",
              "rtmp_url": "rtmp:\/\/8.15.251.46:1935\/rtplive\/StauntonUS33Skyline",
              "ios_url": "http:\/\/8.15.251.46:1935\/rtplive\/StauntonUS33Skyline\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.46:1935\/rtplive\/StauntonUS33Skyline",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.5488",
                "36.70255"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "0",
              "id": "85547",
              "jurisdiction": "Portable Camera",
              "route": "",
              "description": "Rte I-95 NB \/ 58W \/ Emporia",
              "rtmp_url": "rtmp:\/\/8.15.251.46:1935\/rtplive\/Trailer10",
              "ios_url": "http:\/\/8.15.251.46:1935\/rtplive\/Trailer10\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.46:1935\/rtplive\/Trailer10",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.69254",
                "37.52079"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "0",
              "id": "85566",
              "jurisdiction": "Portable Camera",
              "route": "",
              "description": "Rt288 South & Rt60 Midlothian",
              "rtmp_url": "rtmp:\/\/8.15.251.46:1935\/rtplive\/Trailer5",
              "ios_url": "http:\/\/8.15.251.46:1935\/rtplive\/Trailer5\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.46:1935\/rtplive\/Trailer5",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.51184",
                "38.13233"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "0",
              "id": "85589",
              "jurisdiction": "Portable Camera",
              "route": "",
              "description": "I-95S Exit 118 in Thornburg, VA",
              "rtmp_url": "rtmp:\/\/8.15.251.46:1935\/rtplive\/Trailer4",
              "ios_url": "http:\/\/8.15.251.46:1935\/rtplive\/Trailer4\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.46:1935\/rtplive\/Trailer4",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.35561",
                "37.63396"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "0",
              "id": "85607",
              "jurisdiction": "Portable Camera",
              "route": "",
              "description": "Pole Green Rd West & Bell Creek Rd, in Mechanicsville",
              "rtmp_url": "rtmp:\/\/8.15.251.46:1935\/rtplive\/Trailer14",
              "ios_url": "http:\/\/8.15.251.46:1935\/rtplive\/Trailer14\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.46:1935\/rtplive\/Trailer14",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.50847",
                "37.24046"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "1",
              "id": "85626",
              "jurisdiction": "ColemanRiverBridge",
              "route": "ColemanBridge",
              "description": "Coleman Bridge Northbound Approach",
              "rtmp_url": "rtmp:\/\/8.15.251.46:1935\/rtplive\/ColemanBridge1",
              "ios_url": "http:\/\/8.15.251.46:1935\/rtplive\/ColemanBridge1\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.46:1935\/rtplive\/ColemanBridge1",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.50532",
                "37.24471"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "2",
              "id": "85639",
              "jurisdiction": "ColemanRiverBridge",
              "route": "ColemanBridge",
              "description": "Coleman Bridge Northbound Departure",
              "rtmp_url": "rtmp:\/\/8.15.251.46:1935\/rtplive\/ColemanBridge2",
              "ios_url": "http:\/\/8.15.251.46:1935\/rtplive\/ColemanBridge2\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.46:1935\/rtplive\/ColemanBridge2",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.501247",
                "37.249692"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "3",
              "id": "85658",
              "jurisdiction": "ColemanRiverBridge",
              "route": "ColemanBridge",
              "description": "Coleman Bridge \/ NB \/ Toll Plaza Entrance",
              "rtmp_url": "rtmp:\/\/8.15.251.46:1935\/rtplive\/ColemanBridge3",
              "ios_url": "http:\/\/8.15.251.46:1935\/rtplive\/ColemanBridge3\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.46:1935\/rtplive\/ColemanBridge3",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.500753",
                "37.250332"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "4",
              "id": "85674",
              "jurisdiction": "ColemanRiverBridge",
              "route": "ColemanBridge",
              "description": "Coleman Bridge \/ NB \/ Toll Plaza Exit",
              "rtmp_url": "rtmp:\/\/8.15.251.46:1935\/rtplive\/ColemanBridge4",
              "ios_url": "http:\/\/8.15.251.46:1935\/rtplive\/ColemanBridge4\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.46:1935\/rtplive\/ColemanBridge4",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.317204",
                "36.855261"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "5",
              "id": "85699",
              "jurisdiction": "Hampton Roads",
              "route": "US-58",
              "description": "EB \/ Midtown Tunnel Entrance",
              "rtmp_url": "rtmp:\/\/8.15.251.46:1935\/rtplive\/MidtownTunnelEntranceEB",
              "ios_url": "http:\/\/8.15.251.46:1935\/rtplive\/MidtownTunnelEntranceEB\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.46:1935\/rtplive\/MidtownTunnelEntranceEB",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.309694",
                "36.861338"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "6",
              "id": "85715",
              "jurisdiction": "Hampton Roads",
              "route": "US-58",
              "description": "WB \/ Midtown Tunnel Entrance",
              "rtmp_url": "rtmp:\/\/8.15.251.46:1935\/rtplive\/MidtownTunnelEntranceWB",
              "ios_url": "http:\/\/8.15.251.46:1935\/rtplive\/MidtownTunnelEntranceWB\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.46:1935\/rtplive\/MidtownTunnelEntranceWB",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.04536",
                "37.49775"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "0",
              "id": "85731",
              "jurisdiction": "Portable Camera",
              "route": "",
              "description": "I-64E MP 213",
              "rtmp_url": "rtmp:\/\/8.15.251.46:1935\/rtplive\/Trailer16",
              "ios_url": "http:\/\/8.15.251.46:1935\/rtplive\/Trailer16\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.46:1935\/rtplive\/Trailer16",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.51172",
                "36.967566"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "1",
              "id": "92616",
              "jurisdiction": "James River Bridge",
              "route": "US-17",
              "description": "US-17 \/ James River Bridge - South End",
              "rtmp_url": "rtmp:\/\/8.15.251.46:1935\/rtplive\/TLJamesRiverBridgeSouthEnd",
              "ios_url": "http:\/\/8.15.251.46:1935\/rtplive\/TLJamesRiverBridgeSouthEnd\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.46:1935\/rtplive\/TLJamesRiverBridgeSouthEnd",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.29839",
                "39.009963"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "301.7",
              "id": "93215",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81 \/ MM 301.7 \/ SB",
              "rtmp_url": "rtmp:\/\/8.15.251.46:1935\/rtplive\/StauntonCCTV813017",
              "ios_url": "http:\/\/8.15.251.46:1935\/rtplive\/StauntonCCTV813017\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.46:1935\/rtplive\/StauntonCCTV813017",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.506069",
                "36.972444"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "2",
              "id": "93271",
              "jurisdiction": "James River Bridge",
              "route": "US-17",
              "description": "US-17 \/ SB \/ James River Bridge - 4.5 Mi. South",
              "rtmp_url": "rtmp:\/\/8.15.251.46:1935\/rtplive\/TLJamesRiverBridge045MiSouth",
              "ios_url": "http:\/\/8.15.251.46:1935\/rtplive\/TLJamesRiverBridge045MiSouth\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.46:1935\/rtplive\/TLJamesRiverBridge045MiSouth",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.15495",
                "39.1661"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "313",
              "id": "85214",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 313  \/  NB  \/  Rt. 17\/522, Winchester VA 22602",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV81313N",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV81313N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV81313N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.137282",
                "39.184665"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "315",
              "id": "85224",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 315  \/  NB  \/   Winchester VA 22603",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV81315N",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV81315N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV81315N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.10058",
                "39.25673"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "321",
              "id": "85233",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 321  \/  NB  \/ Clearbrook VA 22624",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV81321N",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV81321N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV81321N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.08423",
                "39.29083"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "323",
              "id": "85247",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 323  \/  NB  \/  Clearbrook VA 22624",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV81323N",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV81323N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV81323N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.79941",
                "37.81988"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "111.02",
              "id": "85260",
              "jurisdiction": "Staunton",
              "route": "US-220",
              "description": "US-220  \/  MM Rte-60  \/  NB  \/ Clifton Forge, VA ",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/StauntonRT220RT60",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/StauntonRT220RT60\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/StauntonRT220RT60",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.45479",
                "38.03395"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "98.34",
              "id": "85277",
              "jurisdiction": "Staunton",
              "route": "US-250",
              "description": "US-250  \/  Route 20  \/  EB  ",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV250PAMTOPE",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV250PAMTOPE\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV250PAMTOPE",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.43516",
                "38.13226"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "145.52",
              "id": "85294",
              "jurisdiction": "Staunton",
              "route": "US-29",
              "description": "US-29  \/  Airport  \/  NB ",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV29AIRPORTN",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV29AIRPORTN\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV29AIRPORTN",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.52838",
                "38.02714"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "135.63",
              "id": "85307",
              "jurisdiction": "Staunton",
              "route": "US-29",
              "description": "US-29  \/  Fontaine Avenue  \/  NB  ",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV29FontaineN",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV29FontaineN\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV29FontaineN",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.49129",
                "38.06209"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "139.71",
              "id": "85325",
              "jurisdiction": "Staunton",
              "route": "US-29",
              "description": "US-29  \/  Hydraulic Road  \/  NB ",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV29HYDRAULICN",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV29HYDRAULICN\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV29HYDRAULICN",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.4735",
                "38.08192"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "141.4",
              "id": "85332",
              "jurisdiction": "Staunton",
              "route": "US-29",
              "description": "US-29  \/  Rio Road  \/  NB  ",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV29RION",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV29RION\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV29RION",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.50391",
                "38.05693"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "138.87",
              "id": "85350",
              "jurisdiction": "Staunton",
              "route": "US-29",
              "description": "US-29  \/  Barracks Road  \/  NB  ",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV29BARRACKSN",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV29BARRACKSN\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV29BARRACKSN",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.78132",
                "38.72467"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "207.58",
              "id": "85366",
              "jurisdiction": "Staunton",
              "route": "US-29",
              "description": "US-29  \/  MM Rte-15\/Rte-17  \/ EB   \/  Warrenton Va",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/StauntonRT2915EBYPASSRT17",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/StauntonRT2915EBYPASSRT17\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/StauntonRT2915EBYPASSRT17",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.52502",
                "38.0481"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "137.12",
              "id": "85379",
              "jurisdiction": "Staunton",
              "route": "US-29",
              "description": "US-29  \/  MM 137.12  \/  SB  \/  2366 Ivy Road",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV29IVYS",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV29IVYS\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV29IVYS",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.78689",
                "38.68583"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "204.82",
              "id": "85392",
              "jurisdiction": "Staunton",
              "route": "US-29",
              "description": "US-29  \/  MM Business 29\/Rte-17  \/ SB  \/  Warrenton Va",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/StauntonRT29RT17BUS29",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/StauntonRT29RT17BUS29\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/StauntonRT29RT17BUS29",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.68207",
                "38.7774"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "214.28",
              "id": "85416",
              "jurisdiction": "Staunton",
              "route": "US-29",
              "description": "US-29  \/  MM Rte-15\/Rte-215  \/  NB  \/  Warrenton Va",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/StauntonRT2915RT215",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/StauntonRT2915RT215\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/StauntonRT2915RT215",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.76694",
                "38.73768"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "208.83",
              "id": "85433",
              "jurisdiction": "Staunton",
              "route": "US-29",
              "description": "US-29  \/  MM Rte-15\/Rte-605  \/ NB   \/  Warrenton Va",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/StauntonRT2915RT605",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/StauntonRT2915RT605\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/StauntonRT2915RT605",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.65901",
                "37.95644"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "126.26",
              "id": "85448",
              "jurisdiction": "Staunton",
              "route": "US-29",
              "description": "US-29  \/  MM Rte-692  \/  NB  \/  North Garden",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/StauntonRT29RT692",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/StauntonRT29RT692\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/StauntonRT29RT692",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.19792",
                "39.19261"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "5.45",
              "id": "85461",
              "jurisdiction": "Staunton",
              "route": "VA-37",
              "description": "VA-37  \/  MM Rte-50  \/  EB  \/  Winchester Va",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/StauntonRT37RT50",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/StauntonRT37RT50\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/StauntonRT37RT50",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.495336666667",
                "39.092045"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "0.97",
              "id": "85473",
              "jurisdiction": "Staunton",
              "route": "VA-55",
              "description": "VA-55  \/ Route 55  \/ EB  \/  RT. 55 VA & WVA LINE",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTVVAR55E",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTVVAR55E\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTVVAR55E",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.30725",
                "39.44067"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "159.58",
              "id": "85484",
              "jurisdiction": "Staunton",
              "route": "US-522",
              "description": "US-522  \/  MM WVA Line  \/  WB  \/ Cross Junction, Va",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/StauntonRT522WV",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/StauntonRT522WV\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/StauntonRT522WV",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.611675",
                "38.804011111111"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "MEDIAN",
              "mrm": "42.2",
              "id": "85495",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66 \/ MM 42.2 \/ MEDIAN \/ I-66 W\/W Median Mile Marker 42.2",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV0003",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV0003\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV0003",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.59846111",
                "38.79936667"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "MEDIAN",
              "mrm": "43",
              "id": "85515",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66 \/ MM 43 \/ MEDIAN \/ I-66 W\/W Median Mile Marker 43.0",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV0004",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV0004\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV0004",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.58589722",
                "38.79803333"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "MEDIAN",
              "mrm": "43.5",
              "id": "85530",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66 \/ MM 43.5 \/ MEDIAN \/ I-66 W\/W Median Mile Marker 43.5",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV0005",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV0005\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV0005",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.57154722",
                "38.79793611"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "MEDIAN",
              "mrm": "44.1",
              "id": "85545",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66 \/ MM 44.1 \/ MEDIAN \/ I-66 W\/W Median Mile Marker 44.1",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV0006",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV0006\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV0006",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.56569167",
                "38.79836111"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "MEDIAN",
              "mrm": "44.9",
              "id": "85563",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66 \/ MM 44.9 \/ MEDIAN \/ I-66 W\/W Median Mile Marker 44.9",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV0007",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV0007\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV0007",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.55634167",
                "38.79897222"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "MEDIAN",
              "mrm": "45.4",
              "id": "85579",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66 \/ MM 45.4 \/ MEDIAN \/ I-66 W\/W Median Mile Marker 45.4",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV0008",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV0008\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV0008",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.532544444444",
                "38.800566666667"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "MEDIAN",
              "mrm": "46.2",
              "id": "85595",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66 \/ MM 46.2 \/ MEDIAN \/ I-66 W\/W Median Mile Marker 46.2",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV0009",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV0009\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV0009",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.532964",
                "38.800278"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "46.6",
              "id": "85611",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66 \/ MM 46.6 \/ EB \/ Exit 47, Route 234 - Sudley Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV0010",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV0010\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV0010",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.145905555556",
                "38.882102777778"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "69.8",
              "id": "85627",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66 \/ MM 69.8 \/ EB \/ 69.8 Mile Marker N. Ohio St Overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV233",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV233\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV233",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.139083333333",
                "38.879813888889"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "70.3",
              "id": "85643",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66 \/ MM 70.3 \/ EB \/ 70.3 Mile Marker Patrick Henry Drive Overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV235",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV235\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV235",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.13336962",
                "38.87919845"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "70.6",
              "id": "85659",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66 \/ MM 70.6 \/ EB \/ 70.6 Mile Marker Custis Trail",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV237",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV237\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV237",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.13345603",
                "38.87952525"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "70.6",
              "id": "85671",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66 \/ MM 70.6 \/ WB \/ 70.6 Mile Marker Custis Trail",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV335",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV335\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV335",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.138507",
                "38.880243"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "70.3",
              "id": "85686",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66\/ MM 70.3\/ WB\/ 70.3 Mile Marker Patrick Henry Drive Overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV337",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV337\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV337",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.043882",
                "38.87137"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "10",
              "id": "85701",
              "jurisdiction": "Fairfax",
              "route": "I-395",
              "description": "I-395 \/ MM 10 \/ NB \/ GW PKWY-14TH ST BRIDGE - Facing North",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV0715",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV0715\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV0715",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.49868333",
                "38.33268333"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "132",
              "id": "85718",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95 \/ MM 130 \/ SB \/ I-95S Rt 3 at Rappahannock River Bridge",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV4040",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV4040\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV4040",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.2878",
                "36.8357"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "7.95",
              "id": "85738",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264 \/ MM\/   Median \/ I-264 @ Downtown Tunnel (East Tower Cam)",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/HamptonRds1213",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/HamptonRds1213\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/HamptonRds1213",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.2891",
                "36.8339"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "7.9",
              "id": "85753",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264 \/ MM  \/ EB \/ I-264 @ Downtown Tunnel EB Tube",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/HamptonRds1201",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/HamptonRds1201\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/HamptonRds1201",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.31757",
                "37.00036"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "268.5",
              "id": "85783",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64 \/ MM  \/ EB \/ I-64 @ HRBT EB (North Island Cam)",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/HamptonRdsHBRT54",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/HamptonRdsHBRT54\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/HamptonRdsHBRT54",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.30328",
                "36.98481"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "271",
              "id": "85797",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64 \/ MM  \/ WB \/ I-64 @ HRBT WB (South Island Cam)",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/HamptonRdsHBRT55",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/HamptonRdsHBRT55\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/HamptonRdsHBRT55",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.32527",
                "37.01375"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "Median",
              "mrm": "269",
              "id": "85814",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64 \/ MM  \/ Median \/ I-64 @ HRBT (Mallory Inspection Station)",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/HamptonRdsHBRT51",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/HamptonRdsHBRT51\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/HamptonRdsHBRT51",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.410436111111",
                "36.958275"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "7",
              "id": "85831",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664 \/ MM  \/ SB \/ I-664 @ MMBT SB Tube 2nd Cam In",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/HamptonRdsMMBT516",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/HamptonRdsMMBT516\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/HamptonRdsMMBT516",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.410844444445",
                "36.959633333333"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "6.5",
              "id": "85847",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664 \/ MM  \/ NB \/ I-664 @ MMBT (Tower Cam)",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/HamptonRdsMMBT515",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/HamptonRdsMMBT515\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/HamptonRdsMMBT515",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.404797222222",
                "36.947269444444"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "10.5",
              "id": "85879",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664 \/ MM  \/ NB \/ I-664 @ MMBT Northbound Approach",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/HamptonRdsMMBT513",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/HamptonRdsMMBT513\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/HamptonRdsMMBT513",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.45869",
                "37.19925"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "64.1",
              "id": "85888",
              "jurisdiction": "Richmond",
              "route": "I-85",
              "description": "I-85  \/  MM 64.1  \/  SB  \/  Rte 1 (exit63B)",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/RichmondCS085SB0641",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/RichmondCS085SB0641\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/RichmondCS085SB0641",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.44206",
                "37.20009"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "64.9",
              "id": "85903",
              "jurisdiction": "Richmond",
              "route": "I-85",
              "description": "I-85  \/  MM 64.9  \/  NB  \/  Dupuy Road",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/RichmondCS085NB0649",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/RichmondCS085NB0649\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/RichmondCS085NB0649",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.390061",
                "37.218817"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "68.5",
              "id": "85916",
              "jurisdiction": "Richmond",
              "route": "I-85",
              "description": "I-85  \/  MM 68.5  \/  NB  \/  B ovrps",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/RichmondCS085NB0685",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/RichmondCS085NB0685\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/RichmondCS085NB0685",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.39961",
                "37.325499"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "59.3",
              "id": "85933",
              "jurisdiction": "Richmond",
              "route": "I-95",
              "description": "I-95  \/  MM 59.3  \/  NB  \/  Ruffin Mill",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/RichmondCS095NB0593",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/RichmondCS095NB0593\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/RichmondCS095NB0593",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.42587",
                "37.51752"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "73.4",
              "id": "85948",
              "jurisdiction": "Richmond",
              "route": "I-95",
              "description": "I-95  \/  MM 73.4  \/  NB  \/  Maury",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/RichmondCS095NB0734",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/RichmondCS095NB0734\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/RichmondCS095NB0734",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.36886",
                "38.23335"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "153.42",
              "id": "85963",
              "jurisdiction": "Staunton",
              "route": "US-29",
              "description": "US-29  \/  Route 33  \/  NB  ",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV2933N",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV2933N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/StauntonCCTV2933N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.38902611",
                "37.04187306"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "4",
              "id": "85978",
              "jurisdiction": "City of Hampton ",
              "route": "Mercury Blvd",
              "description": "Mercury Blvd. & Coliseum Dr.",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton1",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/CityofHampton1\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton1",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.42701167",
                "37.05983444"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "1",
              "id": "85993",
              "jurisdiction": "City of Hampton ",
              "route": "Big Bethel Rd",
              "description": "Big Bethel Rd. & HRCP",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton2",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/CityofHampton2\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton2",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.36254583",
                "37.03446278"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "1",
              "id": "86009",
              "jurisdiction": "City of Hampton ",
              "route": "Armistead Ave",
              "description": "Armistead Ave. & LaSalle Ave.",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton3",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/CityofHampton3\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton3",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.39539278",
                "37.093135"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "1",
              "id": "86023",
              "jurisdiction": "City of Hampton ",
              "route": "Magruder Blvd",
              "description": "Magruder Blvd. & Semple Farm Rd.",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton4",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/CityofHampton4\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton4",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.33091583",
                "37.0243075"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "1",
              "id": "86038",
              "jurisdiction": "City of Hampton ",
              "route": "Settlerslanding Rd",
              "description": "Settlerslanding Rd. & Tyler St.",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton5",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/CityofHampton5\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton5",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.40065139",
                "37.06049306"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "2",
              "id": "86054",
              "jurisdiction": "City of Hampton ",
              "route": "Magruder Blvd",
              "description": "Magruder Blvd. & HRCP",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton6",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/CityofHampton6\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton6",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.44156222",
                "37.06216972"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "1",
              "id": "86069",
              "jurisdiction": "City of Hampton ",
              "route": "HRCP",
              "description": "HRCP & Micale Ave.",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton7",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/CityofHampton7\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton7",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.39924778",
                "37.03775389"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "1",
              "id": "86084",
              "jurisdiction": "City of Hampton ",
              "route": "Power Plant",
              "description": "Power Plant",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton8",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/CityofHampton8\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton8",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.37727",
                "37.04431556"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "5",
              "id": "86099",
              "jurisdiction": "City of Hampton ",
              "route": "Mercury Blvd",
              "description": "Mercury Blvd. & Armistead Ave.",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton12",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/CityofHampton12\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton12",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.3634825",
                "37.04420583"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "6",
              "id": "86113",
              "jurisdiction": "City of Hampton ",
              "route": "Mercury Blvd",
              "description": "Mercury Blvd. & LaSalle Ave.",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton13",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/CityofHampton13\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton13",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.34853694",
                "37.04353889"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "7",
              "id": "86128",
              "jurisdiction": "City of Hampton ",
              "route": "Mercury Blvd",
              "description": "Mercury Blvd. & King St.",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton14",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/CityofHampton14\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton14",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.40899361",
                "37.03742361"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "3",
              "id": "86144",
              "jurisdiction": "City of Hampton ",
              "route": "Mercury Blvd",
              "description": "Mercury Blvd. & Aberdeen Rd.",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton15",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/CityofHampton15\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton15",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.42078972",
                "37.03093472"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "2",
              "id": "86159",
              "jurisdiction": "City of Hampton ",
              "route": "Mercury Blvd",
              "description": "Mercury Blvd. & Big Bethel Rd.",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton16",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/CityofHampton16\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton16",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.43510333",
                "37.02375972"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "1",
              "id": "86175",
              "jurisdiction": "City of Hampton ",
              "route": "Mercury Blvd",
              "description": "Mercury Blvd. & Orcutt Ave.",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton17",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/CityofHampton17\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton17",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.39271528",
                "37.09360056"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "2",
              "id": "86190",
              "jurisdiction": "City of Hampton ",
              "route": "CMDR Shepard Blvd",
              "description": "CMDR Shepard Blvd. & Wythe Crk. Rd.",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton18",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/CityofHampton18\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton18",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.3840775",
                "37.03565889"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "2",
              "id": "86205",
              "jurisdiction": "City of Hampton ",
              "route": "Colliseum Dr",
              "description": "Coliseum Dr. & HRCC North",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton20",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/CityofHampton20\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton20",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.37786",
                "37.03673722"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "1",
              "id": "86221",
              "jurisdiction": "City of Hampton ",
              "route": "Colliseum Dr",
              "description": "Coliseum Dr. & Convention Ctr. Blvd.",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton21",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/CityofHampton21\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton21",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.37506361",
                "37.04000222"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "2",
              "id": "86237",
              "jurisdiction": "City of Hampton ",
              "route": "Armistead Ave",
              "description": "Armistead Ave. & Convention Ctr. Blvd.",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton22",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/CityofHampton22\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton22",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.31735556",
                "37.05908222"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "1",
              "id": "86262",
              "jurisdiction": "City of Hampton ",
              "route": "Foxhill Rd",
              "description": "Foxhill Rd. & Woodland Rd.",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton23",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/CityofHampton23\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton23",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.40408222",
                "37.01895361"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "1",
              "id": "86277",
              "jurisdiction": "City of Hampton ",
              "route": "Aberdeen Rd",
              "description": "Aberdeen Rd. & Briarfield Rd.",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton33",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/CityofHampton33\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton33",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.38512944",
                "37.07972278"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "4",
              "id": "86289",
              "jurisdiction": "City of Hampton ",
              "route": "Armistead Ave",
              "description": "Armistead Ave. & Commander Shep. Blvd.",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton34",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/CityofHampton34\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton34",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.38574639",
                "37.05912167"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "3",
              "id": "86307",
              "jurisdiction": "City of Hampton ",
              "route": "Armistead Ave",
              "description": "Armistead Ave. & HRCP",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton35",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/CityofHampton35\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton35",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.32715889",
                "37.05686417"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "2",
              "id": "86321",
              "jurisdiction": "City of Hampton ",
              "route": "Foxhill Rd",
              "description": "Foxhill Rd. & Willow Oaks Blvd.",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton37",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/CityofHampton37\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton37",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.31824417",
                "37.02139333"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "9",
              "id": "86336",
              "jurisdiction": "City of Hampton ",
              "route": "Mercury Blvd",
              "description": "Mercury Blvd. & Mallory St.",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton38",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/CityofHampton38\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton38",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.32321694",
                "37.02754417"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "8",
              "id": "86353",
              "jurisdiction": "City of Hampton ",
              "route": "Mercury Blvd",
              "description": "Mercury Blvd. & Woodland Rd.",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton39",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/CityofHampton39\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton39",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.32174611",
                "37.03325694"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "1",
              "id": "86365",
              "jurisdiction": "City of Hampton ",
              "route": "Pembroke",
              "description": "Pembroke Ave. & Woodland Rd.",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton40",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/CityofHampton40\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton40",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.36304306",
                "37.0250475"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "1",
              "id": "86376",
              "jurisdiction": "City of Hampton ",
              "route": "Settlerslanding Rd",
              "description": "Settlerslanding Rd. & LaSalle Ave.",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton41",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/CityofHampton41\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/CityofHampton41",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.13018",
                "38.85966"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "0",
              "id": "86393",
              "jurisdiction": "Staunton",
              "route": "US-522",
              "description": "US-522 \/ NB \/ US-522 at Chester Gap Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/StauntonUS522ChesterGapRd",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/StauntonUS522ChesterGapRd\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/StauntonUS522ChesterGapRd",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.84707",
                "39.11562"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "Median",
              "mrm": "19.08",
              "id": "86409",
              "jurisdiction": "Staunton",
              "route": "VA-7",
              "description": "VA-7  \/  MM Rte-601  \/ Median \/  265 Harry Byrd Hwy Bluemont, Va. 20135",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/StauntonRT7RT601",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/StauntonRT7RT601\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/StauntonRT7RT601",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.186",
                "38.9011"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "67",
              "id": "86419",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 49  \/  WB  \/  towards Rte 267 west on the right shoulder just after Rte.703 (Haycock Rd.) overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxPCCTV19",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxPCCTV19\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxPCCTV19",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.2202",
                "38.88836"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "49",
              "id": "86439",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495  \/  MM 46  \/  SB  \/  on left side before the merge area for ramp from I-66 W",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxPCCTV05",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxPCCTV05\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxPCCTV05",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.043882",
                "38.87137"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "10.1",
              "id": "86453",
              "jurisdiction": "Fairfax",
              "route": "I-395",
              "description": "I-395 \/ MM 10 \/ NB \/ GW PKWY-14TH ST BRIDGE - Facing South",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV0725",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV0725\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV0725",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.43271944",
                "38.85017778"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "2",
              "id": "86467",
              "jurisdiction": "Fairfax",
              "route": "VA-28",
              "description": "VA 28 \/ MM 53 \/ NB \/ Rt 28N North of I-66",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV4000",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV4000\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV4000",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.43943333",
                "38.89704167"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "3",
              "id": "86480",
              "jurisdiction": "Fairfax",
              "route": "VA-28",
              "description": "VA 28 \/ MM 53 \/ NB \/ Rt 28N at Rt 50",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV4005",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV4005\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV4005",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.43029167",
                "38.91521944"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "4",
              "id": "86495",
              "jurisdiction": "Fairfax",
              "route": "VA-28",
              "description": "VA 28 \/ MM 53 \/ NB \/ Rt 28N at A&S Museum Pkwy",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV4010",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV4010\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV4010",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.429575",
                "38.94808333"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "5",
              "id": "86510",
              "jurisdiction": "Fairfax",
              "route": "VA-28",
              "description": "VA 28 \/ MM 53 \/ NB \/ Rt 28N at Frying Pan Rd.",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV4015",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV4015\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV4015",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.43157222",
                "38.98940278"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "6",
              "id": "86525",
              "jurisdiction": "Fairfax",
              "route": "VA-28",
              "description": "VA 28 \/ MM 53 \/ NB \/ Rt 28N at Sterling Blvd",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV4020",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV4020\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV4020",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.43498333",
                "39.00487222"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "7",
              "id": "86536",
              "jurisdiction": "Fairfax",
              "route": "VA-28",
              "description": "VA 28 \/ MM 53 \/ NB \/ Rt 28N at W. Church Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV4025",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV4025\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV4025",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.43029167",
                "39.04528889"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "44",
              "id": "86567",
              "jurisdiction": "Fairfax",
              "route": "VA-7",
              "description": "VA 7 \/ MM 58 \/ NB \/ Rt 7N at Rt 28N Overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV4035",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV4035\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV4035",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.434568",
                "37.202171"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "65.6",
              "id": "86582",
              "jurisdiction": "Richmond",
              "route": "I-85",
              "description": "I-85 \/ SB \/ MM 65.6 \/ Ft. Lee Rd Overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/RichmondCS085SB0656",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/RichmondCS085SB0656\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/RichmondCS085SB0656",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.410659",
                "37.206839"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "",
              "mrm": "67.1",
              "id": "86598",
              "jurisdiction": "Richmond",
              "route": "I-85",
              "description": "I-85 \/ SB \/ MM 67.1 \/ Baylors Lane Overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/RichmondCS085SB0671",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/RichmondCS085SB0671\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/RichmondCS085SB0671",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.301",
                "38.8257"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "0",
              "id": "86612",
              "jurisdiction": "Fairfax",
              "route": "VA-653",
              "description": "Roberts at Braddock WB",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3955",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3955\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3955",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.185",
                "38.807"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "0",
              "id": "86627",
              "jurisdiction": "Fairfax",
              "route": "VA-617",
              "description": "VA-617 \/ NB \/ Backlick Rd at Edsall Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3595",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3595\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3595",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.18668",
                "38.81212"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "0",
              "id": "86643",
              "jurisdiction": "Fairfax",
              "route": "VA-620",
              "description": "Braddock Rd & Backlick Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxPCCTV24",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxPCCTV24\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxPCCTV24",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.288",
                "38.8265"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "0",
              "id": "86657",
              "jurisdiction": "Fairfax",
              "route": "VA-652",
              "description": "Burke Station at Braddock EB",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3970",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3970\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3970",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.288",
                "38.8265"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "0",
              "id": "86671",
              "jurisdiction": "Fairfax",
              "route": "VA-652",
              "description": "Burke Station at Braddock NB",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3960",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3960\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3960",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.288",
                "38.8265"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "0",
              "id": "86685",
              "jurisdiction": "Fairfax",
              "route": "VA-652",
              "description": "Burke Station at Braddock SB",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3965",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3965\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3965",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.288",
                "38.8265"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "0",
              "id": "86697",
              "jurisdiction": "Fairfax",
              "route": "VA-652",
              "description": "Burke Station at Braddock WB",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3975",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3975\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3975",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.4357",
                "38.39759"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "138.6",
              "id": "86712",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95 \/ MM 138.6 \/ SB",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo4085",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo4085\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo4085",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.4021",
                "38.47431"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "144.4",
              "id": "86725",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95 \/ SB \/ MM 144.4",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo4105",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo4105\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo4105",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.3931",
                "38.48512"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "145.2",
              "id": "86736",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95 \/ SB \/ MM 145.2",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo4110",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo4110\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo4110",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.3705",
                "38.52268"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "146.2",
              "id": "86747",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95 \/ SB \/ MM 146.2",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo4120",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo4120\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo4120",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.6652",
                "38.78241"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "301",
              "id": "86770",
              "jurisdiction": "Fairfax",
              "route": "US-29",
              "description": "US-29 at James Madison",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3520",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3520\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3520",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.2273",
                "38.86662"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "0",
              "id": "86782",
              "jurisdiction": "Fairfax",
              "route": "VA-650",
              "description": "Gallows Rd at Yorktowne Cntr",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3570",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3570\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3570",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.255",
                "38.6757"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "0",
              "id": "86794",
              "jurisdiction": "Fairfax",
              "route": "VA-123",
              "description": "Gordon Blvd at Old Bridge Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3625",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3625\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3625",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.3588",
                "38.53222"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "149",
              "id": "86806",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95 \/ SB \/ MM 149",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo4130",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo4130\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo4130",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.504",
                "38.30185"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "130.8",
              "id": "86817",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95 \/ SB \/MM 130.8",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo4060",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo4060\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo4060",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.1763",
                "38.78957"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "57",
              "id": "86830",
              "jurisdiction": "Fairfax",
              "route": "I-395",
              "description": "I-395 \/ MM 57 \/ SB \/ I-95 and I-395 Split",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo2052",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo2052\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo2052",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.4918",
                "38.33984"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "133",
              "id": "86842",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95 at  EXIT133",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo4155",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo4155\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo4155",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.1133",
                "38.80171"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "174",
              "id": "86866",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-95 \/ MM 174 \/ SB \/ I-495 Inner Loop",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo1005",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo1005\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo1005",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.4414",
                "38.83869"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "303",
              "id": "86877",
              "jurisdiction": "Fairfax",
              "route": "US-29",
              "description": "US-29 at Machen Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3525",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3525\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3525",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.2629",
                "38.87216"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "304",
              "id": "86889",
              "jurisdiction": "Fairfax",
              "route": "US-29",
              "description": "US-29 at Nutley st",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3530",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3530\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3530",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.527",
                "38.81843"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "302",
              "id": "86900",
              "jurisdiction": "Fairfax",
              "route": "US-29",
              "description": "US-29 at Sudley Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3545",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3545\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3545",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.1744",
                "38.86958"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "0",
              "id": "86909",
              "jurisdiction": "Fairfax",
              "route": "US-50",
              "description": "US-50 at Annandale Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3535",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3535\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3535",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.406",
                "38.8842"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "0",
              "id": "86919",
              "jurisdiction": "Fairfax",
              "route": "US-50",
              "description": "US-50 at Stringfellow Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3635",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3635\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3635",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.2533",
                "38.67224"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "0",
              "id": "86930",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "VA-123  at HOV Ramp",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo0835",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo0835\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo0835",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.267",
                "38.7515"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "0",
              "id": "86940",
              "jurisdiction": "Fairfax",
              "route": "VA-286",
              "description": "VA-286 at Huntsman Blvd",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3640",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3640\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3640",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.3403",
                "38.81997"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "0",
              "id": "86949",
              "jurisdiction": "Fairfax",
              "route": "VA-286",
              "description": "VA-286 at Popes Head Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3590",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3590\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3590",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.327",
                "38.7861"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "0",
              "id": "86959",
              "jurisdiction": "Fairfax",
              "route": "VA-286",
              "description": "VA-286 at VA-123",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3585",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3585\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3585",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.1363",
                "38.78386"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "0",
              "id": "86969",
              "jurisdiction": "Fairfax",
              "route": "VA-644",
              "description": "VA-644 at S Van Dorn St",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3560",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3560\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3560",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.3642",
                "39.01005"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "0",
              "id": "86979",
              "jurisdiction": "Fairfax",
              "route": "VA-7",
              "description": "VA-7 at 7100",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3515",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3515\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3515",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.499",
                "39.0801"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "0",
              "id": "86992",
              "jurisdiction": "Fairfax",
              "route": "VA-7",
              "description": "VA-7 at Belmont Ridge Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3580",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3580\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3580",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.19",
                "38.8946"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "0",
              "id": "87001",
              "jurisdiction": "Fairfax",
              "route": "VA-7",
              "description": "VA-7 at Haycock Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3615",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3615\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3615",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.2184",
                "38.81206"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "54",
              "id": "87012",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495 \/ MM 54 \/ SB \/ I-495 at Braddock Rd SB",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo1032",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo1032\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo1032",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.2216",
                "38.81897"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "54",
              "id": "87019",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495 \/ MM 54 \/ NB \/ I-495 at Braddock Rd NB",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo1039",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo1039\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo1039",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.519",
                "38.9292"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "0",
              "id": "87033",
              "jurisdiction": "Fairfax",
              "route": "US-50",
              "description": "John Mosby Highway at Loudoun Co Parkway",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3645",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3645\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3645",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.3183",
                "38.97811"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "0",
              "id": "87043",
              "jurisdiction": "Fairfax",
              "route": "VA-7",
              "description": "Leesburg Pk at Baron Cameron",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3510",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3510\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3510",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.4567",
                "39.01083"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "0",
              "id": "87054",
              "jurisdiction": "Fairfax",
              "route": "VA-607",
              "description": "Loudoun Pkwy at Waxpool",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3555",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3555\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3555",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.277",
                "38.6773"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "0",
              "id": "87062",
              "jurisdiction": "Fairfax",
              "route": "VA-641",
              "description": "Old Bridge Rd at Minnieville Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3620",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3620\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3620",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.317",
                "38.8275"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "0",
              "id": "87074",
              "jurisdiction": "Fairfax",
              "route": "VA-123",
              "description": "OX at Braddock NB",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3900",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3900\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3900",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.317",
                "38.8275"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "0",
              "id": "87084",
              "jurisdiction": "Fairfax",
              "route": "VA-123",
              "description": "OX at Braddock SB",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3905",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3905\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3905",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.317",
                "38.8275"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "0",
              "id": "87095",
              "jurisdiction": "Fairfax",
              "route": "VA-123",
              "description": "OX at Braddock WB",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3915",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3915\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3915",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.3162",
                "38.82717"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "0",
              "id": "87106",
              "jurisdiction": "Fairfax",
              "route": "VA-123",
              "description": "Ox Rd at Braddock Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3540",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3540\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3540",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.2175",
                "38.83456"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "52",
              "id": "87117",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495 \/ MM 52 \/ NB \/ I-495 at Rt 236",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo1043",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo1043\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo1043",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.2201",
                "38.87175"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "49.5",
              "id": "87127",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495 \/ MM 49.5 \/ NB \/ I-495 at US-29 ramps",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo1067",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo1067\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo1067",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.2205",
                "38.86002"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "50",
              "id": "87137",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495 \/ MM 50 \/ SB \/ I-495 at US-50",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo1069",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo1069\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo1069",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.2167",
                "38.92223"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "46",
              "id": "87146",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495\/ MM 46 \/ NB \/ I-495 at VA-123",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo1053",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo1053\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo1053",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.2182",
                "38.91505"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "47.5",
              "id": "87156",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495 \/ MM 47.5 \/ SB \/ I-495 at VA-7",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo1051",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo1051\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo1051",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.2165",
                "38.90426"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "47",
              "id": "87167",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495 \/ MM 47 \/ NB \/ I-495 at VA-7 ramps",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo1049",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo1049\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo1049",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.436",
                "38.8274"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "0",
              "id": "87197",
              "jurisdiction": "Fairfax",
              "route": "US-28",
              "description": "Centreville Rd at New Braddock Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3630",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3630\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxVideo3630",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.46628",
                "38.37039"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "136.5",
              "id": "93273",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95 \/ MM 136.5 \/ SB",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV4075",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV4075\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV4075",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.40769",
                "38.45605"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "143",
              "id": "93384",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95 \/ MM 143 \/ NB",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV4095",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV4095\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/FairfaxCCTV4095",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.2085",
                "37.95325"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "207",
              "id": "93471",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81 \/ MM 207 \/ NB \/ Spottswood, VA",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/StauntonI81MM207N",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/StauntonI81MM207N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/StauntonI81MM207N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.816554",
                "38.482717"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "0",
              "id": "93478",
              "jurisdiction": "Staunton",
              "route": "US-11",
              "description": "US-11 \/ near I-81 MM 251 \/ SB \/ Harrisonburg, VA",
              "rtmp_url": "rtmp:\/\/8.15.251.47:1935\/rtplive\/StauntonUS11I81SExit251",
              "ios_url": "http:\/\/8.15.251.47:1935\/rtplive\/StauntonUS11I81SExit251\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.47:1935\/rtplive\/StauntonUS11I81SExit251",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.054719",
                "37.31455"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "140",
              "id": "85206",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 140  \/  NB  \/  I-81 MM 140",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM140",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM140\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM140",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.0366",
                "37.321083"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "141.3",
              "id": "85217",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 141.3  \/  NB  \/  I-81 MM 141.3",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM1413",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM1413\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM1413",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.51298",
                "37.09785"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "108",
              "id": "85238",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 108  \/  SB  \/  I-81 MM 108",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM108",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM108\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM108",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.499179",
                "37.094101"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "109",
              "id": "85251",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 109  \/  NB  \/  I-81 MM 109",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM109",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM109\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM109",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.445885",
                "37.110796"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "113",
              "id": "85266",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 113  \/  NB  \/  I-81 MM 113",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM113",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM113\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM113",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.422",
                "37.1161"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "114",
              "id": "85278",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 114  \/  SB  \/  I-81 MM 114",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM114",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM114\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM114",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.380465",
                "37.125098"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "116",
              "id": "85290",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 116  \/  NB  \/  I-81 MM 116",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM116",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM116\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM116",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.372367",
                "37.12775"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "117",
              "id": "85303",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 117  \/  NB  \/  I-81 MM 117",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM117",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM117\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM117",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.360572",
                "37.133913"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "118",
              "id": "85314",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 118  \/  SB  \/  I-81 MM 118",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM118",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM118\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM118",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-82.130889",
                "36.626221"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "6.9",
              "id": "85369",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 6.9  \/  NB  \/  I-81 MM 6.9",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM69",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM69\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM69",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.821",
                "36.9866"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "88",
              "id": "85398",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 88  \/  SB  \/  I-81 MM 88",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM88",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM88\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM88",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.78401",
                "36.99627"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "90",
              "id": "85408",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 90  \/  NB  \/  I-81 MM 90",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM90",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM90\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM90",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.71829",
                "37.042549"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "95",
              "id": "85422",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 95  \/  NB  \/  I-81 MM 95",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM95",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM95\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM95",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.709254",
                "37.059186"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "96",
              "id": "85435",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 96  \/  NB  \/  I-81 MM 96",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM96",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM96\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM96",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.68953",
                "37.07968"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "98",
              "id": "85445",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 98  \/  SB  \/  I-81 MM 98",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM98",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM98\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM98",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.57711",
                "37.09135"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "105",
              "id": "85462",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 105  \/  SB  \/  I-81 MM 105",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM105",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM105\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM105",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.96757",
                "37.303117"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "3.4",
              "id": "85474",
              "jurisdiction": "Salem",
              "route": "I-581",
              "description": "I-581  \/  MM 3.4  \/  SB  \/  I-581 MM 3.4",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI581MM34",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI581MM34\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI581MM34",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.98117",
                "37.3155"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "4.5",
              "id": "85489",
              "jurisdiction": "Salem",
              "route": "I-581",
              "description": "I-581  \/  MM 4.5  \/  SB  \/  I-581 MM 4.5",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI581MM45",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI581MM45\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI581MM45",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-82.192142",
                "36.62041"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "3.3",
              "id": "85504",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81 \/ MM 3.3 \/ NB \/ I-81 MM 3.3",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM33",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM33\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM33",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.196027",
                "37.803318"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "1",
              "id": "85522",
              "jurisdiction": "Staunton",
              "route": "I-64",
              "description": "I-64  \/  MM 1  \/  EB  \/ Covington, VA ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV641E",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV641E\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV641E",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.82067",
                "38.04276"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "102",
              "id": "85537",
              "jurisdiction": "Staunton",
              "route": "I-64",
              "description": "I-64  \/  MM 102  \/  EB ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV64102E",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV64102E\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV64102E",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.78744",
                "38.04688"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "104",
              "id": "85555",
              "jurisdiction": "Staunton",
              "route": "I-64",
              "description": "I-64  \/  MM 104  \/  WB ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV64104W",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV64104W\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV64104W",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.72558",
                "38.04486"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "107",
              "id": "85572",
              "jurisdiction": "Staunton",
              "route": "I-64",
              "description": "I-64  \/  MM 107  \/  WB  \/  Charlottesvile",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV64107W",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV64107W\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV64107W",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.60208",
                "38.0342"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "114",
              "id": "85591",
              "jurisdiction": "Staunton",
              "route": "I-64",
              "description": "I-64  \/  MM 114  \/  WB  \/  Charlottesville",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV64114W",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV64114W\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV64114W",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.53647",
                "38.020784"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "118",
              "id": "85606",
              "jurisdiction": "Staunton",
              "route": "I-64",
              "description": "I-64  \/  MM 118  \/  WB  \/  Charlottesville ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV64118M",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV64118M\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV64118M",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.50901",
                "38.007939"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "120",
              "id": "85622",
              "jurisdiction": "Staunton",
              "route": "I-64",
              "description": "I-64  \/  MM 120  \/  EB  \/  Charlottesville",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV64120E",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV64120E\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV64120E",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.47616",
                "38.01123"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "Median",
              "mrm": "121",
              "id": "85636",
              "jurisdiction": "Staunton",
              "route": "I-64",
              "description": "I-64  \/  MM 121  \/  Median  \/  Charlottesville",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV64121M",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV64121M\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV64121M",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.42989",
                "38.02052"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "Median",
              "mrm": "124",
              "id": "85654",
              "jurisdiction": "Staunton",
              "route": "I-64",
              "description": "I-64  \/  MM 124  \/  Median  \/  Charlottesville",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV64124M",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV64124M\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV64124M",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.21329",
                "37.97721"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "136",
              "id": "85669",
              "jurisdiction": "Staunton",
              "route": "I-64",
              "description": "I-64  \/  MM 136  \/  EB  \/  Gordonsville,",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV64136E",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV64136E\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV64136E",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.21345",
                "37.97716"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "136",
              "id": "85685",
              "jurisdiction": "Staunton",
              "route": "I-64",
              "description": "I-64  \/  MM 136  \/  WB  \/   Gordonsville,",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV64136W",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV64136W\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV64136W",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.967712",
                "37.774703"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "16",
              "id": "85702",
              "jurisdiction": "Staunton",
              "route": "I-64",
              "description": "I-64  \/  MM 16  \/  WB  \/  Covington, VA ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6416W",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6416W\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6416W",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.88151",
                "37.79411"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "21",
              "id": "85717",
              "jurisdiction": "Staunton",
              "route": "I-64",
              "description": "I-64  \/  MM 21  \/  WB  \/   Covington",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6421W",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6421W\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6421W",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.414373",
                "37.800823"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "55",
              "id": "85734",
              "jurisdiction": "Staunton",
              "route": "I-64",
              "description": "I-64  \/  MM 55  \/  EB  \/  Lexington, VA ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6455E",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6455E\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6455E",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.04444",
                "38.119983"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "87.2",
              "id": "85747",
              "jurisdiction": "Staunton",
              "route": "I-64",
              "description": "I-64  \/  MM 87.5  \/  WB  ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6487M",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6487M\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6487M",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.98884",
                "38.082867"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "91",
              "id": "85764",
              "jurisdiction": "Staunton",
              "route": "I-64",
              "description": "I-64  \/  MM 91  \/  EB  \/   Fishersville, VA  ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6491E",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6491E\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6491E",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.941204",
                "38.061034"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "94",
              "id": "85782",
              "jurisdiction": "Staunton",
              "route": "I-64",
              "description": "I-64  \/  MM 94  \/  WB  \/ Waynesboro, VA",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6494W",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6494W\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6494W",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.906327",
                "38.047112"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "96",
              "id": "85792",
              "jurisdiction": "Staunton",
              "route": "I-64",
              "description": "I-64  \/  MM 96  \/  WB  \/  Wayensboro, VA  ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6496W",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6496W\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6496W",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.88264",
                "38.0404"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "98.4",
              "id": "85813",
              "jurisdiction": "Staunton",
              "route": "I-64",
              "description": "I-64  \/  MM 98.4  \/  WB ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6498W",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6498W\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6498W",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.85851",
                "38.03221"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "99",
              "id": "85828",
              "jurisdiction": "Staunton",
              "route": "I-64",
              "description": "I-64  \/  MM 99  \/  EB ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6499E",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6499E\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6499E",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.099488333333",
                "38.915320555556"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "13",
              "id": "85844",
              "jurisdiction": "Staunton",
              "route": "I-66",
              "description": "I-66  \/  MM 13  \/  NB  \/  Linden VA ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6613E",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6613E\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6613E",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.0724",
                "38.9119"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "14.8",
              "id": "85861",
              "jurisdiction": "Staunton",
              "route": "I-66",
              "description": "I-66  \/  MM 14.8  \/  WB  \/  Linden, VA ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV66148W",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV66148W\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV66148W",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.9974",
                "38.907"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "18.9",
              "id": "85878",
              "jurisdiction": "Staunton",
              "route": "I-66",
              "description": "I-66  \/  MM 18.9  \/  EB  \/  Markham VA ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV66189E",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV66189E\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV66189E",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.88986",
                "38.86911"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "26.6",
              "id": "85892",
              "jurisdiction": "Staunton",
              "route": "I-66",
              "description": "I-66  \/  MM 26.6  \/  WB  \/  Marshall, VA ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV66266W",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV66266W\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV66266W",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.8401",
                "38.8588"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "28",
              "id": "85909",
              "jurisdiction": "Staunton",
              "route": "I-66",
              "description": "I-66  \/  MM 28  \/  WB  \/ Marshall VA ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6628W",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6628W\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6628W",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.7895",
                "38.8504"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "31.8",
              "id": "85923",
              "jurisdiction": "Staunton",
              "route": "I-66",
              "description": "I-66  \/  MM 31.8  \/  WB  \/  The Plains VA ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6631W",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6631W\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV6631W",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.72414",
                "38.82683"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "35.8",
              "id": "85939",
              "jurisdiction": "Staunton",
              "route": "I-66",
              "description": "I-66  \/  MM 35.8  \/  WB  \/ The Plains, VA",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV66358W",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV66358W\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV66358W",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.19279",
                "38.96113"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "6",
              "id": "85954",
              "jurisdiction": "Staunton",
              "route": "I-66",
              "description": "I-66  \/  MM 6  \/  WB  \/  Front Royal VA ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV666W",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV666W\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV666W",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.50567",
                "37.66931"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "180.6",
              "id": "85969",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 180.6  \/  NB  \/  Glasgow, VA",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81180N",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81180N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81180N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.46434",
                "37.70207"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "Median",
              "mrm": "183.9",
              "id": "85983",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 183.9  \/  Median  \/ Lexington, VA ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81184M",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81184M\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81184M",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.46452",
                "37.70308"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "183.9",
              "id": "85999",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 183.9  \/  SB  \/ Lexington, VA ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81184S",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81184S\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81184S",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.44646",
                "37.71541"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "185.2",
              "id": "86014",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 185.2  \/  NB  \/  Lexington, VA",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81186N",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81186N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81186N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.4093",
                "37.75702"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "188.9",
              "id": "86029",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 188.9  \/  NB  \/  Lexington, VA",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81188N",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81188N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81188N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.40082",
                "37.77672"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "Median",
              "mrm": "190.2",
              "id": "86043",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 190.2  \/  Median  \/  Lexington,VA",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81190S",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81190S\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81190S",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.40016",
                "37.78435"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "190.7",
              "id": "86059",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 190.7  \/  NB  \/ Lexington,VA",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81190M",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81190M\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81190M",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.39771",
                "37.78958"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "191",
              "id": "86074",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 191  \/  NB  \/   Lexington,VA",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81191N",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81191N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81191N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.39937",
                "37.79099"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "191.1",
              "id": "86088",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 191.1  \/  SB  \/  Lexington,VA",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81191S",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81191S\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81191S",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.38925",
                "37.80492"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "192.3",
              "id": "86104",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81 \/ MM 192.3 \/ NB \/ Lexington, VA 24450",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81192N",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81192N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81192N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.36335",
                "37.842299"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "195",
              "id": "86118",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 195  \/  NB  \/ Lexington",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81195N",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81195N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81195N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.33931",
                "37.86337"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "Median",
              "mrm": "197.2",
              "id": "86134",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 197.2  \/  Median  \/  Lexington",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81197N",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81197N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81197N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.31644",
                "37.8713"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "198.6",
              "id": "86148",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 198.6  \/  NB  \/  Fairfield",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81198N",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81198N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81198N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.28168",
                "37.88709"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "200",
              "id": "86164",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 200  \/  NB  \/  Fairfield VA ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81200N",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81200N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81200N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.26263",
                "37.90602"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "202.5",
              "id": "86179",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 202.5  \/  NB  \/   Raphine ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV812025N",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV812025N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV812025N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.22671",
                "37.93312"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "205",
              "id": "86193",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 205  \/  NB  \/  Raphine VA",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81205N",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81205N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81205N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.08255",
                "38.08538"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "215",
              "id": "86208",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 215  \/  NB  \/  STAUNTON, VA",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81215N",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81215N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81215N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.047456",
                "38.121143"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "221",
              "id": "86223",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 221  \/  SB  \/  Staunton VA ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81221S",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81221S\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81221S",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.01783",
                "38.14895"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "224.3",
              "id": "86234",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 224.3  \/  SB  \/  Staunton, Va",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81224S",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81224S\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81224S",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.010605",
                "38.1672"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "225",
              "id": "86248",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 225  \/  NB  \/  Staunton VA ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81225S",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81225S\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81225S",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.996634",
                "38.192559"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "227",
              "id": "86256",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 227  \/  NB  \/ Verona VA",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81227N",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81227N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81227N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.93338",
                "38.28867"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "235",
              "id": "86273",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 235  \/  SB  \/ Weyers Cave VA ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81235S",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81235S\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81235S",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.929877",
                "38.314472"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "237",
              "id": "86290",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 237  \/  NB  \/ Weyers Cave VA",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81237N",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81237N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81237N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.926997",
                "38.357143"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "240",
              "id": "86308",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 240  \/  NB  \/ Mount Crawford VA  ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81240N",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81240N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81240N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.9117",
                "38.39555"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "242.8",
              "id": "86324",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 242.8  \/  SB  \/  Harrisonburg, Va",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81242S",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81242S\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81242S",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.88402",
                "38.418386"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "244.5",
              "id": "86339",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 244.5  \/  NB  \/  Harrisonburg VA",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81245N",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81245N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81245N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.87289",
                "38.43153"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "246.15",
              "id": "86351",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 246.15  \/  NB  \/  Harrisonburg VA",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81246N",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81246N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81246N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.850801",
                "38.437287"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "247",
              "id": "86367",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 247  \/  NB  \/ Harrisonburg VA",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81247N",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81247N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81247N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.810771",
                "38.481622"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "251",
              "id": "86379",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 251  \/  SB  \/ Harrisonburg VA",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81251S",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81251S\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81251S",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.76734",
                "38.53656"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "255.7",
              "id": "86395",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 255.7  \/  SB  \/ Harrisonburg VA",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81255S",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81255S\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81255S",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.744829",
                "38.563192"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "257",
              "id": "86405",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 257  \/  SB  \/ Broadway VA",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81257S",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81257S\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81257S",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.676291",
                "38.648189"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "264",
              "id": "86427",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 264  \/  SB  \/ New Market VA",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81264S",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81264S\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81264S",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.65942",
                "38.72398"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "270.4",
              "id": "86438",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 270.4  \/  SB  \/  Quicksburg Va.",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81270S",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81270S\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81270S",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.634045",
                "38.762019"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "273",
              "id": "86456",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 273  \/  SB  \/ Mount Jackson VA",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81273N",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81273N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81273N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.60134",
                "38.80772"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "277.2",
              "id": "86473",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 277.2  \/  SB  \/  Edinburg, VA",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81277S",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81277S\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81277S",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.527574",
                "38.871235"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "283",
              "id": "86486",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 283  \/  NB  \/  Woodstock",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81283N",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81283N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81283N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.436732",
                "38.964976"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "291",
              "id": "86507",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 291  \/  NB  \/  Tom's Brook VA ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81291N",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81291N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81291N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.334189",
                "39.007894"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "298",
              "id": "86522",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 298  \/  SB  \/ Old Valley Pike",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81298S",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81298S\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81298S",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.29839",
                "39.009963"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "Median",
              "mrm": "301.7",
              "id": "86539",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81 \/ MM 301.7 \/ Median ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81300M",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81300M\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81300M",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.29839",
                "39.009963"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "300",
              "id": "86553",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 300  \/  SB  \/  Middletown VA",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81300S",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81300S\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81300S",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.26983",
                "39.02757"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "302",
              "id": "86568",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 302  \/  NB  \/   Middletown VA ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81302N",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81302N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81302N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.21522",
                "39.0815"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "307",
              "id": "86583",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 307  \/  NB  \/  Stephens City VA ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81307N",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81307N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81307N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.191349",
                "39.120283"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "310",
              "id": "86595",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 310  \/  NB  \/ Winchester VA ",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81310N",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81310N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81310N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.17668",
                "39.13725"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "311.21",
              "id": "86610",
              "jurisdiction": "Staunton",
              "route": "I-81",
              "description": "I-81  \/  MM 311.21  \/  SB  \/  Winchester VA",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81311N",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81311N\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV81311N",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.49946667",
                "38.33266667"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "132",
              "id": "86628",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95 \/ MM 130 \/ NB \/ I-95N Rt 3 at Rappahannock River Bridge",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxCCTV4045",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxCCTV4045\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxCCTV4045",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.27002",
                "38.95492"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "52",
              "id": "86655",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495  \/  MM 52  \/  NB  \/  in the median at the cut through just north of Little River Turnpike",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV02",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV02\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV02",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.22035",
                "38.85635"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "51",
              "id": "86669",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495  \/  MM 51  \/  NB  \/  on the right shoulder after Gallows Rd.",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV03",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV03\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV03",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.21942",
                "38.8671"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "50",
              "id": "86682",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495  \/  MM 50  \/  NB  \/  just north of Rte. 50 in the CD on the right shoulder",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV04",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV04\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV04",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.25811",
                "38.94577"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "46",
              "id": "86699",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495  \/  MM 46  \/  NB  \/  at the gore for the left exit 49 to I-66 West has a camera present",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV06",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV06\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV06",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.21647",
                "38.89297"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "48",
              "id": "86711",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495  \/  MM 46  \/  NB  \/  South of Idylwood Overpass on right shoulder",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV07",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV07\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV07",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.21813",
                "38.91395"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "47",
              "id": "86735",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495  \/  MM 51  \/  SB  \/  on the left shoulder in the CD just before Rte 7 there is a camera present",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV09",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV09\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV09",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.23404",
                "38.93392"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "54.9",
              "id": "86771",
              "jurisdiction": "Fairfax",
              "route": "VA-7",
              "description": "VA-7  \/  MM 51  \/  WB  \/  about 100' after Atwood Road in the median",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV12",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV12\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV12",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.2583",
                "38.94583"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "55.6",
              "id": "86783",
              "jurisdiction": "Fairfax",
              "route": "VA-7",
              "description": "VA-7  \/  MM 51  \/  WB  \/  about 1\/4 mile after Lewinsville Rd in the median",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV13",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV13\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV13",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.19522",
                "38.95319"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "44.3",
              "id": "86795",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495  \/  MM 49  \/  SB  \/  on Ramp from Rte 193.  to I-495 S (Exit 44)",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV14",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV14\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV14",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.20982",
                "38.93184"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "4",
              "id": "86807",
              "jurisdiction": "Fairfax",
              "route": "VA-267",
              "description": "VA-267  \/  MM 49  \/  EB  \/  Weihle and Rte 267 (Dulles Toll Road)",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV15",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV15\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV15",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.21334",
                "38.92284"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "N\/S",
              "mrm": "4",
              "id": "86818",
              "jurisdiction": "Fairfax",
              "route": "VA-123",
              "description": "VA-123  \/  MM 58  \/  N\/S  \/  in the median, 1\/4 mile north of the intersection of Lewinsville Rd.  A VMS is also present",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV16",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV16\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV16",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.21352",
                "38.92965"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "3",
              "id": "86829",
              "jurisdiction": "Fairfax",
              "route": "VA-267",
              "description": "VA-267  \/  MM 49  \/  WB  \/  (Dulles Airport Access Rd.) on the right shoulder 30 ft. after Exit 19 B (Rte. 123 N).",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV17",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV17\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV17",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.336583",
                "38.546588"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "151",
              "id": "86841",
              "jurisdiction": "Fairfax",
              "route": "US-1",
              "description": "US-1 \/ MM 151 \/ NB \/ at Route 619 - Joplin Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV20",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV20\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV20",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.1962",
                "38.9236"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "5",
              "id": "86853",
              "jurisdiction": "Fairfax",
              "route": "VA-267",
              "description": "VA-267  \/  MM 49  \/  EB  \/  (Dulles Airport Access Rd.), 1\/3 mile after the Magarity Road bridge on the right shoulder.",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV18",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV18\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxPCCTV18",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.44628",
                "38.38824"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "137.8",
              "id": "86864",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95 \/ MM 137.8 \/ NB",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxCCTV4080",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxCCTV4080\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxCCTV4080",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.51187",
                "38.2769"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "129",
              "id": "86876",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95 \/ MM 129 \/ NB",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxCCTV4055",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxCCTV4055\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxCCTV4055",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.40822",
                "38.46603"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "143.7",
              "id": "86888",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95 \/ MM 143.7 \/ SB",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxCCTV4160",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxCCTV4160\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxCCTV4160",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.49191",
                "38.34098"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "133.5",
              "id": "86899",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95 \/ MM 133.5 \/ SB",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxCCTV4150",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxCCTV4150\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxCCTV4150",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.50451",
                "38.29604"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "130.3",
              "id": "86920",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95 \/ MM 130.3 \/ NB",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxCCTV4145",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxCCTV4145\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxCCTV4145",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.140011",
                "38.021"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "0",
              "id": "86939",
              "jurisdiction": "Staunton",
              "route": "US-11 \/ US-340",
              "description": "Staunton US-11 \/ US-340 NB",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonUS11US340NB",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonUS11US340NB\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonUS11US340NB",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.97294",
                "37.23192"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "3.5",
              "id": "86950",
              "jurisdiction": "Salem",
              "route": "US-220",
              "description": "US-220 \/ MM \/ NB \/ 419 \/ at Route 419",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemUS220Rt419",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemUS220Rt419\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemUS220Rt419",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.93627",
                "36.73914"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "3.1",
              "id": "86970",
              "jurisdiction": "Salem",
              "route": "US-220",
              "description": "US-220 \/ MM \/ NB \/ US-57 \/ at Route 57",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemUS220US57",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemUS220US57\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemUS220US57",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-82.59539",
                "36.96856"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "0",
              "id": "86980",
              "jurisdiction": "Salem",
              "route": "US-23",
              "description": "US-23\/ MM \/ NB \/ 23 BUS (Norton Rd) \/ at Norton Road",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemUS2323BUSNortonRd",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemUS2323BUSNortonRd\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemUS2323BUSNortonRd",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-82.074655",
                "36.775384"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "0.5",
              "id": "86991",
              "jurisdiction": "Salem",
              "route": "US-58",
              "description": "US-58\/US-19",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemUS58US19",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemUS58US19\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemUS58US19",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-81.92646",
                "36.71659"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "20.1",
              "id": "87000",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81 MM 20",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM20",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM20\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM20",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-81.20023",
                "36.927749"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "64.7",
              "id": "87011",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81 \/ MM 64.7 \/ NB \/ I-81 MM 64.70",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM64",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM64\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM64",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.9545",
                "36.94419"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "80.8",
              "id": "87022",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81 MM 80.8 and Factory Outlet Dr",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM80",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM80\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM80",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-81.53372",
                "36.8226"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "44.2",
              "id": "87031",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81 MM 44.2",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM442",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM442\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM442",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-81.42809",
                "36.86335"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "51.2",
              "id": "87041",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81 \/ MM 51.2 \/ Exit 50 - Atkins",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM512",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM512\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM512",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-81.0703",
                "36.963"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "72.5",
              "id": "87051",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81 MM 72",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM72",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM72\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM72",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-81.05608",
                "36.95536"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "73.6",
              "id": "87061",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81 MM 73.5",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM735",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM735\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM735",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.97298",
                "36.94097"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "78.7",
              "id": "87070",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 7.8  \/  SB  \/  I-81 MM 78.7",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM78",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM78\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM78",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.9942",
                "36.9368"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "77",
              "id": "87090",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81 MM 77",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM77",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM77\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM77",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.174",
                "38.7928"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "57",
              "id": "87100",
              "jurisdiction": "Fairfax",
              "route": "I-395",
              "description": "I-395 \/ MM 57 \/ NB \/ I-395 at I-495",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo2045",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo2045\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo2045",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.113",
                "38.8298"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "0",
              "id": "87110",
              "jurisdiction": "Fairfax",
              "route": "I-395",
              "description": "I-395 at Seminary Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo3610",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo3610\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo3610",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.0991",
                "38.80325"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "175",
              "id": "87120",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495 \/ MM 175 \/ SB \/ Eisenhower Ave",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo1009",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo1009\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo1009",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.2196",
                "38.84597"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "51",
              "id": "87130",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495 \/ MM 51 \/ NB \/ I-495 at Gallows Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo1071",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo1071\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo1071",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.1764",
                "38.79179"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "171",
              "id": "87140",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495 \/ MM 171 \/ NB \/ I-495 at Gate entrance",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo0935",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo0935\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo0935",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.2091",
                "38.8007"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "55",
              "id": "87150",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495 \/ MM 55 \/ NB \/ I-495 at Hemming rd",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo0566",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo0566\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo0566",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.2219",
                "38.88482"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "49",
              "id": "87160",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495 \/ MM 49 \/ NB \/ I-495 at I- 66",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo1063",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo1063\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo1063",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.2219",
                "38.8817"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "49",
              "id": "87169",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495 \/ MM 49 \/ SB \/ I-495 at I-66 ramps",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo1065",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo1065\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo1065",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.2169",
                "38.89278"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "49.5",
              "id": "87180",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495 \/ MM 49.5 \/ SB \/ I-495 at Idylwood Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo1047",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo1047\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo1047",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.2085",
                "38.93373"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "45",
              "id": "87189",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495 \/ MM 45 \/ NB \/ I-495 at Lewinsville Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo1059",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo1059\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo1059",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.0886",
                "38.80216"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "176",
              "id": "87200",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-95 \/ MM 176 \/ SB \/ I-495 Inner Loop Local",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo1011",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo1011\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo1011",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.2949",
                "38.65132"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "0",
              "id": "87208",
              "jurisdiction": "Fairfax",
              "route": "VA-294",
              "description": "Prince William Co Pkwy at Worth Ave",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo3575",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo3575\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/FairfaxVideo3575",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.351884",
                "37.142781"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "118.5",
              "id": "91183",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 118.5  \/  SB  \/  I-81 MM 118.5",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM1185",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM1185\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM1185",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.342616",
                "37.145838"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "119.4",
              "id": "91185",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 119.4  \/  NB  \/  I-81 MM 119.4",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM1194",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM1194\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI81MM1194",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-81.10157",
                "37.00838"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "45",
              "id": "93905",
              "jurisdiction": "Salem",
              "route": "I-77",
              "description": "I-77 \/ MM 45 \/ SB",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI77MM45",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI77MM45\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI77MM45",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-81.13267",
                "37.05675"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "49.5",
              "id": "93906",
              "jurisdiction": "Salem",
              "route": "I-77",
              "description": "I-77 \/ MM 49.5 \/ NB",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI77MM495",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI77MM495\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI77MM495",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-81.12629",
                "37.07634"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "51.1",
              "id": "93913",
              "jurisdiction": "Salem",
              "route": "I-77",
              "description": "I-77 \/ MM 51.1 \/ NB",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI77MM511",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI77MM511\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI77MM511",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-81.12874",
                "37.09733"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "52.9",
              "id": "93914",
              "jurisdiction": "Salem",
              "route": "I-77",
              "description": "I-77 \/ MM 52.9 \/ SB",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI77MM529",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI77MM529\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI77MM529",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-81.1224",
                "37.1187"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "54.3",
              "id": "93915",
              "jurisdiction": "Salem",
              "route": "I-77",
              "description": "I-77 \/ MM 54.3 \/ NB",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/SalemI77MM543",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/SalemI77MM543\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/SalemI77MM543",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-81.122911",
                "37.274675"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "67.6",
              "id": "93925",
              "jurisdiction": "Salem",
              "route": "I-77",
              "description": "I-77 \/ MM 67.6 \/ East River Mountain Tunnel Cam 6 North bound",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/EastRiverMtTunnelNB",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/EastRiverMtTunnelNB\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/EastRiverMtTunnelNB",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-81.12542",
                "37.283282"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "68.2",
              "id": "93926",
              "jurisdiction": "Salem",
              "route": "I-77",
              "description": "I-77 \/ MM 68.2 \/ East River Mountain Tunnel North End",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/EastRiverMtTunnelNE",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/EastRiverMtTunnelNE\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/EastRiverMtTunnelNE",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-81.123929",
                "37.274618"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "67.6",
              "id": "93927",
              "jurisdiction": "Salem",
              "route": "I-77",
              "description": "I-77 \/ MM 67.6 \/ East River Mountain Tunnel Cam 6 South bound",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/EastRiverMtTunnelSB",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/EastRiverMtTunnelSB\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/EastRiverMtTunnelSB",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.20016",
                "38.94713"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "55",
              "id": "96694",
              "jurisdiction": "Staunton",
              "route": "US-340",
              "description": "US-340 \/ MM 55 \/ Front Royal WB",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV34055W",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV34055W\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV34055W",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.2138",
                "37.9769"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "136",
              "id": "96706",
              "jurisdiction": "Staunton",
              "route": "US-15",
              "description": "US-15 at I-64 MM 136",
              "rtmp_url": "rtmp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV1564136W",
              "ios_url": "http:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV1564136W\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.48:1935\/rtplive\/StauntonCCTV1564136W",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.72991",
                "37.35102"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "234.47",
              "id": "85209",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 234.47  \/  EB  \/  0.3 Mi past Exit 234",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads885",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads885\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads885",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.73389",
                "37.35552"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "234.1",
              "id": "85219",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 234.1  \/  WB  \/  0.2 Mi past Exit 234A",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads886",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads886\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads886",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.6639",
                "37.27951"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "240.46",
              "id": "85229",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 240.46  \/  WB  \/  just past Colonial Pkwy overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads871",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads871\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads871",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.66647",
                "37.28156"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "240.27",
              "id": "85240",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 240.27  \/  WB  \/  0.3 Mi past Colonial Pkwy overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads872",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads872\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads872",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.66769",
                "37.28221"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "240.2",
              "id": "85255",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 240.2  \/  EB  \/  0.2 Mi past W Queens Rd overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads873",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads873\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads873",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.67265",
                "37.28952"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "239.61",
              "id": "85272",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 239.61  \/  WB  \/  0.3 Mi past W Queens Rd overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads874",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads874\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads874",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.67681",
                "37.29425"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "239.24",
              "id": "85291",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 239.24  \/  EB  \/  AT Queens Creek bridge",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads875",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads875\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads875",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.68014",
                "37.30015"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "238.81",
              "id": "85306",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 238.81  \/  WB  \/  AT Exit 238",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads876",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads876\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads876",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.6847",
                "37.30495"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "238.39",
              "id": "85318",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 238.39  \/  EB  \/  AT Exit 238",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads877",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads877\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads877",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.69007",
                "37.31279"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "237.82",
              "id": "85334",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 237.82  \/  WB  \/  0.6 Mi past Camp Peary Hub",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads878",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads878\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads878",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.69382",
                "37.31745"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "237.37",
              "id": "85351",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 237.37  \/  EB  \/  1.0 Mi before Camp Peary",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads879",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads879\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads879",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.69809",
                "37.32386"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "236.95",
              "id": "85365",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 236.95  \/  WB  \/  1.5 Mi past Camp Peary Hub",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads880",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads880\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/HamptonRoads880",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.45507",
                "37.85079"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "98.4",
              "id": "85378",
              "jurisdiction": "Richmond",
              "route": "I-95",
              "description": "I-95  \/  MM 98.4  \/  SB  \/  Doswell",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0984",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0984\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0984",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.38294",
                "37.5365"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "194.3",
              "id": "85399",
              "jurisdiction": "Richmond",
              "route": "I-64",
              "description": "I-64  \/  MM 194.3  \/  WB  \/  Nine Mile",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064WB1943",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064WB1943\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064WB1943",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.01608",
                "37.4948"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "215",
              "id": "85411",
              "jurisdiction": "Richmond",
              "route": "I-64",
              "description": "I-64  \/  MM 215  \/  WB  \/  New Kent",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064WB2150",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064WB2150\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064WB2150",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.40276",
                "37.55383"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "192.7",
              "id": "85424",
              "jurisdiction": "Richmond",
              "route": "I-64",
              "description": "I-64  \/  MM 192.7  \/  WB  \/  Fairfield",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064WB1927",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064WB1927\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064WB1927",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.45267",
                "37.63991"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "83.7",
              "id": "85440",
              "jurisdiction": "Richmond",
              "route": "I-95",
              "description": "I-95  \/  MM 83.7  \/  SB  \/  Scott Road",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0837",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0837\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0837",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.45268",
                "37.60813"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "81.2",
              "id": "85451",
              "jurisdiction": "Richmond",
              "route": "I-95",
              "description": "I-95  \/  MM 81.2  \/  SB  \/  Chamberlayne",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0812",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0812\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0812",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.42483",
                "37.39957"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "64.9",
              "id": "85466",
              "jurisdiction": "Richmond",
              "route": "I-95",
              "description": "I-95  \/  MM 64.9  \/  SB  \/  Willis Rd south",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0649",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0649\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0649",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.36063",
                "37.19471"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "49.1",
              "id": "85481",
              "jurisdiction": "Richmond",
              "route": "I-95",
              "description": "I-95  \/  MM 49.1  \/  SB  \/  Wagner Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0491",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0491\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0491",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.3813",
                "37.2148"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "50.9",
              "id": "85498",
              "jurisdiction": "Richmond",
              "route": "I-95",
              "description": "I-95  \/  MM 50.9  \/  SB  \/  Crater Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0509",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0509\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0509",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.35187",
                "37.59877"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "36.3",
              "id": "85514",
              "jurisdiction": "Richmond",
              "route": "I-295",
              "description": "I-295  \/  MM 36.3  \/  NB  \/  Cold Harbor",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS295NB0363",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS295NB0363\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS295NB0363",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.39083",
                "37.22161"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "51.5",
              "id": "85531",
              "jurisdiction": "Richmond",
              "route": "I-95",
              "description": "I-95  \/  MM 51.5  \/  NB  \/  \"85\/95\"",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095NB0515",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095NB0515\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095NB0515",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.45809",
                "37.753325"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "91.7",
              "id": "85550",
              "jurisdiction": "Richmond",
              "route": "I-95",
              "description": "I-95  \/  MM 91.7  \/  SB  \/  Ashland \/ Rte 54",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0917",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0917\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0917",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.4049",
                "37.35488"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "61.4",
              "id": "85573",
              "jurisdiction": "Richmond",
              "route": "I-95",
              "description": "I-95  \/  MM 61.4  \/  SB  \/  Rte 10",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0614",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0614\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0614",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.44773",
                "37.7175"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "89.1",
              "id": "85592",
              "jurisdiction": "Richmond",
              "route": "I-95",
              "description": "I-95  \/  MM 89.1  \/  NB  \/  Lewistown",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095NB0891",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095NB0891\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095NB0891",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.4293",
                "37.37735"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "1",
              "id": "85608",
              "jurisdiction": "Richmond",
              "route": "VA-288",
              "description": "VA-288  \/  MM 1  \/  SB  \/  288 \/ Rte 1",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS288SB0010",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS288SB0010\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS288SB0010",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.47381",
                "37.58281"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "3.1",
              "id": "85625",
              "jurisdiction": "Richmond",
              "route": "I-195",
              "description": "I-195  \/  MM 3.1  \/  NB  \/  195 Laburnum exit south end",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS195NB0031",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS195NB0031\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS195NB0031",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.3672",
                "37.52971"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "195",
              "id": "85641",
              "jurisdiction": "Richmond",
              "route": "I-64",
              "description": "I-64  \/  MM 195  \/  EB  \/  Laburnum exit north end",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064EB1950",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064EB1950\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064EB1950",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.43139",
                "37.48253"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "70.9",
              "id": "85657",
              "jurisdiction": "Richmond",
              "route": "I-95",
              "description": "I-95  \/  MM 70.9  \/  SB  \/  Bells Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0709",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0709\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0709",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.477183",
                "37.57031"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "2.2",
              "id": "85677",
              "jurisdiction": "Richmond",
              "route": "I-195",
              "description": "I-195  \/  MM 2.2  \/  NB  \/  Broad St exit",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS195NB0022",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS195NB0022\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS195NB0022",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.65285",
                "37.67337"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "175",
              "id": "85697",
              "jurisdiction": "Richmond",
              "route": "I-64",
              "description": "I-64  \/  MM 175  \/  EB  \/  Goochland (64E @ 288S)",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064EB1750",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064EB1750\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064EB1750",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.435211",
                "37.549862"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "76",
              "id": "85711",
              "jurisdiction": "Richmond",
              "route": "I-95",
              "description": "I-95  \/  MM 76  \/  NB  \/  1st St \/ Chamberlayne",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095NB0760",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095NB0760\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095NB0760",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.468948",
                "37.580139"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "78.8",
              "id": "85725",
              "jurisdiction": "Richmond",
              "route": "I-95",
              "description": "I-95  \/  MM 78.8  \/  SB  \/  Tech Ctr (95N @ 64W)",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0788",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0788\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0788",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.4542",
                "37.6056"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "79",
              "id": "85740",
              "jurisdiction": "Richmond",
              "route": "I-95",
              "description": "I-95  \/  MM 79  \/  NB  \/  Hermitage \/ Bryan Pk",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095NB0790",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095NB0790\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095NB0790",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.4058",
                "37.37453"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "62.8",
              "id": "85755",
              "jurisdiction": "Richmond",
              "route": "I-95",
              "description": "I-95  \/  MM 62.8  \/  NB  \/  \"62\"",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095NB0628",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095NB0628\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095NB0628",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.41135",
                "37.55705"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "192.1",
              "id": "85772",
              "jurisdiction": "Richmond",
              "route": "I-64",
              "description": "I-64  \/  MM 192.1  \/  WB  \/  Mechanicsville",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064WB1921",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064WB1921\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064WB1921",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.453972",
                "37.560349"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "77.4",
              "id": "85787",
              "jurisdiction": "Richmond",
              "route": "I-95",
              "description": "I-95  \/  MM 77.4  \/  SB  \/  Lombardy \/ Bus Depot",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0774",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0774\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0774",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.4515",
                "37.6844"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "86",
              "id": "85801",
              "jurisdiction": "Richmond",
              "route": "I-95",
              "description": "I-95  \/  MM 86  \/  NB  \/  \"86\"  Sliding Hill",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095NB0860",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095NB0860\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095NB0860",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.4503",
                "37.6546"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "84",
              "id": "85808",
              "jurisdiction": "Richmond",
              "route": "I-95",
              "description": "I-95  \/  MM 84  \/  NB  \/  \"84\"   95N @ 295",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095NB0840",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095NB0840\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095NB0840",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.454483",
                "37.570362"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "78",
              "id": "85821",
              "jurisdiction": "Richmond",
              "route": "I-95",
              "description": "I-95  \/  MM 78  \/  SB  \/  Boulevard \/ Dairy",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0780",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0780\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0780",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.610626",
                "37.658966"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "177",
              "id": "85836",
              "jurisdiction": "Richmond",
              "route": "I-64",
              "description": "I-64  \/  MM 177  \/  WB  \/  Pouncy Tract",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064WB1770",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064WB1770\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064WB1770",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.49511",
                "37.594013"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "185.2",
              "id": "85852",
              "jurisdiction": "Richmond",
              "route": "I-64",
              "description": "I-64  \/  MM 185.2  \/  EB  \/  Staples Mill",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064EB1852",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064EB1852\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064EB1852",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.446007",
                "37.553963"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "76.9",
              "id": "85866",
              "jurisdiction": "Richmond",
              "route": "I-95",
              "description": "I-95  \/  MM 76.9  \/  SB  \/  Belvidere",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0769",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0769\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0769",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.3952",
                "37.24226"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "53.2",
              "id": "85881",
              "jurisdiction": "Richmond",
              "route": "I-95",
              "description": "I-95  \/  MM 53.2  \/  SB  \/  South Park",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0532",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0532\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0532",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.26717",
                "37.51948"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "201",
              "id": "85895",
              "jurisdiction": "Richmond",
              "route": "I-64",
              "description": "I-64  \/  MM 201  \/  EB  \/  \"200\"",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064EB2010",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064EB2010\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064EB2010",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.525955",
                "37.601803"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "184",
              "id": "85906",
              "jurisdiction": "Richmond",
              "route": "I-64",
              "description": "I-64  \/  MM 184  \/  EB  \/  Broad \/ Glenside",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064EB1840",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064EB1840\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064EB1840",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.399708333333",
                "37.257155555556"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "54",
              "id": "85921",
              "jurisdiction": "Richmond",
              "route": "I-95",
              "description": "I-95  \/  MM 54  \/  SB  \/  Temple",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0540",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0540\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0540",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.42725",
                "37.41748"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "66.1",
              "id": "85935",
              "jurisdiction": "Richmond",
              "route": "I-95",
              "description": "I-95  \/  MM 66.1  \/  NB  \/  Willis",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095NB0661",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095NB0661\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095NB0661",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.594322",
                "37.64537"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "179",
              "id": "85951",
              "jurisdiction": "Richmond",
              "route": "I-64",
              "description": "I-64  \/  MM 179  \/  EB  \/  Short Pump",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064EB1790",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064EB1790\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064EB1790",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.43044",
                "37.53594"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "74",
              "id": "85966",
              "jurisdiction": "Richmond",
              "route": "I-95",
              "description": "I-95  \/  MM 74  \/  SB  \/  Franklin St \/ Monroe Bldg",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0740",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0740\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0740",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.42948",
                "37.54696"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "75.5",
              "id": "85981",
              "jurisdiction": "Richmond",
              "route": "I-95",
              "description": "I-95  \/  MM 75.5  \/  NB  \/  7th St (95N @ 64E)",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095NB0755",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095NB0755\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095NB0755",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.42576",
                "37.55479"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "190",
              "id": "85996",
              "jurisdiction": "Richmond",
              "route": "I-64",
              "description": "I-64  \/  MM 190  \/  WB  \/  Shockoe",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064WB1900",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064WB1900\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064WB1900",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.062567",
                "37.3858"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "11",
              "id": "86011",
              "jurisdiction": "Salem",
              "route": "US-460",
              "description": "US-460  \/  MM   \/  WB  \/  US-460 \/ Mt Athos",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemUS460MtAthos",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemUS460MtAthos\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemUS460MtAthos",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.398396",
                "37.149514"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "5",
              "id": "86027",
              "jurisdiction": "Salem",
              "route": "US-460",
              "description": "US-460  \/  MM   \/  EB  \/  US-460 BP \/ Ellett Road",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemUS460BPEllettRoad",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemUS460BPEllettRoad\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemUS460BPEllettRoad",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.08858",
                "37.39091"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "10",
              "id": "86042",
              "jurisdiction": "Salem",
              "route": "US-460",
              "description": "US-460  \/  MM   \/  EB  \/  US-460 \/ Pleasant Valley",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemUS460PleasantValley",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemUS460PleasantValley\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemUS460PleasantValley",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.16945",
                "37.35596"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "8",
              "id": "86057",
              "jurisdiction": "Salem",
              "route": "US-460",
              "description": "US-460  \/  MM   \/  EB  \/  US-460 \/ Liberty Mtn",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemUS460LibertyMtn",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemUS460LibertyMtn\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemUS460LibertyMtn",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.1905",
                "37.339995"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "7",
              "id": "86072",
              "jurisdiction": "Salem",
              "route": "US-460",
              "description": "US-460  \/  MM   \/  EB  \/  US-460 \/ US-29 Bus (Wards)",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemUS460US29BusWards",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemUS460US29BusWards\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemUS460US29BusWards",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.13025",
                "37.37833"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "9",
              "id": "86085",
              "jurisdiction": "Salem",
              "route": "US-460",
              "description": "US-460  \/  MM   \/  WB  \/  US-460 \/ US-501",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemUS460US501",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemUS460US501\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemUS460US501",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.90025",
                "36.687535"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "3",
              "id": "86100",
              "jurisdiction": "Salem",
              "route": "US-58",
              "description": "US-58  \/  MM   \/  WB  \/  US-58 \/ US-501 (Phillpot)",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemUS58US501Phillpot",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemUS58US501Phillpot\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemUS58US501Phillpot",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-78.88723",
                "36.68868"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "4",
              "id": "86117",
              "jurisdiction": "Salem",
              "route": "US-58",
              "description": "US-58  \/  MM   \/  WB  \/  US-58 \/ US-360 (Bill Tuck Hwy)",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemUS58US360BillTuckHwy",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemUS58US360BillTuckHwy\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemUS58US360BillTuckHwy",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.4649",
                "36.54263"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "2",
              "id": "86146",
              "jurisdiction": "Salem",
              "route": "US-58",
              "description": "US-58  \/  MM   \/  EB  \/  US-58 \/ US-29 (Sydenham)",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemUS58US29Sydenham",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemUS58US29Sydenham\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemUS58US29Sydenham",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.17757",
                "37.36873"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "1",
              "id": "86162",
              "jurisdiction": "Salem",
              "route": "US-29",
              "description": "US-29  \/  MM   \/  NB  \/  US-29 \/ Candlers Mtn",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemUS29CandlersMtn",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemUS29CandlersMtn\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemUS29CandlersMtn",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.13065",
                "37.41458"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "2",
              "id": "86177",
              "jurisdiction": "Salem",
              "route": "US-29",
              "description": "US-29  \/  MM   \/  SB  \/  US-29 Bus \/ Carter Glass Bridge",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemUS29BusCarterGlassBridge",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemUS29BusCarterGlassBridge\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemUS29BusCarterGlassBridge",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.43211",
                "37.21305"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "1",
              "id": "86206",
              "jurisdiction": "Salem",
              "route": "US-460",
              "description": "US-460  \/  MM   \/  EB  \/  US-460 \/ Southgate",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemUS460Southgate",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemUS460Southgate\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemUS460Southgate",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.4169",
                "37.17339"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "4",
              "id": "86220",
              "jurisdiction": "Salem",
              "route": "US-460",
              "description": "US-460  \/  MM   \/  EB  \/  US-460 \/ Soundwall",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemUS460Soundwall",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemUS460Soundwall\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemUS460Soundwall",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.42151",
                "37.16932"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "2",
              "id": "86232",
              "jurisdiction": "Salem",
              "route": "US-460-BUS",
              "description": "US-460  \/  MM   \/  EB  \/  US-460 Bus \/ Arbor",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemUS460BusArbor",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemUS460BusArbor\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemUS460BusArbor",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.40682",
                "37.18813"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "Median",
              "mrm": "3",
              "id": "86258",
              "jurisdiction": "Salem",
              "route": "US-460-BUS",
              "description": "US-460  \/  MM   \/  Median  \/  US-460 Bus \/ YellowSulpher",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemUS460BusYellowSulpher",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemUS460BusYellowSulpher\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemUS460BusYellowSulpher",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.263244",
                "37.310423"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "6",
              "id": "86270",
              "jurisdiction": "Salem",
              "route": "US-460",
              "description": "US-460  \/  MM   \/  EB  \/  US-460 \/ Timberlake",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemUS460Timberlake",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemUS460Timberlake\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemUS460Timberlake",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.64709",
                "37.57394"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "170",
              "id": "86300",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 170  \/  NB  \/  I-81 MM 170",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM170",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM170\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM170",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.39677",
                "37.18838"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "3",
              "id": "86345",
              "jurisdiction": "Salem",
              "route": "US-460",
              "description": "US-460  \/  MM   \/  EB  \/  US-460 BP \/ VTTI",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemUS460BPVTTI",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemUS460BPVTTI\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemUS460BPVTTI",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.95467",
                "37.25459"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "4",
              "id": "86358",
              "jurisdiction": "Salem",
              "route": "US-220",
              "description": "US-220  \/  MM   \/  SB  \/  US-220 \/ Colonial",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemUS220Colonial",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemUS220Colonial\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemUS220Colonial",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.86032",
                "36.62251"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "2",
              "id": "86372",
              "jurisdiction": "Salem",
              "route": "US-220",
              "description": "US-220  \/  MM   \/  SB  \/  US-220 \/ US-58",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemUS220US58",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemUS220US58\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemUS220US58",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.91569",
                "36.64842"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "3",
              "id": "86383",
              "jurisdiction": "Salem",
              "route": "US-220",
              "description": "US-220  \/  MM   \/  SB  \/  US-220 BP \/ US-58 Bus",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemUS220BPUS58Bus",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemUS220BPUS58Bus\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemUS220BPUS58Bus",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.009983",
                "37.337183"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "143",
              "id": "86412",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 143  \/  SB  \/  I-81 MM 143",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM143",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM143\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM143",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.81245",
                "37.468"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "158",
              "id": "86463",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 158  \/  NB  \/  I-81 MM 158",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM158",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM158\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM158",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.78233",
                "37.48056"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "159",
              "id": "86476",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 159  \/  NB  \/  I-81 MM 159",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM159",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM159\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM159",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.76263",
                "37.49248"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "161",
              "id": "86491",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 161  \/  NB  \/  I-81 MM 161",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM161",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM161\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM161",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.749659",
                "37.49874"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "162",
              "id": "86502",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 162  \/  NB  \/  I-81 MM 162",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM162",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM162\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM162",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-79.71471",
                "37.52134"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "164",
              "id": "86515",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 164  \/  NB  \/  I-81 MM 164",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM164",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM164\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM164",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.24129",
                "37.22837"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "128",
              "id": "86546",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 128  \/  NB  \/  I-81 MM 128",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM128",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM128\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM128",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.23619",
                "37.23446"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "128.4",
              "id": "86561",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 128.4  \/  NB  \/  I-81 MM 128.4",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM1284",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM1284\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM1284",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.21427",
                "37.24204"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "129.7",
              "id": "86576",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 129.7  \/  NB  \/  I-81 MM 129.7",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM1297",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM1297\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM1297",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.16985",
                "37.25995"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "132",
              "id": "86591",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 132  \/  SB  \/  I-81 MM 132",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM132",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM132\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM132",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.137338",
                "37.277239"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "134",
              "id": "86607",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 134  \/  SB  \/  I-81 MM 134",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM134",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM134\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM134",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.09491",
                "37.29458"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "137",
              "id": "86619",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 137  \/  NB  \/  I-81 MM 137",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM137",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM137\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM137",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.08225",
                "37.2983"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "138",
              "id": "86634",
              "jurisdiction": "Salem",
              "route": "I-81",
              "description": "I-81  \/  MM 138  \/  NB  \/  I-81 MM 138",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM138",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM138\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemI81MM138",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.59769",
                "37.65239"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "178.5",
              "id": "86647",
              "jurisdiction": "Richmond",
              "route": "I-64",
              "description": "I-64  \/  MM 178.5  \/  WB  \/  Short Pump West",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064WB1785",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064WB1785\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064WB1785",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.42324",
                "37.19881"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "66",
              "id": "86663",
              "jurisdiction": "Richmond",
              "route": "I-85",
              "description": "I-85  \/  MM 66  \/  NB  \/  Squirrel Level",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS085NB0660",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS085NB0660\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS085NB0660",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.223589",
                "37.515628"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "203.4",
              "id": "86677",
              "jurisdiction": "Richmond",
              "route": "I-64",
              "description": "I-64 EB MM 203.4 Near Bottoms Bridge",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064EB2034",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064EB2034\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS064EB2034",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.637498",
                "37.449713"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "14.7",
              "id": "86690",
              "jurisdiction": "Richmond",
              "route": "VA-288",
              "description": "VA-288 SB MM 14.7 Near Genito Road Overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS288SB0147",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS288SB0147\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS288SB0147",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.468591",
                "37.93434"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "104.4",
              "id": "86705",
              "jurisdiction": "Richmond",
              "route": "I-95",
              "description": "I-95 NB MM 104.4 at Carmel Church Exit",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095NB1044",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095NB1044\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095NB1044",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.392562",
                "37.302751"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "57.6",
              "id": "86717",
              "jurisdiction": "Richmond",
              "route": "I-95",
              "description": "I-95 SB MM 57.6 South of Woods Edge Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0576",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0576\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/RichmondCS095SB0576",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.288594444444",
                "36.834697222222"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "8.65",
              "id": "86731",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264 \/ MM  \/ WB \/ I-264 @ Downtown Tunnel (West Tower Cam)",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/HamptonRds1207",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/HamptonRds1207\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/HamptonRds1207",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-81.06737",
                "36.97049"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "40",
              "id": "93878",
              "jurisdiction": "Salem",
              "route": "I-77",
              "description": "I-77 \/ MM 40 \/ NB",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemI77MM40",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemI77MM40\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemI77MM40",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-81.07257",
                "36.9835"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "43",
              "id": "93879",
              "jurisdiction": "Salem",
              "route": "I-77",
              "description": "I-77 \/ MM 43 \/ NB",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemI77MM43",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemI77MM43\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemI77MM43",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-81.13396",
                "37.18323"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "59.8",
              "id": "93880",
              "jurisdiction": "Salem",
              "route": "I-77",
              "description": "I-77 \/ MM 59.8 \/ SB",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemI77MM598",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemI77MM598\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemI77MM598",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-81.11209",
                "37.24134"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "65.2",
              "id": "93881",
              "jurisdiction": "Salem",
              "route": "I-77",
              "description": "I-77 \/ MM 65.2 \/ SB",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemI77MM652",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemI77MM652\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemI77MM652",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-81.137565",
                "37.043305"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "48.3",
              "id": "93955",
              "jurisdiction": "Salem",
              "route": "I-77",
              "description": "I-77 \/ MM 48.3 \/ Big Walker Mountain Tunnel North End",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/BigWalkerMtTunnelNE",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/BigWalkerMtTunnelNE\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/BigWalkerMtTunnelNE",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-81.130688",
                "37.038882"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "47.9",
              "id": "93956",
              "jurisdiction": "Salem",
              "route": "I-77",
              "description": "I-77 \/ MM 47.9 \/ Big Walker Mountain Tunnel Cam 6 South bound",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/BigWalkerMtTunnelSB",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/BigWalkerMtTunnelSB\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/BigWalkerMtTunnelSB",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-81.12561",
                "37.035139"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "47.5",
              "id": "93957",
              "jurisdiction": "Salem",
              "route": "I-77",
              "description": "I-77 \/ MM 47.5 \/ Big Walker Mountain Tunnel South End",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/BigWalkerMtTunnelSE",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/BigWalkerMtTunnelSE\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/BigWalkerMtTunnelSE",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-81.131082",
                "37.038527"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "47.9",
              "id": "93968",
              "jurisdiction": "Salem",
              "route": "I-77",
              "description": "I-77 \/ MM 47.9 \/ Big Walker Mountain Tunnel North Bound",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/BigWalkerMtTunnelNB",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/BigWalkerMtTunnelNB\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/BigWalkerMtTunnelNB",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-81.121751",
                "37.266572"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "67",
              "id": "93969",
              "jurisdiction": "Salem",
              "route": "I-77",
              "description": "I-77 \/ MM 67.0 \/ East River Mountain Tunnel South End",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/EastRiverMtTunnelSE",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/EastRiverMtTunnelSE\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/EastRiverMtTunnelSE",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.8725",
                "36.8696"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "26",
              "id": "94881",
              "jurisdiction": "Salem",
              "route": "I-77",
              "description": "I-77 \/ MM 26 \/ SB",
              "rtmp_url": "rtmp:\/\/8.15.251.49:1935\/rtplive\/SalemI77MM26",
              "ios_url": "http:\/\/8.15.251.49:1935\/rtplive\/SalemI77MM26\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.49:1935\/rtplive\/SalemI77MM26",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.53636",
                "37.15262"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "251.98",
              "id": "85212",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 251.98  \/  WB  \/  1.5 Mi past Denbigh Blvd overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads835",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads835\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads835",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.53979",
                "37.15807"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "251.56",
              "id": "85221",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 251.56  \/  WB  \/  2.0 Mi past Denbigh Blvd overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads836",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads836\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads836",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.54213",
                "37.16048"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "251.38",
              "id": "85232",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 251.38  \/  EB  \/  just past Industrial Park Dr",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads837",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads837\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads837",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.54579",
                "37.16627"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "250.96",
              "id": "85246",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 250.96  \/  WB  \/  1.0 Mi before Ft Eustis Blvd",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads838",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads838\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads838",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.55122",
                "37.17237"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "250.4",
              "id": "85264",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 250.4  \/  EB  \/  just past Exit 250B",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads839",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads839\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads839",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.5521",
                "37.17488"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "250.23",
              "id": "85281",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 250.23  \/  EB  \/  AT Fort Eustis Blvd overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads840",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads840\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads840",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.55521",
                "37.18247"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "249.69",
              "id": "85293",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 249.69  \/  WB  \/  0.6 Mi past Fort Eustis Blvd overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads841",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads841\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads841",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.56133",
                "37.18979"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "249.08",
              "id": "85310",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 249.08  \/  EB  \/  1.0 Mi before Ft Eustis Blvd",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads842",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads842\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads842",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.56182",
                "37.19098"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "248.99",
              "id": "85324",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 248.99  \/  WB  \/  1.0 MI before Yorktown Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads843",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads843\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads843",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.56668",
                "37.19691"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "248.37",
              "id": "85338",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 248.37  \/  WB  \/  0.5 MI before Yorktown Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads844",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads844\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads844",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.56742",
                "37.19731"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "248.33",
              "id": "85354",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 248.33  \/  EB  \/  0.6 Mi past Yorktown Rd overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads845",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads845\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads845",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.5697",
                "37.20017"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "248.07",
              "id": "85372",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 248.07  \/  EB  \/  0.4 Mi past Yorktown Rd overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads846",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads846\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads846",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.57439",
                "37.20451"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "247.84",
              "id": "85381",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 247.84  \/  EB  \/  just past Yorktown Rd overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads847",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads847\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads847",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.57402",
                "37.20507"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "247.83",
              "id": "85391",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 247.83  \/  WB  \/  AT Yorktown Rd overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads848",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads848\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads848",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.57515",
                "37.20585"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "247.71",
              "id": "85405",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 247.71  \/  WB  \/  just past Yorktown Rd overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads849",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads849\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads849",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.57796",
                "37.20702"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "247.57",
              "id": "85420",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 247.57  \/  EB  \/  1.2 Mi past Exit 247",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads850",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads850\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads850",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.58269",
                "37.20972"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "247.24",
              "id": "85439",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 247.24  \/  EB  \/  1.0 Mi past Exit 247",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads851",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads851\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads851",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.58776",
                "37.21324"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "246.85",
              "id": "85446",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 246.85  \/  WB  \/  just past Jefferson Ave overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads852",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads852\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads852",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.59077",
                "37.21442"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "246.65",
              "id": "85463",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 246.65  \/  EB  \/  0.3 Mi past Exit 247",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads853",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads853\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads853",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.60435",
                "37.21781"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "245.89",
              "id": "85488",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 245.89  \/  EB  \/  0.3 Mi before Exit 247",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads855",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads855\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads855",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.60855",
                "37.21971"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "245.63",
              "id": "85505",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 245.63  \/  EB  \/  0.5 Mi before Exit 247",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads856",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads856\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads856",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.6139",
                "37.22415"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "245.22",
              "id": "85520",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 245.22  \/  WB  \/  AT Boundry Rd overpass (NWS Gate 13)",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads857",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads857\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads857",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.6204",
                "37.22857"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "244.79",
              "id": "85538",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 244.79  \/  EB  \/  1.0 Mi past Exit 243B",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads858",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads858\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads858",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.63221",
                "37.23855"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "243.79",
              "id": "85565",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 243.79  \/  EB  \/  just past Exit 243B",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads860",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads860\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads860",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.63293",
                "37.24076"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "243.65",
              "id": "85581",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 243.65  \/  WB  \/  AT Exit 243A",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads861",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads861\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads861",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.63855",
                "37.24686"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "243.11",
              "id": "85603",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 243.11  \/  EB  \/  AT Exit 243A",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads862",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads862\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads862",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.63845",
                "37.24763"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "243.08",
              "id": "85619",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 243.08  \/  WB  \/  just past Exit 243A",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads863",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads863\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads863",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.6455",
                "37.25739"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "242.53",
              "id": "85631",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 242.53  \/  WB  \/  just past Exit 242A",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads864",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads864\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads864",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.64896",
                "37.26122"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "242.21",
              "id": "85647",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 242.21  \/  EB  \/  AT Exit 242A",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads865",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads865\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads865",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.65237",
                "37.26747"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "241.79",
              "id": "85664",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 241.79  \/  WB  \/  0.75 Mi past Exit 242A",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads866",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads866\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads866",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.65335",
                "37.26773"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "241.77",
              "id": "85679",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 241.77  \/  EB  \/  1.0 Mi past Colonial Pkwy overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads867",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads867\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads867",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.65573",
                "37.27126"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "241.5",
              "id": "85689",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 241.5  \/  WB  \/  1.0 Mi past Exit 242A",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads868",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads868\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads868",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.65716",
                "37.27193"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "241.4",
              "id": "85704",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 241.4  \/  EB  \/  0.5 Mi past Colonial Pkwy overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads869",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads869\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads869",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.65992",
                "37.27441"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "241.18",
              "id": "85722",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 241.18  \/  EB  \/  0.3 Mi past Colonial Pkwy overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads870",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads870\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads870",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.34781",
                "36.81565"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "4.16",
              "id": "85737",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 4.16  \/  WB  \/  AT PORTSMOUTH BLVD",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads211",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads211\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads211",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.34322",
                "36.81867"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "4.48",
              "id": "85752",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 4.48  \/  EB  \/  AFTER PORTSMOUTH BLVD",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads212",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads212\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads212",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.33858",
                "36.82115"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "4.87",
              "id": "85767",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 4.87  \/  WB  \/  AT FREDERICK BLVD",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads213",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads213\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads213",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.3332",
                "36.82242"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "5.12",
              "id": "85780",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 5.12  \/  WB  \/  AT FREDERICK BLVD",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads214",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads214\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads214",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.32572",
                "36.82672"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "5.62",
              "id": "85798",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 5.62  \/  WB  \/  BEFORE FREDERICK BLVD",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads215",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads215\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads215",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.31643",
                "36.82927"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "6.19",
              "id": "85815",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 6.19  \/  WB  \/  AFTER EFFINGHAM ST",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads216",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads216\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads216",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.30968",
                "36.8289"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "6.54",
              "id": "85824",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 6.54  \/  EB  \/  BEFORE EFFINGHAM ST",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads217",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads217\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads217",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.30415",
                "36.83117"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "6.89",
              "id": "85845",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 6.89  \/  WB  \/  BEFORE EFFINGHAM ST",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads218",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads218\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads218",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.2834",
                "36.84606"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "8.6",
              "id": "85862",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 8.6  \/  WB  \/  AT E. CITY HALL AVE",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads219",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads219\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads219",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.27766",
                "36.84523"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "8.93",
              "id": "85876",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 8.93  \/  WB  \/  AT TIDEWATER",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads220",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads220\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads220",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.39817",
                "36.78904"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "0.26",
              "id": "85889",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 0.26  \/  WB  \/  AT I 64 AND I 664 INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads201",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads201\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads201",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.39605",
                "36.78739"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "0.27",
              "id": "85904",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 0.27  \/  EB  \/  AT I 64 AND I 664 INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads202",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads202\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads202",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.39469",
                "36.79016"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "0.45",
              "id": "85917",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 0.45  \/  EB  \/  AT I 64 AND I 664 INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads203",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads203\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads203",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.39489",
                "36.79127"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "0.51",
              "id": "85934",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 0.51  \/  WB  \/  AT I 64 AND I 664 INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads204",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads204\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads204",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.3894",
                "36.79419"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "0.86",
              "id": "85949",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 0.86  \/  WB  \/  PAST GREENWOOD DR.",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads205",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads205\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads205",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.37983",
                "36.79828"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "1.47",
              "id": "85964",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 1.47  \/  EB  \/  AT GREENWOOD DR.",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads206",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads206\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads206",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.37411",
                "36.80165"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "1.86",
              "id": "85979",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 1.86  \/  WB  \/  BEFORE GREENWOOD DR.",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads207",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads207\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads207",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.36607",
                "36.80499"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "2.35",
              "id": "85994",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 2.35  \/  WB  \/  PAST VICTORY BLVD.",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads208",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads208\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads208",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.35613",
                "36.80789"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "3.45",
              "id": "86008",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 3.45  \/  EB  \/  AT VICTORY BLVD INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads209",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads209\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads209",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.35129",
                "36.81074"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "3.77",
              "id": "86024",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 3.77  \/  EB  \/  BEFORE PORTSMOUTH BLVD",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads210",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads210\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads210",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.27296",
                "36.7696"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "2.23",
              "id": "86039",
              "jurisdiction": "Hampton Roads",
              "route": "I-464",
              "description": "I-464  \/  MM 2.23  \/  SB  \/  AFTER MILITARY HIGHWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads403",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads403\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads403",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.27493",
                "36.77249"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "2.45",
              "id": "86053",
              "jurisdiction": "Hampton Roads",
              "route": "I-464",
              "description": "I-464  \/  MM 2.45  \/  NB  \/  BEFORE MILITARY HIGHWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads404",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads404\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads404",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.27755",
                "36.77517"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "2.67",
              "id": "86068",
              "jurisdiction": "Hampton Roads",
              "route": "I-464",
              "description": "I-464  \/  MM 2.67  \/  NB  \/  AT MILITARY HIGHWAY INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads405",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads405\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads405",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.28341",
                "36.78045"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "3.17",
              "id": "86083",
              "jurisdiction": "Hampton Roads",
              "route": "I-464",
              "description": "I-464  \/  MM 3.17  \/  SB  \/  BEFORE MILITARY HIGHWAY  HIGHWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads406",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads406\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads406",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.2854",
                "36.78618"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "3.58",
              "id": "86098",
              "jurisdiction": "Hampton Roads",
              "route": "I-464",
              "description": "I-464  \/  MM 3.58  \/  SB  \/  AT FREEMAN AVE INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads407",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads407\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads407",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.2839",
                "36.79121"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "3.94",
              "id": "86114",
              "jurisdiction": "Hampton Roads",
              "route": "I-464",
              "description": "I-464  \/  MM 3.94  \/  SB  \/  BEFORE FREEMAN AVE",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads408",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads408\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads408",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.28234",
                "36.79311"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "4.1",
              "id": "86129",
              "jurisdiction": "Hampton Roads",
              "route": "I-464",
              "description": "I-464  \/  MM 4.1  \/  NB  \/  AFTER FREEMAN AVE",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads409",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads409\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads409",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.28051",
                "36.79894"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "4.5",
              "id": "86143",
              "jurisdiction": "Hampton Roads",
              "route": "I-464",
              "description": "I-464  \/  MM 4.5  \/  NB  \/  BEFORE FREEMAN AVE",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads410",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads410\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads410",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.27949",
                "36.80383"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "4.84",
              "id": "86157",
              "jurisdiction": "Hampton Roads",
              "route": "I-464",
              "description": "I-464  \/  MM 4.84  \/  NB  \/  BEFORE POINDEXTER ST",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads411",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads411\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads411",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.27903",
                "36.80725"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "5.08",
              "id": "86171",
              "jurisdiction": "Hampton Roads",
              "route": "I-464",
              "description": "I-464  \/  MM 5.08  \/  NB  \/  BEFORE POINDEXTER ST",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads412",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads412\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads412",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.38816",
                "36.77872"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "299.24",
              "id": "86185",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 299.24  \/  WB  \/  OL PAST I-264 AND I-664 INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads708",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads708\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads708",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.38381",
                "36.7784"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "299",
              "id": "86199",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 299  \/  EB  \/  IL PAST MILITARY HIGHWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads709",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads709\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads709",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.38104",
                "36.77731"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "298.82",
              "id": "86219",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 298.82  \/  WB  \/  OL BEFORE MILITARY HIGHWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads710",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads710\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads710",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.37827",
                "36.7773"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "298.66",
              "id": "86236",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 298.66  \/  EB  \/  IL PAST MILITARY HIGHWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads711",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads711\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads711",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.37533",
                "36.77611"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "298.49",
              "id": "86254",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 298.49  \/  WB  \/  OL BEFORE MILITARY HIGHWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads712",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads712\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads712",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.37174",
                "36.77598"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "298.3",
              "id": "86266",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 298.3  \/  EB  \/  IL PAST MILITARY HIGHWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads713",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads713\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads713",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.36938",
                "36.77461"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "298.14",
              "id": "86282",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 298.14  \/  WB  \/  OL AT MILITARY HIGHWAY  EXIT",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads714",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads714\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads714",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.36782",
                "36.77382"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "298.03",
              "id": "86297",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 298.03  \/  WB  \/  OL AT MILITARY HIGHWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads715",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads715\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads715",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.36736",
                "36.77438"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "298.02",
              "id": "86311",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 298.02  \/  EB  \/  IL AT MILITARY HIGHWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads716",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads716\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads716",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.36624",
                "36.77271"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "297.91",
              "id": "86328",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 297.91  \/  WB  \/  OL AT MILITARY HIGHWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads717",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads717\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads717",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.34718",
                "37.03444"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "266",
              "id": "86341",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 266  \/  WB  \/  OL BEFORE RIP RAP ROAD",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads805",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads805\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads805",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.35701",
                "37.03508"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "265.5",
              "id": "86356",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 265.5  \/  WB  \/  OL BEFORE ARMISTEAD AVE",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads806",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads806\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads806",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.36314",
                "37.03356"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "265",
              "id": "86369",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 265  \/  WB  \/  OL  AT LA SALLE AVE",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads807",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads807\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads807",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.36977",
                "37.03163"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "264.5",
              "id": "86388",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 264.5  \/  EB  \/  IL BEFORE LA SALLE AVE",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads808",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads808\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads808",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.37677",
                "37.03151"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "264",
              "id": "86407",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 264  \/  WB  \/  TO I-664 INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads809",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads809\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads809",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.41666",
                "37.05891"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "261.8",
              "id": "86420",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 261.8  \/  WB  \/  AT Hampton Roads Center Pkwy overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads816",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads816\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads816",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.42744",
                "37.066"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "261.05",
              "id": "86437",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 261.05  \/  WB  \/  AT Big Bethel Rd overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads817",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads817\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads817",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.43733",
                "37.07171"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "260.3",
              "id": "86454",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 260.3  \/  WB  \/  0.6 Mi past Big Bethel Rd overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads818",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads818\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads818",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.44487",
                "37.0757"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "259.74",
              "id": "86471",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 259.74  \/  EB  \/  0.8 Mi past Harpersville Rd overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads819",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads819\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads819",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.45327",
                "37.08306"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "259.08",
              "id": "86485",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 259.08  \/  EB  \/  past Harpersville Rd overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads820",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads820\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads820",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.3518",
                "36.75919"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "296.63",
              "id": "86499",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 296.63  \/  EB  \/  IL PAST GEORGE WASHINGTON  HIGHWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads728",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads728\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads728",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.35015",
                "36.75828"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "296.54",
              "id": "86513",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 296.54  \/  WB  \/  OL BEFORE GEORGE WASHINGTON  HIGHWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads729",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads729\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads729",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.34483",
                "36.75838"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "296.28",
              "id": "86528",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 296.28  \/  WB  \/  OL AT GEORGE WASHINGTON  HIGHWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads730",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads730\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads730",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.33881",
                "36.7591"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "295.87",
              "id": "86542",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 295.87  \/  EB  \/  IL BEFORE GEORGE WASHINGTON  HIGHWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads731",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads731\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads731",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.33402",
                "36.75898"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "295.61",
              "id": "86557",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 295.61  \/  WB  \/  OL PAST GEORGE WASHINGTON  HIGHWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads732",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads732\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads732",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.32754",
                "36.75974"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "295.24",
              "id": "86570",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 295.24  \/  EB  \/  IL PAST HIGH-RISE BRIDGE",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads733",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads733\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads733",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.32046",
                "36.75984"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "294.89",
              "id": "86584",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 294.89  \/  EB  \/  IL PAST HIGH-RISE BRIDGE",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads734",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads734\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads734",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.31148",
                "36.75895"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "294.38",
              "id": "86599",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 294.38  \/  WB  \/  OL BEFORE HIGH-RISE BRIDGE",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads735",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads735\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads735",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.30491",
                "36.75849"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "293.99",
              "id": "86616",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 293.99  \/  WB  \/  OL AT HIGH-RISE BRIDGE",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads736",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads736\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads736",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.29574",
                "36.75801"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "294",
              "id": "86631",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 294  \/  EB  \/  IL AT HIGHRISE BRIDGE",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads737",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads737\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads737",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.70489",
                "37.32859"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "236.44",
              "id": "86646",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 236.44  \/  EB  \/  just past Barlow Rd overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads881",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads881\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads881",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.71335",
                "37.33692"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "235.68",
              "id": "86659",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 235.68  \/  WB  \/  0.7 Mi past Barlow Rd overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads882",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads882\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads882",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.71742",
                "37.33971"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "235.38",
              "id": "86674",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 235.38  \/  EB  \/  1.4 Mi past Exit 234",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads883",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads883\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads883",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.72553",
                "37.3479"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "234.79",
              "id": "86687",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 234.79  \/  WB  \/  AT Exit 234B",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads884",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads884\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads884",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.5941",
                "37.21599"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "246.48",
              "id": "91186",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 246.48  \/  WB  \/  0.4 Mi past Exit 247",
              "rtmp_url": "rtmp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads854",
              "ios_url": "http:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads854\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.50:1935\/rtplive\/HamptonRoads854",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.43402",
                "36.83847"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "15.4",
              "id": "85213",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664  \/  MM 15.4  \/  SB  \/  OL PAST PUGHSVILLE RD. EXIT",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads614",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads614\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads614",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.43354",
                "36.84867"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "14.69",
              "id": "85222",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664  \/  MM 14.69  \/  SB  \/  OL AT PUGHSVILLE RD. INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads615",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads615\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads615",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.43103",
                "36.85289"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "14.38",
              "id": "85231",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664  \/  MM 14.38  \/  NB  \/  IL PAST PUGHSVILLE RD.",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads616",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads616\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads616",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.43041",
                "36.85828"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "14.01",
              "id": "85245",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664  \/  MM 14.01  \/  NB  \/  IL BEFORE WESTERN FREEWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads617",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads617\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads617",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.43137",
                "36.85875"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "14",
              "id": "85259",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664  \/  MM 14  \/  SB  \/  OL PAST WESTERN FREEWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads618",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads618\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads618",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.43287",
                "36.86782"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "13.35",
              "id": "85274",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664  \/  MM 13.35  \/  SB  \/  OL AT WESTERN FWY INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads619",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads619\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads619",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.43359",
                "36.87654"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "12.75",
              "id": "85285",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664 \/ MM 12.75 \/ SB \/ OL AT TOWNE POINT RD",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads620",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads620\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads620",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.42563",
                "36.89726"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "11.21",
              "id": "85298",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664  \/  MM 11.21  \/  SB  \/  OL PAST MMBT BRIDGE",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads621",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads621\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads621",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.4252",
                "36.9825"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "6",
              "id": "85313",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664  \/  MM 6  \/  NB  \/  IL AT 28TH ST",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads622",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads622\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads622",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.42707",
                "36.98623"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "5.5",
              "id": "85326",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664  \/  MM 5.5  \/  NB  \/  IL AT 35TH STREET",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads623",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads623\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads623",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.42466",
                "36.99092"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "5",
              "id": "85335",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664  \/  MM 5  \/  SB  \/  OL AT 39TH STREET",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads624",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads624\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads624",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.41639",
                "36.99555"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "4.5",
              "id": "85349",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664  \/  MM 4.5  \/  SB  \/  OL AT ROANOKE AVE",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads625",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads625\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads625",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.40824",
                "36.99855"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "4",
              "id": "85363",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664  \/  MM 4  \/  NB  \/  IL BEFORE ABERDEEN ROAD",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads626",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads626\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads626",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.40309",
                "37.00429"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "3.5",
              "id": "85377",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664  \/  MM 3.5  \/  SB  \/  OL AT ABERDEEN ROAD",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads627",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads627\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads627",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.39847",
                "37.00908"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "3",
              "id": "85397",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664  \/  MM 3  \/  SB  \/  OL BEFORE ABERDEEN ROAD EXIT",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads628",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads628\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads628",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.39285",
                "37.01309"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "2.5",
              "id": "85414",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664  \/  MM 2.5  \/  SB  \/  OL PAST POWHATAN AND",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads629",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads629\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads629",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.38654",
                "37.01579"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "2",
              "id": "85427",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664  \/  MM 2  \/  NB  \/  IL AT POWHATAN PKWY",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads630",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads630\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads630",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.38254",
                "37.01955"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "1.5",
              "id": "85441",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664  \/  MM 1.5  \/  NB  \/  IL PAST POWHATAN PKWY",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads631",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads631\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads631",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.37905",
                "37.02622"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "1",
              "id": "85454",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664  \/  MM 1  \/  NB  \/  IL BEFORE SPLIT TO I-64 IL",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads632",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads632\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads632",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.39982",
                "36.78753"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "0.12",
              "id": "85469",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 0.12  \/  EB  \/  AT I-64 AND I-664 INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads701",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads701\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads701",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.39906",
                "36.78607"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "300.05",
              "id": "85479",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 300.05  \/  WB  \/  OL ON RAMP FROM I-664 OL",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads702",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads702\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads702",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.39573",
                "36.78564"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "299.88",
              "id": "85494",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 299.88  \/  EB  \/  IL AT I-264 AND I-664 INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads703",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads703\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads703",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.39676",
                "36.78502"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "299.87",
              "id": "85510",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 299.87  \/  WB  \/  OL ON RAMP FROM I-264 WB",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads704",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads704\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads704",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.39306",
                "36.78093"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "299.53",
              "id": "85525",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 299.53  \/  WB  \/  OL PAST I-264 AND I-664 INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads705",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads705\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads705",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.38938",
                "36.77982"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "299.33",
              "id": "85553",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 299.33  \/  EB  \/  IL BEFORE I-264 AND I-664 INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads707",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads707\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads707",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.36422",
                "36.77178"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "297.8",
              "id": "85570",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 297.8  \/  EB  \/  IL AT MILITARY HIGHWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads718",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads718\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads718",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.36456",
                "36.77102"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "297.75",
              "id": "85585",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 297.75  \/  WB  \/  OL AT MILITARY HIGHWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads719",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads719\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads719",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.36335",
                "36.76919"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "297.61",
              "id": "85598",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 297.61  \/  WB  \/  OL AT MILITARY HIGHWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads720",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads720\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads720",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.36055",
                "36.76615"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "297.35",
              "id": "85615",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 297.35  \/  EB  \/  IL BEFORE MILITARY HIGHWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads721",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads721\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads721",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.3592",
                "36.76403"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "297.19",
              "id": "85633",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 297.19  \/  EB  \/  IL BEFORE MILITARY HIGHWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads722",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads722\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads722",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.35952",
                "36.76289"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "297.13",
              "id": "85646",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 297.13  \/  WB  \/  OL PAST MILITARY HIGHWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads723",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads723\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads723",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.35654",
                "36.76137"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "296.95",
              "id": "85665",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 296.95  \/  EB  \/  IL PAST GEORGE WASHINGTON  HIGHWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads724",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads724\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads724",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.35691",
                "36.76063"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "296.94",
              "id": "85680",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 296.94  \/  WB  \/  OL BEFORE GEORGE WASHINGTON  HIGHWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads725",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads725\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads725",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.35376",
                "36.75986"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "296.76",
              "id": "85691",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 296.76  \/  EB  \/  IL PAST GEORGE WASHINGTON  HIGHWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads726",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads726\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads726",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.35393",
                "36.75918"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "296.75",
              "id": "85705",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 296.75  \/  WB  \/  OL BEFORE GEORGE WASHINGTON  HIGHWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads727",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads727\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads727",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.28754",
                "36.75764"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "293.5",
              "id": "85720",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 293.5  \/  EB  \/  IL BEFORE HIGH RISE BRIDGE",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads738",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads738\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads738",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.28223",
                "36.75747"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "293",
              "id": "85733",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 293  \/  WB  \/  OL PAST HIGH RISE BRIDGE",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads739",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads739\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads739",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.27441",
                "36.75867"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "292.5",
              "id": "85749",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 292.5  \/  WB  \/  OL BEFORE I-464 INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads740",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads740\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads740",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.26839",
                "36.76281"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "292",
              "id": "85763",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 292  \/  EB  \/  AT I-464 INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads741",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads741\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads741",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.2637",
                "36.7659"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "291.5",
              "id": "85778",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 291.5  \/  WB  \/  past I-464",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads742",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads742\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads742",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.2599",
                "36.769"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "291",
              "id": "85793",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 291  \/  WB  \/  before Battlefield Blvd",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads743",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads743\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads743",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.2531",
                "36.772"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "290",
              "id": "85811",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 290  \/  NB  \/  Battlefield Blvd @ ramp to I-64 wb",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads744",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads744\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads744",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.255",
                "36.7744"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "290",
              "id": "85825",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 290  \/  EB  \/  AT Battlefield Blvd overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads745",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads745\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads745",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.2482",
                "36.7779"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "289.5",
              "id": "85838",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 289.5  \/  EB  \/  AT RR bridge (between Greenbrier Pkwy & Battlefield Blvd)",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads746",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads746\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads746",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.23998",
                "36.78183"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "289",
              "id": "85856",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 289  \/  EB  \/  past Greenbrier Pkwy",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads747",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads747\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads747",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.23359",
                "36.784"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "288.5",
              "id": "85871",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 288.5  \/  WB  \/  AT GREENBRIER OVERPASS",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads748",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads748\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads748",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.22527",
                "36.78799"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "288",
              "id": "85886",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 288  \/  WB  \/  OL GREENBRIER CD LANES",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads749",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads749\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads749",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.2169",
                "36.79196"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "287.5",
              "id": "85900",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 287.5  \/  WB  \/  OL PAST GREENBRIER PKWY",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads750",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads750\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads750",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.2085",
                "36.796"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "287",
              "id": "85915",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 287  \/  WB  \/  OL BEFORE INDIAN RIVER",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads751",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads751\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads751",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.20008",
                "36.80071"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "286.5",
              "id": "85929",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 286.5  \/  WB  \/  OL BEFORE INDIAN RIVER",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads752",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads752\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads752",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.19498",
                "36.80739"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "286",
              "id": "85944",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 286  \/  WB  \/  OL INDIAN RIVER ROAD",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads753",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads753\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads753",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.19452",
                "36.81359"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "285.5",
              "id": "85960",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 285.5  \/  EB  \/  OL PAST INDIAN RIVER ROAD",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads754",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads754\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads754",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.19457",
                "36.82146"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "285",
              "id": "85975",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 285  \/  WB  \/  OL TWIN BRIDGES & PROVIDENCE",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads755",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads755\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads755",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.19534",
                "36.83054"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "284.5",
              "id": "85990",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 284.5  \/  WB  \/  OL TWIN BRIDGES",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads756",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads756\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads756",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.19604",
                "36.83679"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "284",
              "id": "86006",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 284  \/  WB  \/  OL BEFORE I-264 INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads757",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads757\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads757",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.1962",
                "36.84322"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "284",
              "id": "86020",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 284  \/  WB  \/  OL AT I-264 INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads758",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads758\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads758",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.19659",
                "36.84712"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "284",
              "id": "86035",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 284  \/  EB  \/  IL AT I-264 INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads759",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads759\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads759",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.1956",
                "36.85037"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "284",
              "id": "86050",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 284  \/  WB  \/  OL AT I-264 INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads760",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads760\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads760",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.19533",
                "36.85751"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "283.5",
              "id": "86065",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 283.5  \/  WB  \/  OL PAST I 64 INTERCHANGE.",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads761",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads761\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads761",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.19475",
                "36.86532"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "283",
              "id": "86081",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 283  \/  WB  \/  OL BEFORE NORTHAMPTON BLVD",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads762",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads762\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads762",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.19658",
                "36.87432"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "282.5",
              "id": "86095",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 282.5  \/  WB  \/  OL AT NORTHAMPTON BLVD",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads763",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads763\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads763",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.20676",
                "36.88068"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "282",
              "id": "86111",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 282  \/  WB  \/  OL PAST NORTHAMPTON BLVD",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads764",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads764\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads764",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.21658",
                "36.88275"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "281.5",
              "id": "86126",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 281.5  \/  WB  \/  OL AT MILITARY HIGHWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads765",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads765\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads765",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.226",
                "36.88529"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "281",
              "id": "86140",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 281  \/  EB  \/  IL PAST NORVIEW AVE",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads766",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads766\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads766",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.23148",
                "36.89111"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "280.5",
              "id": "86156",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 280.5  \/  EB  \/  IL OL AT NORVIEW AVE",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads767",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads767\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads767",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.23449",
                "36.89936"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "280",
              "id": "86173",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 280  \/  WB  \/  OL BEFORE CHESAPEAKE BLVD",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads768",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads768\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads768",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.23844",
                "36.90329"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "279.5",
              "id": "86188",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 279.5  \/  WB  \/  OL AT CHESAPEAKE BLVD",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads769",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads769\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads769",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.24714",
                "36.90307"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "279",
              "id": "86203",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 279  \/  EB  \/  IL BEFORE CHESAPEAKE BLVD",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads770",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads770\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads770",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.25498",
                "36.90492"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "278.5",
              "id": "86214",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 278.5  \/  EB  \/  IL AT TIDEWATER DRIVE",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads771",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads771\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads771",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.2623",
                "36.91201"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "278",
              "id": "86233",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 278  \/  WB  \/  OL PAST TIDEWATER DRIVE",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads772",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads772\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads772",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.26872",
                "36.91755"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "277.5",
              "id": "86247",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 277.5  \/  WB  \/  OL AT I-564 INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads773",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads773\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads773",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.27088",
                "36.92239"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "277",
              "id": "86260",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 277  \/  EB  \/  NORVIEW AVENUE \/ NORFOLK NAVAL BASE",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads774",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads774\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads774",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.26851",
                "36.92801"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "276.5",
              "id": "86271",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 276.5  \/  WB  \/  OL AT GRANBY STREET",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads775",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads775\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads775",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.26601",
                "36.93298"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "276",
              "id": "86286",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 276  \/  WB  \/  OL PAST GRANBY STREET",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads776",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads776\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads776",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.26495",
                "36.93781"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "275.5",
              "id": "86302",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 275.5  \/  WB  \/  OL BEFORE BAY AVE",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads777",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads777\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads777",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.26685",
                "36.94315"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "275",
              "id": "86317",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 275  \/  EB  \/  IL AT BAY AVE",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads778",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads778\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads778",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.26652",
                "36.94755"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "274.5",
              "id": "86332",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 274.5  \/  EB  \/  IL BEFORE BAY AVE",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads779",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads779\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads779",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.26466",
                "36.95277"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "274",
              "id": "86347",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 274  \/  WB  \/  OL BEFORE 4TH VIEW",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads780",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads780\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads780",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.26424",
                "36.95801"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "273.5",
              "id": "86359",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 273.5  \/  WB  \/  OL AT 4TH VIEW",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads781",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads781\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads781",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.27",
                "36.96263"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "273",
              "id": "86374",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 273  \/  WB  \/  OL PAST 4TH VIEW",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads782",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads782\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads782",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.28703",
                "36.96528"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "272.5",
              "id": "86385",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 272.5  \/  WB  \/  OL  AT 13TH VIEW",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads783",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads783\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads783",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.32698",
                "37.01602"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "268",
              "id": "86400",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 268  \/  WB  \/  OL AT MALLORY ST",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads801",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads801\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads801",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.32933",
                "37.02344"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "267.5",
              "id": "86415",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 267.5  \/  WB  \/  OL  PAST MALLORY ST",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads802",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads802\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads802",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.33438",
                "37.02943"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "267",
              "id": "86428",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 267  \/  EB  \/  IL BEFORE SETTLERS LANDING ROAD",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads803",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads803\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads803",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.34114",
                "37.03332"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "266.5",
              "id": "86440",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 266.5  \/  WB  \/  OL BEFORE RIP RAP ROAD",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads804",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads804\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads804",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.45953",
                "37.08943"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "258.48",
              "id": "86450",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 258.48  \/  EB  \/  AT J Clyde Morris overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads821",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads821\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads821",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.46384",
                "37.09398"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "258.08",
              "id": "86464",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 258.08  \/  EB  \/  just prior to Exit 258A",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads822",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads822\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads822",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.46828",
                "37.10143"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "257.5",
              "id": "86479",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 257.5  \/  WB  \/  0.25 Mi before Victory Blvd",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads823",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads823\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads823",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.47584",
                "37.10867"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "256.84",
              "id": "86494",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 256.84  \/  WB  \/  AT Victory Blvd overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads824",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads824\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads824",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.48618",
                "37.11352"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "256.19",
              "id": "86508",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 256.19  \/  WB  \/  0.5 Mi before Jefferson Ave",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads825",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads825\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads825",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.49433",
                "37.11523"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "255.68",
              "id": "86519",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 255.68  \/  WB  \/  AT Exit 255 (Jefferson Ave)",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads826",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads826\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads826",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.50264",
                "37.11598"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "255.22",
              "id": "86534",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 255.22  \/  EB  \/  AT Jefferson Ave overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads827",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads827\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads827",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.51178",
                "37.11909"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "254.7",
              "id": "86549",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 254.7  \/  EB  \/  AT Exit 255 (Jefferson Ave)",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads828",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads828\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads828",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.51761",
                "37.12516"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "254.17",
              "id": "86564",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 254.17  \/  WB  \/  AT Bland Blvd overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads829",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads829\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads829",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.52216",
                "37.13018"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "253.76",
              "id": "86579",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 253.76  \/  EB  \/  0.75 Mi before Jefferson Ave",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads830",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads830\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads830",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.5255",
                "37.13519"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "253.31",
              "id": "86594",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 253.31  \/  WB  \/   AT Denbigh Blvd overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads831",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads831\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads831",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.52914",
                "37.1399"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "252.94",
              "id": "86608",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 252.94  \/  WB  \/  0.5 Mi past Denbigh Blvd overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads832",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads832\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads832",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.5322",
                "37.14404"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "252.59",
              "id": "86620",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 252.59  \/  EB  \/  1.2 Mi past Industrial Park Dr",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads833",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads833\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads833",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.53264",
                "37.14594"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "252.49",
              "id": "86635",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 252.49  \/  WB  \/  0.9 Mi past Denbigh Blvd overpass",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads834",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads834\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads834",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.39226",
                "36.78146"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "299.52",
              "id": "91192",
              "jurisdiction": "Hampton Roads",
              "route": "I-64",
              "description": "I-64  \/  MM 299.52  \/  EB  \/  IL BEFORE I-264 AND I-664 INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads706",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads706\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoads706",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.29611",
                "36.80806"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "0",
              "id": "93443",
              "jurisdiction": "Hampton Roads",
              "route": "",
              "description": "SNJB \/ WB \/ Portsmouth Approach",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/SouthNorfolkBridgeCam1",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/SouthNorfolkBridgeCam1\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/SouthNorfolkBridgeCam1",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.29028",
                "36.80806"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "0",
              "id": "93447",
              "jurisdiction": "Hampton Roads",
              "route": "",
              "description": "SNJB \/ WB \/ West of River Channel",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/SouthNorfolkBridgeCam2",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/SouthNorfolkBridgeCam2\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/SouthNorfolkBridgeCam2",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.28917",
                "36.80833"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "0",
              "id": "93454",
              "jurisdiction": "Hampton Roads",
              "route": "",
              "description": "SNJB \/ WB \/ East of River Channel",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/SouthNorfolkBridgeCam3",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/SouthNorfolkBridgeCam3\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/SouthNorfolkBridgeCam3",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.28389",
                "36.81083"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "0",
              "id": "93461",
              "jurisdiction": "Hampton Roads",
              "route": "",
              "description": "SNJB \/ WB \/ Chesapeake Approach",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/SouthNorfolkBridgeCam4",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/SouthNorfolkBridgeCam4\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/SouthNorfolkBridgeCam4",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.422141",
                "36.867134"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "0",
              "id": "93812",
              "jurisdiction": "Hampton Roads",
              "route": "VA-164",
              "description": "VA-164 \/ EB \/ at College Dr.",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoadsWF101",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoadsWF101\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoadsWF101",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.402077",
                "36.870188"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "0",
              "id": "93813",
              "jurisdiction": "Hampton Roads",
              "route": "VA-164",
              "description": "VA-164 \/ WB \/ at Towne Point Rd.",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoadsWF102",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoadsWF102\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoadsWF102",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.393948",
                "36.872478"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "0",
              "id": "93814",
              "jurisdiction": "Hampton Roads",
              "route": "VA-164",
              "description": "VA-164 \/ WB \/ before Towne Point Rd.",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoadsWF103",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoadsWF103\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoadsWF103",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.360272",
                "36.868091"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "0",
              "id": "93815",
              "jurisdiction": "Hampton Roads",
              "route": "VA-164",
              "description": "VA-164 \/ EB \/ past APM Terminal Blvd.",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoadsWF105",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoadsWF105\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoadsWF105",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.349346",
                "36.859527"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "0",
              "id": "93816",
              "jurisdiction": "Hampton Roads",
              "route": "VA-164",
              "description": "VA-164 \/ EB \/ at W. Norfolk Bridge",
              "rtmp_url": "rtmp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoadsWF106",
              "ios_url": "http:\/\/8.15.251.51:1935\/rtplive\/HamptonRoadsWF106\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.51:1935\/rtplive\/HamptonRoadsWF106",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.055123",
                "38.794862"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "177",
              "id": "85207",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-495 \/  MM 177  \/  SB  \/  Exit 177, Route 1 - Richmond Hwy",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo0995",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo0995\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo0995",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.077195",
                "38.800799"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "0",
              "id": "85227",
              "jurisdiction": "Fairfax",
              "route": "",
              "description": "WB \/ West Bound at Telegraph Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1000",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1000\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1000",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.106031",
                "38.803196"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "174",
              "id": "85242",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 174  \/  SB  \/  Exit 174, Eisenhower Ave Connector",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1010",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1010\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1010",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.131544",
                "38.796678"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "173.2",
              "id": "85257",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-495  \/  MM 173  \/  NB  \/  Exit 173, Route 401 - VanDorn St",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1020",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1020\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1020",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.21997",
                "38.83377"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "52.2",
              "id": "85273",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495  \/  MM 52  \/  SB  \/  Exit 52, Route 236 - Little river Turnpike",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1035",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1035\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1035",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.217193",
                "38.834083"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "52.1",
              "id": "85287",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495  \/  MM 52  \/  NB  \/  Exit 52, Route 236 - Little river Turnpike",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1037",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1037\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1037",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.208449",
                "38.933742"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "45.1",
              "id": "85302",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495  \/  MM 45  \/  SB  \/  Exit 45, Route 267 - Dulles Toll Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1045",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1045\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1045",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.20305556",
                "38.94555556"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "45",
              "id": "85315",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495  \/  MM 45  \/  SB  \/  At Route 738  - Old Dominion Dr",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1050",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1050\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1050",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.19353",
                "38.95427"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "44.2",
              "id": "85330",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495  \/  MM 44  \/  NB  \/  Exit 44 Route 193 - Georgetown Pike",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1055",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1055\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1055",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.18638889",
                "38.96305556"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "44.1",
              "id": "85341",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495  \/  MM 44  \/  SB  \/  At George Washington Memorial Pkwy",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1060",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1060\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1060",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.18194444",
                "38.96361111"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "44",
              "id": "85355",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495  \/  MM 44  \/  NB  \/  At George Washington Memorial Pkwy",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1070",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1070\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1070",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.31666667",
                "38.94722222"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "2",
              "id": "85368",
              "jurisdiction": "Fairfax",
              "route": "VA-267",
              "description": "VA-267  \/  MM 49  \/  WB  \/  at Wiehle Ave",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1080",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1080\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1080",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.41807",
                "38.96489"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "1",
              "id": "85385",
              "jurisdiction": "Fairfax",
              "route": "VA-267",
              "description": "VA-267  \/  MM 49  \/  WB  \/  at Route 28  - Sully Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1090",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1090\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1090",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.2338",
                "38.922"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "57.8",
              "id": "85393",
              "jurisdiction": "Fairfax",
              "route": "VA-7",
              "description": "VA-7  \/  MM 49  \/  WB  \/  On SAIC Rooftop\/SAIC Dr",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1095",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1095\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1095",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.246716",
                "38.934223"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "56.8",
              "id": "85407",
              "jurisdiction": "Fairfax",
              "route": "VA-7",
              "description": "VA-7  \/  MM 58  \/  WB  \/  At Route 267 - Dulles Toll Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2001",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2001\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2001",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.232854",
                "38.93186"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "0",
              "id": "85419",
              "jurisdiction": "Fairfax",
              "route": "VA-684",
              "description": "VA-684 \/  \/  WB  \/  At Jones Branch Rd\/Spring Hill Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2002",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2002\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2002",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.22603",
                "38.920062"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "2",
              "id": "85429",
              "jurisdiction": "Fairfax",
              "route": "VA-123",
              "description": "VA-123  \/  MM 58  \/  WB  \/  At International Dr\/Chain Bridge Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2003",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2003\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2003",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.223823",
                "38.913847"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "58.8",
              "id": "85471",
              "jurisdiction": "Fairfax",
              "route": "VA-7",
              "description": "VA-7  \/  MM 58  \/  WB  \/  At Leesburg Pike",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2006",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2006\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2006",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.226544",
                "38.915504"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "58.5",
              "id": "85487",
              "jurisdiction": "Fairfax",
              "route": "VA-7",
              "description": "VA-7  \/  MM 58  \/  WB  \/  At International Dr\/Leesburg Pike",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2007",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2007\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2007",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.208204",
                "38.924958"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "5",
              "id": "85496",
              "jurisdiction": "Fairfax",
              "route": "VA-123",
              "description": "VA-123  \/  MM 24  \/  WB  \/  Dolley Madison\/Colshire Dr",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2008",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2008\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2008",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.175377",
                "38.791042"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "1",
              "id": "85512",
              "jurisdiction": "Fairfax",
              "route": "I-395",
              "description": "I-395  \/  MM 1  \/  SB  \/  Exit 1A, I-95 (Springfield)",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2050",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2050\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2050",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.17608",
                "38.792476"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "1.1",
              "id": "85529",
              "jurisdiction": "Fairfax",
              "route": "I-395",
              "description": "I-395  \/  MM 1  \/  SB  \/  Exit 1B, I-95 (Springfield)",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2070",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2070\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2070",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.0496",
                "38.7943"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "177.2",
              "id": "85542",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 177.2  \/  SB  \/  Washington St Urban Deck",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2080",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2080\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2080",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.0497",
                "38.7936"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "177.1",
              "id": "85559",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 177.1  \/  SB  \/  Washington St Urban Deck",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2090",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2090\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2090",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.049",
                "38.7942"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "177.4",
              "id": "85576",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 177  \/  NB  \/  Urban Deck WWB Va Side",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo3000",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo3000\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo3000",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.0491",
                "38.7935"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "177.3",
              "id": "85590",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 177  \/  NB  \/  Urban Deck WWB Va Side",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo3010",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo3010\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo3010",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.052",
                "38.7986"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "177.2",
              "id": "85605",
              "jurisdiction": "Fairfax",
              "route": "US-1",
              "description": "US-1 \/ MM 177 \/ SB \/ Franklin St",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo3020",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo3020\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo3020",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.0665",
                "38.7979"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "176.2",
              "id": "85621",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95 \/ MM 176 \/ SB \/ Telegraph Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo3030",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo3030\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo3030",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.0607",
                "38.7906"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "177",
              "id": "85642",
              "jurisdiction": "Fairfax",
              "route": "US-1",
              "description": "US -1 \/ MM 177 \/ NB \/ Fort Hunt Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo3040",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo3040\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo3040",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.057936",
                "38.794104"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "177.1",
              "id": "85655",
              "jurisdiction": "Fairfax",
              "route": "US-1",
              "description": "US-1 \/  MM 177  \/  SB  \/  I-95 N Ramp",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo3050",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo3050\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo3050",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.27343",
                "36.8446"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "9.18",
              "id": "85673",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 9.18  \/  WB  \/  BEFORE TIDEWATER",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads221",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads221\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads221",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.2682",
                "36.84464"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "11",
              "id": "85692",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 11  \/  EB  \/  AT BRAMBLETON BLVD",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads222",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads222\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads222",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.25827",
                "36.84539"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "11.5",
              "id": "85712",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 11.5  \/  EB  \/  BEFORE BALLENTINE BLVD",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads223",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads223\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads223",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.24891",
                "36.8452"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "12",
              "id": "85728",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 12  \/  EB  \/  AT BALLANTINE BLVD",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads224",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads224\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads224",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.23997",
                "36.8443"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "12.5",
              "id": "85742",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 12.5  \/  EB  \/  BEFORE BROAD CREEK BRIDGE",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads225",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads225\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads225",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.23047",
                "36.8424"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "13",
              "id": "85759",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 13  \/  WB  \/  AT BROAD CREEK BRIDGE",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads226",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads226\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads226",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.21981",
                "36.84212"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "13.5",
              "id": "85781",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 13.5  \/  WB  \/  PAST MILITARY HIGHWAY AND I-64 INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads227",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads227\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads227",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.21049",
                "36.84301"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "13",
              "id": "85796",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 13  \/  EB  \/  AT MILITARY HIGHWAY AND I-64 INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads228",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads228\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads228",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.2038",
                "36.8448"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "13.5",
              "id": "85810",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 13.5  \/  EB  \/  BEFORE MILITARY HIGHWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads229",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads229\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads229",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.19875",
                "36.84409"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "14",
              "id": "85830",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 14  \/  EB  \/  AT I-64INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads230",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads230\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads230",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.19872",
                "36.84626"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "14",
              "id": "85839",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 14  \/  WB  \/  AT I-64 INTERCHANGE A",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads231",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads231\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads231",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.19463",
                "36.8457"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "14",
              "id": "85859",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 14  \/  WB  \/  AT I-64 INTERCHANGE B",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads232",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads232\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads232",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.18915",
                "36.84628"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "14",
              "id": "85873",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 14  \/  WB  \/  AT I-64 INTERCHANGE C",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads233",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads233\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads233",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.18015",
                "36.84621"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "15",
              "id": "85893",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 15  \/  WB  \/  AT NEWTOWN ROAD",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads234",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads234\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads234",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.16961",
                "36.84462"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "15.5",
              "id": "85919",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 15.5  \/  WB  \/  BEFORE NEWTOWN  ROAD",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads235",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads235\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads235",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.1595",
                "36.83897"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "16",
              "id": "85931",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 16  \/  WB  \/  AT WITCHDUCK ROAD",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads236",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads236\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads236",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.15372",
                "36.83546"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "16.5",
              "id": "85947",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 16.5  \/  EB  \/  PAST WITCHDUCK ROAD",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads237",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads237\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads237",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.14376",
                "36.8348"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "17",
              "id": "85961",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 17  \/  WB  \/  PAST INDEPENDENCE BLVD",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads238",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads238\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads238",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.13689",
                "36.83418"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "17.5",
              "id": "85972",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 17.5  \/  WB  \/  AT  INDEPENDENCE BLVD",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads239",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads239\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads239",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.12833",
                "36.83342"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "18",
              "id": "85986",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 18  \/  WB  \/  BEFORE INDEPENDENCE BLVD",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads240",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads240\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads240",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.12004",
                "36.83222"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "18.5",
              "id": "86004",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 18.5  \/  EB  \/  PAST INDEPENDENCE BLVD",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads241",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads241\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads241",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.11078",
                "36.83462"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "19",
              "id": "86019",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 19  \/  WB  \/  PAST ROSEMONT ROAD",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads242",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads242\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads242",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.10432",
                "36.83656"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "19.5",
              "id": "86033",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 19.5  \/  WB  \/  PAST ROSEMONT ROAD",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads243",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads243\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads243",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.09689",
                "36.8387"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "20",
              "id": "86049",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 20  \/  WB  \/  AT ROSEMONT ROAD",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads244",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads244\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads244",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.08968",
                "36.83916"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "20.5",
              "id": "86061",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 20.5  \/  WB  \/  BEFORE ROSEMONT ROAD",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads245",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads245\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads245",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.08148",
                "36.8382"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "21",
              "id": "86077",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 21  \/  WB  \/  PAST LYNNHAVEN PARKWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads246",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads246\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads246",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.07448",
                "36.8373"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "21.5",
              "id": "86092",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 21.5  \/  WB  \/  PAST LYNNHAVEN PARKWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads247",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads247\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads247",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.06673",
                "36.83582"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "22",
              "id": "86109",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 22  \/  EB  \/  AT LYNNHAVEN PARKWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads248",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads248\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads248",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.06118",
                "36.83631"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "22.5",
              "id": "86123",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 22.5  \/  EB  \/  PAST LYNNHAVEN PARKWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads249",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads249\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads249",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.05555",
                "36.83867"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "23",
              "id": "86137",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 23  \/  WB  \/  BEFORE LYNNHAVEN PARKWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads250",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads250\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads250",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.05017",
                "36.8406"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "23.5",
              "id": "86154",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 23.5  \/  WB  \/  PAST GREAT NECK ROAD",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads251",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads251\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads251",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.04092",
                "36.84271"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "24",
              "id": "86168",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 24  \/  WB  \/  AT GREAT NECK ROAD",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads252",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads252\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads252",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.03413",
                "36.84245"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "24.5",
              "id": "86181",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 24.5  \/  EB  \/  PAST GREAT NECK ROAD",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads253",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads253\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads253",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.02941",
                "36.84441"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "25",
              "id": "86198",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 25  \/  WB  \/  PAST FIRST COLONIAL BLVD",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads254",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads254\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads254",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.02119",
                "36.84582"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "25.5",
              "id": "86211",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 25.5  \/  WB  \/  AT FIRST COLONIAL BLVD",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads255",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads255\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads255",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.01181",
                "36.84787"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "26",
              "id": "86228",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 26  \/  WB  \/  PAST BIRDNECK BLVD",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads256",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads256\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads256",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.0033",
                "36.84743"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "26.5",
              "id": "86249",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 26.5  \/  WB  \/  PAST BIRDNECK BLVD",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads257",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads257\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads257",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-75.99538",
                "36.84618"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "27",
              "id": "86259",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 27  \/  EB  \/  BIRDNECK BLVD OVERPASS",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads258",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads258\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads258",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.26753",
                "36.76251"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "1.67",
              "id": "86278",
              "jurisdiction": "Hampton Roads",
              "route": "I-464",
              "description": "I-464  \/  MM 1.67  \/  NB  \/  AT 64 INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads401",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads401\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads401",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.26896",
                "36.765"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "1.83",
              "id": "86292",
              "jurisdiction": "Hampton Roads",
              "route": "I-464",
              "description": "I-464  \/  MM 1.83  \/  NB  \/  AFTER 64 INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads402",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads402\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads402",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.28182",
                "36.81294"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "5.5",
              "id": "86305",
              "jurisdiction": "Hampton Roads",
              "route": "I-464",
              "description": "I-464  \/  MM 5.5  \/  SB  \/  AT POINDEXTER INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads413",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads413\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads413",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.28198",
                "36.81682"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "5.77",
              "id": "86318",
              "jurisdiction": "Hampton Roads",
              "route": "I-464",
              "description": "I-464  \/  MM 5.77  \/  SB  \/  BEFORE POINDEXTER ST",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads414",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads414\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads414",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.27988",
                "36.82286"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "6.19",
              "id": "86333",
              "jurisdiction": "Hampton Roads",
              "route": "I-464",
              "description": "I-464  \/  MM 6.19  \/  NB  \/  BEFORE SOUTH MAIN ST",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads415",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads415\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads415",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.28466",
                "36.82702"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "6.59",
              "id": "86349",
              "jurisdiction": "Hampton Roads",
              "route": "I-464",
              "description": "I-464  \/  MM 6.59  \/  SB  \/  AT SOUTH MAIN ST",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads416",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads416\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads416",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.28683",
                "36.83112"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "6.9",
              "id": "86364",
              "jurisdiction": "Hampton Roads",
              "route": "I-464",
              "description": "I-464  \/  MM 6.9  \/  SB  \/  BEFORE SOUTH MAIN ST",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads417",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads417\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads417",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.27578",
                "36.91954"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "1",
              "id": "86378",
              "jurisdiction": "Hampton Roads",
              "route": "I-564",
              "description": "I-564  \/  MM No MM  \/  EB  \/  BEFORE I 64 INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads501",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads501\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads501",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.28114",
                "36.92377"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "2",
              "id": "86394",
              "jurisdiction": "Hampton Roads",
              "route": "I-564",
              "description": "I-564  \/  MM No MM  \/  WB  \/  AT TERMINAL BLVD",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads502",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads502\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads502",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.28698",
                "36.92741"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "3",
              "id": "86403",
              "jurisdiction": "Hampton Roads",
              "route": "I-564",
              "description": "I-564  \/  MM No MM  \/  WB  \/  PAST TERMINAL BLVD",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads503",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads503\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads503",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.29316",
                "36.93162"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "4",
              "id": "86418",
              "jurisdiction": "Hampton Roads",
              "route": "I-564",
              "description": "I-564  \/  MM No MM  \/  WB  \/  AT NAS",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads504",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads504\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads504",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.30408",
                "36.94055"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "5",
              "id": "86442",
              "jurisdiction": "Hampton Roads",
              "route": "I-564",
              "description": "I-564  \/  MM No MM  \/  WB  \/  PAST RUNWAY",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads505",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads505\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads505",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.30792",
                "36.94441"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "6",
              "id": "86458",
              "jurisdiction": "Hampton Roads",
              "route": "I-564",
              "description": "I-564  \/  MM No MM  \/  WB  \/  NAS GATE 3A",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads506",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads506\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads506",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.397",
                "36.78863"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "0.29",
              "id": "86472",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 0.29  \/  EB  \/  AT I-64 AND I-664 INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads601",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads601\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads601",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.40132",
                "36.78763"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "0.05",
              "id": "86489",
              "jurisdiction": "Hampton Roads",
              "route": "I-264",
              "description": "I-264  \/  MM 0.05  \/  WB  \/  AT I-64 AND I-664 INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads602",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads602\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads602",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.40241",
                "36.78642"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "20.24",
              "id": "86504",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664  \/  MM 20.24  \/  SB  \/  OL ON RAMP TO I-264 EB I-64 OL",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads603",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads603\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads603",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.40897",
                "36.78497"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "19.87",
              "id": "86524",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664  \/  MM 19.87  \/  SB  \/  OL BEFORE I-264 AND I-64 INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads604",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads604\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads604",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.41542",
                "36.78613"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "19.48",
              "id": "86541",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664  \/  MM 19.48  \/  NB  \/  IL BEFORE US58 AND US460",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads605",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads605\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads605",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.42124",
                "36.78583"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "19.18",
              "id": "86555",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664  \/  MM 19.18  \/  SB  \/  OL AT US58 AND US460",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads606",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads606\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads606",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.42399",
                "36.78701"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "19.03",
              "id": "86573",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664  \/  MM 19.03  \/  SB  \/  OL AT US58 AND US460",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads607",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads607\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads607",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.42664",
                "36.79157"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "18.67",
              "id": "86588",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664  \/  MM 18.67  \/  SB  \/  OL BEFORE US58 AND US460",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads608",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads608\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads608",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.4285",
                "36.79773"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "18.25",
              "id": "86603",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664  \/  MM 18.25  \/  SB  \/  OL PAST DOCK LANDING",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads609",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads609\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads609",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.43028",
                "36.80369"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "17.79",
              "id": "86621",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664  \/  MM 17.79  \/  SB  \/  OL AT DOCK LANDING RD. EXIT",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads610",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads610\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads610",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.43156",
                "36.8116"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "17.25",
              "id": "86638",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664  \/  MM 17.25  \/  SB  \/  OL PAST PORTSMOUTH BLVD.",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads611",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads611\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads611",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.43282",
                "36.81904"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "16.74",
              "id": "86651",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664  \/  MM 16.74  \/  SB  \/  OL AT PORTSMOUTH BLVD. INTERCHANGE",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads612",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads612\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads612",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-76.43367",
                "36.83015"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "15.98",
              "id": "86665",
              "jurisdiction": "Hampton Roads",
              "route": "I-664",
              "description": "I-664  \/  MM 15.98  \/  SB  \/  OL BEFORE PORTSMOUTH BLVD. EXIT",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads613",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads613\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/HamptonRoads613",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.203",
                "38.94557"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "45.5",
              "id": "86679",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495 \/ MM 45.5 \/ SB \/ I-495 at Old Dominion Dr",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1061",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1061\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1061",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.2203",
                "38.88805"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "49",
              "id": "86694",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495 \/ MM 49 \/ NB \/ I-495 north of I-66",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1042",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1042\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1042",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.6211",
                "38.80847"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "41.7",
              "id": "86707",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66 \/ MM 41.7 \/ EB",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo0002",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo0002\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo0002",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.4799",
                "38.35087"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "134.6",
              "id": "86732",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95 \/ MM 134.6",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo4070",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo4070\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo4070",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.5029",
                "38.31339"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "131.5",
              "id": "86740",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95 \/ NB \/ MM 131.5",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo4065",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo4065\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo4065",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.4066",
                "38.46608"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "143.7",
              "id": "86765",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95 \/ MM 143.7 \/ NB",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo4100",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo4100\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo4100",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.3694",
                "38.52194"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "148.2",
              "id": "86777",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95 \/ NB \/ MM 148.2",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo4115",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo4115\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo4115",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.341",
                "38.55478"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "151",
              "id": "86789",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95 \/ NB \/ MM 151",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo4135",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo4135\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo4135",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.5128",
                "38.27733"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "129",
              "id": "86800",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95 \/ SB \/ MM 129",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo4050",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo4050\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo4050",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.2141",
                "38.92598"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "46.5",
              "id": "86813",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495 \/ MM 46.5 \/ SB \/ I-495 at Westpark Dr",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1057",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1057\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1057",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.2211",
                "38.82615"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "52",
              "id": "86825",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495 \/ MM 52 \/ SB \/ I-495 Exit 52",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1041",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1041\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1041",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.22083333",
                "38.86638889"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "50.1",
              "id": "86849",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495  \/  MM 50  \/  SB  \/  Exit 50, Route 50 - Arlington Blvd",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1040",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1040\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo1040",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.168784",
                "38.790478"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "170.1",
              "id": "86861",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 170  \/  NB  \/  Exit 170 - Capital Beltway",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2060",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2060\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxVideo2060",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.40577",
                "38.46384"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "143.6",
              "id": "86873",
              "jurisdiction": "Fairfax",
              "route": "US-1",
              "description": "Rte 1 & Rte 610 N Stafford",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxCCTV3650",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxCCTV3650\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxCCTV3650",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.4962",
                "38.34298"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "133.8",
              "id": "86885",
              "jurisdiction": "Fairfax",
              "route": "VA-17",
              "description": "Rte 17 & Rte 670 S Stafford",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxCCTV3655",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxCCTV3655\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxCCTV3655",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.5121",
                "38.29576"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "130.6",
              "id": "86896",
              "jurisdiction": "Fairfax",
              "route": "VA-3",
              "description": "Rte 3 & Carl D. Silver Pkwy\/ Mall Ct",
              "rtmp_url": "rtmp:\/\/8.15.251.52:1935\/rtplive\/FairfaxCCTV3660",
              "ios_url": "http:\/\/8.15.251.52:1935\/rtplive\/FairfaxCCTV3660\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.52:1935\/rtplive\/FairfaxCCTV3660",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.50994933",
                "38.8017"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "47.1",
              "id": "85205",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 47  \/  EB  \/  Exit 47, East of Route 234 - Sudley Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0020",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0020\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0020",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.49587747",
                "38.8072"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "47.2",
              "id": "85216",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 47  \/  EB  \/  Exit 47, Rest Area",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0030",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0030\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0030",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.43677568",
                "38.8446"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "53.1",
              "id": "85262",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 53  \/  EB  \/  Exit 53, Route 28 - Sully Rd (I-66 median)",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0070",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0070\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0070",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.43217035",
                "38.8456"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "1",
              "id": "85280",
              "jurisdiction": "Fairfax",
              "route": "VA-28",
              "description": "VA-28  \/  MM 53  \/  EB  \/  Exit 53, South of I-66",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0080",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0080\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0080",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.40261946",
                "38.8503"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "55.3",
              "id": "85296",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 55  \/  EB  \/  On Route 645 - Stringfellow Rd (NB)",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0090",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0090\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0090",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.39110612",
                "38.8534"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "55.4",
              "id": "85308",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 55  \/  EB  \/  Exit 55, Route 7100 - Fairfax County Pkwy (SB)",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0100",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0100\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0100",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.36526508",
                "38.858"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "56",
              "id": "85344",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 56  \/  EB  \/  Exit 57, Route 50 - West Ox Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0120",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0120\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0120",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.31626944",
                "38.8669"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "60",
              "id": "85387",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66 \/ MM 60 \/ EB \/ Exit 60, Route 123, Jermantown Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0150",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0150\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0150",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.28295",
                "38.874956"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "62",
              "id": "85431",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66 \/ MM 62 \/ EB \/ Exit 60, Route 123, Chain Bridge Rd,Blake Ln (WB)",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0180",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0180\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0180",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.236601",
                "38.880452"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "63",
              "id": "85493",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66 \/ MM 63 \/ EB \/ Exit 64, Route 650 - Gallows Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0220",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0220\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0220",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.22313935",
                "38.8839"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "64",
              "id": "85511",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 64  \/  EB  \/  Exit 64, I-495 Beltway",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0230",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0230\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0230",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.12194992",
                "38.881"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "71",
              "id": "85528",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 71  \/  EB  \/  Exit 71, Fairfax Dr",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0240",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0240\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0240",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.06643006",
                "38.8917"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "75",
              "id": "85546",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 75  \/  EB  \/  Exit 75, Theodore Roosevelt Memorial Bridge",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0250",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0250\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0250",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.0680931",
                "38.8977"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "73.2",
              "id": "85560",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 73  \/  WB  \/  Exit 73, Lynn St",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0260",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0260\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0260",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.07026784",
                "38.8991"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "73.1",
              "id": "85575",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 73  \/  WB  \/  Exit 73, Rosslyn Tunnel (WB)",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0270",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0270\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0270",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.07372184",
                "38.8993"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "73",
              "id": "85588",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 73  \/  WB  \/  Exit 73, Rosslyn Tunnel (EB)",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0280",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0280\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0280",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.08856125",
                "38.8989"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "72.2",
              "id": "85604",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 72  \/  WB  \/  Exit 72, Route 29 - Lee Highway",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0290",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0290\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0290",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.08254873",
                "38.8975"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "72.3",
              "id": "85618",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 72  \/  WB  \/  Exit 72, Route 29 - Scott St",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0300",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0300\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0300",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.09944444",
                "38.89555556"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "72.1",
              "id": "85630",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 72  \/  WB  \/  Exit 72, Route 29 - Spout Run Pkwy",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0310",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0310\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0310",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.11747251",
                "38.8875"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "72",
              "id": "85645",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 71  \/  WB  \/  Exit 71, Route 120 - North Glebe Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0320",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0320\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0320",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.154531",
                "38.885548"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "69",
              "id": "85661",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 69  \/  WB  \/  Exit 69, North Sycamore St",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0330",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0330\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0330",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.19576319",
                "38.9004"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "66",
              "id": "85688",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 66  \/  WB  \/  Exit 66, Route 7 - Leesburg Pike",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0350",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0350\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0350",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.274538",
                "38.877721"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "62.1",
              "id": "85703",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 62  \/  WB  \/  Exit 62, Vienna Metro Station",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0360",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0360\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0360",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.336304",
                "38.864155"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "59",
              "id": "85714",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66 \/ MM 59 \/ WB \/ Exit 57, Route 665 - Waples Mill Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0370",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0370\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0370",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.34645996",
                "38.8629"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "57.1",
              "id": "85730",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 57  \/  WB  \/  Exit 57, Route 50 - Lee Jackson Memorial Hwy",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0380",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0380\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0380",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.3747316",
                "38.8577"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "55.6",
              "id": "85746",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 55  \/  WB  \/  Exit 55, West of Ox Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0390",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0390\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0390",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.40338701",
                "38.8533"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "55.2",
              "id": "85761",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 55  \/  WB  \/  Exit 55, Route 645 - Stringfellow Rd NB",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0400",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0400\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0400",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.40364286",
                "38.8517"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "55.1",
              "id": "85779",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 55  \/  WB  \/  Exit 55, Route 645 - Stringfellow Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0410",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0410\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0410",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.41527778",
                "38.84888889"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "55",
              "id": "85790",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 55  \/  EB  \/  Exit 55, Route 7100 - Fairfax County Pkwy",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0415",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0415\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0415",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.42078494",
                "38.8493"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "53.3",
              "id": "85805",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 53  \/  WB  \/  Exit 53, Route 28 - Sully Rd (East of Rte 28)",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0420",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0420\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0420",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.43361111",
                "38.84694444"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "53.2",
              "id": "85820",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 53  \/  WB  \/  Exit 53, Route 28 - Sully Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0430",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0430\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0430",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.44828902",
                "38.8375"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "52.2",
              "id": "85835",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 52  \/  WB  \/  Exit 52, Route 29 - Lee Hwy",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0440",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0440\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0440",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.52113",
                "38.801743"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "WB",
              "mrm": "47",
              "id": "85850",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 47  \/  WB  \/  Exit 47, Route 234 - Sudley Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0450",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0450\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0450",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.33955196",
                "38.5572"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "150",
              "id": "85864",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 150  \/  NB  \/  Exit 150, Route 619 - Joplin Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0460",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0460\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0460",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.27814751",
                "38.6565"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "158.1",
              "id": "85868",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 158  \/  NB  \/  Exit 158, Route 3000 - Prince William Pkwy",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0470",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0470\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0470",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.22876809",
                "38.6761"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "161",
              "id": "85883",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 161  \/  NB  \/  Exit 161, Ramp from Rt 1 North",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0480",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0480\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0480",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.20471801",
                "38.7233"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "167",
              "id": "85898",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 167  \/  NB  \/  Route 7100 - Fairfax County Pkwy (South of Newington)",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0490",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0490\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0490",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.18885519",
                "38.7406"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "167.1",
              "id": "85911",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 167  \/  NB  \/  Exit 167, Route 7100 - Fairfax County Pkwy",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0500",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0500\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0500",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.18399401",
                "38.7509"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "167.2",
              "id": "85926",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 167  \/  NB  \/  Route 7100 - Fairfax County Pkwy (North of Route 7100)",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0510",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0510\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0510",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.1824589",
                "38.7596"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "167.3",
              "id": "85942",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 167  \/  NB  \/  Exit 166,North of Loisdale Dr",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0520",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0520\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0520",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.17990038",
                "38.7712"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "167.4",
              "id": "85956",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 167  \/  NB  \/  Exit 167, Route 7900 - Franconia Springfield Pkwy",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0530",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0530\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0530",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.18066793",
                "38.778"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "169",
              "id": "85971",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 169  \/  NB  \/  Exit 169 Route 644 - Franconia Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0535",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0535\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0535",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.17887697",
                "38.779"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "169.1",
              "id": "85987",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 169  \/  NB  \/  Exit 169  Route 644 - Old Keene Mill Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0540",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0540\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0540",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.17593467",
                "38.7871"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "170",
              "id": "86001",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 170  \/  NB  \/  Exit 1, South of Springfield Interchange2",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0550",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0550\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0550",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.17337615",
                "38.7908"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "58.1",
              "id": "86016",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495  \/  MM 1  \/  NB  \/  Exit 170, I-95",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0560",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0560\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0560",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.194297",
                "38.80602"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "56",
              "id": "86031",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495  \/  MM 54  \/  NB  \/  Exit 54, South of Braddock Rd\/Robinson Terminal",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0562",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0562\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0562",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.182144",
                "38.794183"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "57",
              "id": "86048",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "I-495  \/  MM 57  \/  SB  \/  Exit 57, I-95\/I-495\/I-395 Interchange",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0564",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0564\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0564",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.16838704",
                "38.7969"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "1.2",
              "id": "86062",
              "jurisdiction": "Fairfax",
              "route": "I-395",
              "description": "I-395  \/  MM 1  \/  NB  \/  Exit 2, Route 648 - Edsall Rd A",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0570",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0570\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0570",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.16211867",
                "38.8022"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "2",
              "id": "86076",
              "jurisdiction": "Fairfax",
              "route": "I-395",
              "description": "I-395  \/  MM 2  \/  NB  \/  Exit 2, Route 648 - Edsall Rd B",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0580",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0580\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0580",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.15380348",
                "38.8074"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "2.1",
              "id": "86094",
              "jurisdiction": "Fairfax",
              "route": "I-395",
              "description": "I-395  \/  MM 2  \/  NB  \/  Exit 2 Route 648 - Edsall Rd C",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0590",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0590\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0590",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.15034948",
                "38.8098"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "2.2",
              "id": "86107",
              "jurisdiction": "Fairfax",
              "route": "I-395",
              "description": "I-395  \/  MM 2  \/  NB  \/  Exit 2, North Turkeycock",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0600",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0600\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0600",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.14523244",
                "38.8118"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "3",
              "id": "86122",
              "jurisdiction": "Fairfax",
              "route": "I-395",
              "description": "I-395  \/  MM 3  \/  NB  \/  Exit 3, South of Route 236 - Duke St",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0610",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0610\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0610",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.13000926",
                "38.8184"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "3.2",
              "id": "86151",
              "jurisdiction": "Fairfax",
              "route": "I-395",
              "description": "I-395  \/  MM 3  \/  NB  \/  Exit 3, Route 236 - Duke St (North of)",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0630",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0630\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0630",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.12220577",
                "38.8244"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "3.3",
              "id": "86167",
              "jurisdiction": "Fairfax",
              "route": "I-395",
              "description": "I-395  \/  MM 3  \/  NB  \/  Exit 3, Route 236 Duke St\/Route 420 - Seminary Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0640",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0640\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0640",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.1124834",
                "38.8296"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "4",
              "id": "86183",
              "jurisdiction": "Fairfax",
              "route": "I-395",
              "description": "I-395  \/  MM 4  \/  NB  \/  Exit 4, Route 420 - Seminary Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0650",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0650\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0650",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.10480784",
                "38.8322"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "4.1",
              "id": "86197",
              "jurisdiction": "Fairfax",
              "route": "I-395",
              "description": "I-395  \/  MM 4  \/  NB  \/  Exit 4, Seminary Rd and King St)",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0660",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0660\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0660",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.09687643",
                "38.8342"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "5",
              "id": "86213",
              "jurisdiction": "Fairfax",
              "route": "I-395",
              "description": "I-395  \/  MM 5  \/  NB  \/  Exit 5, Route 7 - King St",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0670",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0670\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0670",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.08408384",
                "38.8403"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "6",
              "id": "86226",
              "jurisdiction": "Fairfax",
              "route": "I-395",
              "description": "I-395  \/  MM 6  \/  NB  \/  Exit 6, Shirlington Circle",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0680",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0680\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0680",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.07743169",
                "38.8457"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "7",
              "id": "86240",
              "jurisdiction": "Fairfax",
              "route": "I-395",
              "description": "I-395  \/  MM 7  \/  NB  \/  Exit 7, Route 120 - South Glebe Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0690",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0690\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0690",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.06988406",
                "38.8583"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "8",
              "id": "86252",
              "jurisdiction": "Fairfax",
              "route": "I-395",
              "description": "I-395  \/  MM 8  \/  NB  \/  Exit 8, South of Route 27 - Washington Blvd",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0700",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0700\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0700",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.05619598",
                "38.8653"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "8.2",
              "id": "86269",
              "jurisdiction": "Fairfax",
              "route": "I-395",
              "description": "I-395  \/  MM 8  \/  NB  \/  Exit 8C, Crystal City\/Pentagon",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0710",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0710\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0710",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.043882",
                "38.87137"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "10.2",
              "id": "86285",
              "jurisdiction": "Fairfax",
              "route": "I-395",
              "description": "I-395  \/  MM 10  \/  NB  \/  Exit 10, 14th Street Bridge",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0720",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0720\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0720",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.04954383",
                "38.8682"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "9.1",
              "id": "86299",
              "jurisdiction": "Fairfax",
              "route": "I-395",
              "description": "I-395  \/  MM 9  \/  SB  \/  Exit 9, Boundary Channel Dr A",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0730",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0730\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0730",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.06131302",
                "38.8695"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "9.2",
              "id": "86314",
              "jurisdiction": "Fairfax",
              "route": "I-395",
              "description": "I-395  \/  MM 9  \/  SB  \/  Exit 9, Boundary Channel Dr B",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0740",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0740\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0740",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.06975613",
                "38.8648"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "8.1",
              "id": "86344",
              "jurisdiction": "Fairfax",
              "route": "I-395",
              "description": "I-395  \/  MM 8  \/  SB  \/  Exit 8B, Route 27 - Washington Blvd",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0760",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0760\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0760",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.21200979",
                "38.7184"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "163.2",
              "id": "86384",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 163  \/  SB  \/  Exit 163, Route 642 - Lorton Rd\/Pohick Rd Ovp",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0780",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0780\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0780",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.2223",
                "38.708034"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "163.1",
              "id": "86399",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 163  \/  NB  \/  Exit 163, Route 642 - Lorton Rd A",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0790",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0790\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0790",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.22723298",
                "38.6929"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "163",
              "id": "86411",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 163  \/  NB  \/  Exit 163, Route 642 - Lorton Rd B",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0800",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0800\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0800",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.231516",
                "38.679865"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "161.1",
              "id": "86426",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 161  \/  SB  \/  Exit 161, Route 1 - Richmond Hwy",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0810",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0810\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0810",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.23976972",
                "38.6748"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "160.1",
              "id": "86434",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 160  \/  SB  \/  Exit 160, Route 123, Gordon Blvd-Occoquan",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0820",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0820\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0820",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.25281817",
                "38.6712"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "160",
              "id": "86448",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 160  \/  SB  \/  Exit 160, Route 123 - Gordon Blvd",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0830",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0830\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0830",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.271459",
                "38.6692"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "158.2",
              "id": "86462",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 158  \/  SB  \/  Exit 158, Route 3000 - Prince William Pkwy (prior to)",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0840",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0840\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0840",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.28556721",
                "38.6475"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "158",
              "id": "86475",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 158  \/  SB  \/  Exit 156, Opitz Blvd",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0850",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0850\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0850",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.29119595",
                "38.6355"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "156.3",
              "id": "86490",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 156  \/  SB  \/  Exit 156, Route 784 - Dale Blvd",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0860",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0860\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0860",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.296543",
                "38.622395"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "156.2",
              "id": "86501",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 156  \/  SB  \/  Exit 156, Dale Blvd. CarRest Area",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0870",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0870\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0870",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.3047561",
                "38.6113"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "156.1",
              "id": "86516",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 156  \/  SB  \/  Exit 156, Cardinal Dr",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0880",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0880\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0880",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.3140947",
                "38.6011"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "156",
              "id": "86530",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 156  \/  SB  \/  Exit 156, Weigh Station",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0890",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0890\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0890",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.32010722",
                "38.5873"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "152.1",
              "id": "86544",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 152  \/  SB  \/  Exit 152, Route 234 - Dumfries Rd A",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0900",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0900\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0900",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.32880618",
                "38.576"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "152",
              "id": "86562",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 152  \/  SB  \/  Exit 152, Route 234 - Dumfries Rd B",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0910",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0910\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0910",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.33622589",
                "38.5683"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "150.1",
              "id": "86577",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 150  \/  SB  \/  Exit 150, Mine Rd (South of Mine Rd)",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0920",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0920\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0920",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.05939413",
                "38.8731"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "8",
              "id": "86589",
              "jurisdiction": "Fairfax",
              "route": "VA-27",
              "description": "VA-27  \/  MM 8  \/  SB  \/  On Route 27 - Washington Blvd",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0930",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0930\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0930",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.15418726",
                "38.7923"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "173",
              "id": "86606",
              "jurisdiction": "Fairfax",
              "route": "I-95",
              "description": "I-95  \/  MM 173  \/  NB  \/  Exit 173, Route 401 - VanDorn St",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0940",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0940\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0940",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.07792",
                "38.801777"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "0",
              "id": "86633",
              "jurisdiction": "Fairfax",
              "route": "",
              "description": "NB \/ North Bound at Telegraph Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0993",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0993\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0993",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.308",
                "38.8239"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "0",
              "id": "86649",
              "jurisdiction": "Fairfax",
              "route": "VA-653",
              "description": "Sideburn at Braddock SB",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3925",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3925\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3925",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.0802",
                "38.79871"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "0",
              "id": "86664",
              "jurisdiction": "Fairfax",
              "route": "I-495",
              "description": "Telegraph Rd at I-95",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo1015",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo1015\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo1015",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.079",
                "38.7813"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "0",
              "id": "86678",
              "jurisdiction": "Fairfax",
              "route": "US-1",
              "description": "US-1 at South Kings Hwy",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3605",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3605\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3605",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.164",
                "38.7082"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "0",
              "id": "86692",
              "jurisdiction": "Fairfax",
              "route": "US-1",
              "description": "US-1  and Fairfax County PWY",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3505",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3505\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3505",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.2828",
                "38.62076"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "0",
              "id": "86703",
              "jurisdiction": "Fairfax",
              "route": "US-1",
              "description": "US-1 at Dale Blvd",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3565",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3565\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3565",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.3143",
                "38.57501"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "0",
              "id": "86716",
              "jurisdiction": "Fairfax",
              "route": "US-1",
              "description": "US-1 at Dumfries Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3500",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3500\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3500",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.064",
                "38.7896"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "0",
              "id": "86728",
              "jurisdiction": "Fairfax",
              "route": "US-1",
              "description": "US-1 at Huntington Ave",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3600",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3600\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3600",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "38.8257",
                "-77.301"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "0",
              "id": "86763",
              "jurisdiction": "Fairfax",
              "route": "VA-653",
              "description": "Roberts at Braddock NB",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3940",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3940\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3940",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.301",
                "38.8257"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "SB",
              "mrm": "0",
              "id": "86775",
              "jurisdiction": "Fairfax",
              "route": "VA-653",
              "description": "Roberts at Braddock SB",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3945",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3945\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3945",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.19251",
                "38.70894"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "0",
              "id": "86823",
              "jurisdiction": "Fairfax",
              "route": "US-1",
              "description": "Route 1 & Telegraph Rd (Fairfax)",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxPCCTV22",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxPCCTV22\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxPCCTV22",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.308",
                "38.8239"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "0",
              "id": "86835",
              "jurisdiction": "Fairfax",
              "route": "VA-653",
              "description": "Sideburn at Braddock EB",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3930",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3930\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3930",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.308",
                "38.8239"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "0",
              "id": "86847",
              "jurisdiction": "Fairfax",
              "route": "VA-653",
              "description": "Sideburn at Braddock NB",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3920",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3920\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3920",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.3163",
                "38.65256"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NB",
              "mrm": "0",
              "id": "86859",
              "jurisdiction": "Fairfax",
              "route": "VA-294",
              "description": "PW Pkwy at Minneville Rd",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3550",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3550\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3550",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.301",
                "38.8257"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "0",
              "id": "86871",
              "jurisdiction": "Fairfax",
              "route": "VA-653",
              "description": "Roberts at Braddock EB",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3950",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3950\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo3950",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-80.41887",
                "37.22063"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "NONE",
              "mrm": "1",
              "id": "86883",
              "jurisdiction": "Salem",
              "route": "VT",
              "description": "  \/  MM   \/  NONE  \/  VT Lane North",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/SalemVTLaneNorth",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/SalemVTLaneNorth\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/SalemVTLaneNorth",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.47067606",
                "38.817"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "52",
              "id": "91171",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 52  \/  EB  \/  Exit 52, Route 29 - Lee Hwy\/Compton Road A",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0040",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0040\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0040",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.46184917",
                "38.8214"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "52.1",
              "id": "91172",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 52  \/  EB  \/  Exit 52, Route 29 - Lee Hwy\/Compton Road B",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0050",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0050\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0050",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.44496294",
                "38.8382"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "53",
              "id": "91173",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 53  \/  EB  \/  Exit 52, Route 29 - Lee Hwy (Centerville)",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0060",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0060\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0060",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.38381434",
                "38.8542"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "55.5",
              "id": "91175",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 55  \/  EB  \/  Exit 55, Route 7100 - Fairfax County Pkwy (NB)",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0110",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0110\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0110",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.35490308",
                "38.8599"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "57",
              "id": "91176",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 57  \/  EB  \/  Exit  57, Route 50",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0130",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0130\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0130",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.34313389",
                "38.8616"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "57",
              "id": "91178",
              "jurisdiction": "Fairfax",
              "route": "US-50",
              "description": "US-50  \/  MM 57  \/  EB  \/  On Route 50 Ramp At I-66",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0140",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0140\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0140",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.308919",
                "38.868403"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "60.1",
              "id": "91180",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 60  \/  EB  \/  Exit 60, Route 123 - Chain Bridge Rd (SB)",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0160",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0160\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0160",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.29464995",
                "38.8707"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "60.2",
              "id": "91182",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 60  \/  EB  \/  Exit 60, Route 123 - Chain Bridge Rd (NB)",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0170",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0170\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0170",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.267168",
                "38.877833"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "62.2",
              "id": "91184",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 62  \/  EB  \/  Exit 62,Route 243 - Nutley St (SB)",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0190",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0190\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0190",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.25819106",
                "38.8784"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "62.3",
              "id": "91187",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 62  \/  EB  \/  Exit 62, Route 243 - Nutley St (NB)",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0200",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0200\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0200",
              "active": true
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "coordinates": [
                "-77.24629394",
                "38.8791"
              ],
              "type": "Point"
            },
            "properties": {
              "direction": "EB",
              "mrm": "62.4",
              "id": "91189",
              "jurisdiction": "Fairfax",
              "route": "I-66",
              "description": "I-66  \/  MM 62  \/  EB  \/  Exit 62, Route 243 Nutley St, Cedar Ln",
              "rtmp_url": "rtmp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0210",
              "ios_url": "http:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0210\/playlist.m3u8",
              "rtsp_url": "rtsp:\/\/8.15.251.53:1935\/rtplive\/FairfaxVideo0210",
              "active": true
            }
          }
        ],
        "type": "FeatureCollection"
      };

      this.getCamera = function(properties) {
        self = this;
        matches = _.matches(properties);
        return _.find(this.cameras.features, function(feature){
          return matches(feature.properties);
        });
      };

      this.getCameraByID = function(id) {
        return this.getCamera({id:id});
      };

      this.getCamerasByID = function(ids) {
        self = this;
        var cameras = [];
        _.each(ids, function(id) {
          var camera = self.getCamera({id:id});
          if (!_.isUndefined(camera)) {
            cameras.push(camera);
          }
        });

        return cameras;

      };

      this.$get = function() {
        return this;
      };
    })

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', function HomeController( $scope, cameraService, $stateParams, $location) {
      var commute = ["87117", "87130", "87127","87146", "86813"];
      params = $location.search();
      console.log(params);

      if (!_.isUndefined(params) && !_.isEmpty(params)) {
        console.log('Using Params');
        if (_.has(params, 'id') && params.id.indexOf(',') != -1) {
          console.log('Detected a list of ids.');
          $scope.cameras = cameraService.getCamerasByID(params.id.split(','));
        } else {
          console.log('Using params as filter.');
          $scope.cameras = [cameraService.getCamera(params)];
        }
      } else {
        console.log('Did not detect filter parameters, return the first 30.');
        $scope.cameras = cameraService.getCamerasByID(commute);

      }

      console.log('Cameras', $scope.cameras);

})

;

