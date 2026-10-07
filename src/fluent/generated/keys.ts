import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '6e816b6780e949d2bde1af97c9dbf460'
                    }
                    br_feed_single_active: {
                        table: 'sys_script'
                        id: '85e97c02dcf7400da4b870d87ab142c1'
                    }
                    ds_agency: {
                        table: 'sys_data_source'
                        id: '9bb819f24c76411bb9a5a4cadd8be8da'
                    }
                    ds_calendar: {
                        table: 'sys_data_source'
                        id: 'fb2f2f76b5994bf1b2e69d0cc8171e0b'
                    }
                    ds_calendar_dates: {
                        table: 'sys_data_source'
                        id: 'e2f0cda8e9d349868f9cdcc9cabd1805'
                    }
                    ds_feed_info: {
                        table: 'sys_data_source'
                        id: 'afa688c72a4c419ea09afafad8f4b3fe'
                    }
                    ds_routes: {
                        table: 'sys_data_source'
                        id: 'b29f900713984ec78a953447e3f5e199'
                    }
                    ds_stop_times: {
                        table: 'sys_data_source'
                        id: '98a06f322e88445197bdfe83771c555d'
                    }
                    ds_stops: {
                        table: 'sys_data_source'
                        id: '13216e99c6ff42c09045f7b315c67bf7'
                    }
                    ds_trips: {
                        table: 'sys_data_source'
                        id: '77203eec5e1b42b2b5f878f4540039f8'
                    }
                    evt_feed_op: {
                        table: 'sysevent_register'
                        id: '6936fd4aad6b450eb2cf54f32a18c712'
                    }
                    gtfs_app_menu: {
                        table: 'sys_app_application'
                        id: '365ee9637cfd4b8cbc5f8d8540949564'
                    }
                    gtfs_feed_cleanup: {
                        table: 'sysauto_script'
                        id: 'af7ecbf9a00e4e439cc84322b0228073'
                    }
                    gtfs_mod_agencies: {
                        table: 'sys_app_module'
                        id: 'a34eda1a6847497683b5edebfe939e25'
                    }
                    gtfs_mod_data_sources: {
                        table: 'sys_app_module'
                        id: '140060e5e1e64bfabdca19736f316419'
                    }
                    gtfs_mod_feeds: {
                        table: 'sys_app_module'
                        id: 'f4b4a75723224bc5aeb2dd8aaccb4353'
                    }
                    gtfs_mod_new_feed: {
                        table: 'sys_app_module'
                        id: 'b5c8e92d84da46efa07dff4bc5ea19f3'
                    }
                    gtfs_mod_routes: {
                        table: 'sys_app_module'
                        id: '0feb07eec3a544dab4819cbe0efefb5e'
                    }
                    gtfs_mod_sep_browse: {
                        table: 'sys_app_module'
                        id: '4ec9de9a8376484fa5d9eccb38e1ddd4'
                    }
                    gtfs_mod_sep_import: {
                        table: 'sys_app_module'
                        id: '67d7c4c819c34ee39e59d9386a7f645e'
                    }
                    gtfs_mod_service_days: {
                        table: 'sys_app_module'
                        id: 'ba3773276c9646979ed643ddca11ccbe'
                    }
                    gtfs_mod_stops: {
                        table: 'sys_app_module'
                        id: '334ff311a13e41b4a4a685869803bcbe'
                    }
                    gtfs_mod_trips: {
                        table: 'sys_app_module'
                        id: 'c253eb3dbca7489294b40ccdd0fe9153'
                    }
                    GtfsAdmin: {
                        table: 'sys_script_include'
                        id: '4b3631a6d5f948f0a4c5d31e6dc1870c'
                    }
                    GtfsImportCache: {
                        table: 'sys_script_include'
                        id: 'df7e00f9fa8e469280b8b235e7529133'
                    }
                    GtfsImportRunner: {
                        table: 'sys_script_include'
                        id: 'b1b92dfafdf94a168fa2bb7f2a0cba6f'
                    }
                    GtfsLifecycle: {
                        table: 'sys_script_include'
                        id: 'b828134a1e4a4e9ea34c9a0b5b07c200'
                    }
                    GtfsPostProcess: {
                        table: 'sys_script_include'
                        id: 'ac2d14ceaf1a4cfc9e7c67544a701ec0'
                    }
                    GtfsPublicService: {
                        table: 'sys_script_include'
                        id: '7a12a852349f466699819c644a9e9599'
                    }
                    GtfsUtil: {
                        table: 'sys_script_include'
                        id: '2514972a77f446b6b645dce156accd1e'
                    }
                    GtfsValidation: {
                        table: 'sys_script_include'
                        id: '2a0fed928c9247668895461a65e9cbb5'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'c97d28095bde4a61be6da825c9c52ec0'
                    }
                    sa_feed_op: {
                        table: 'sysevent_script_action'
                        id: '2773a9713e0c4624aec7c7bb106b3191'
                    }
                    'src_server_business-rules_feed-single-active_ts': {
                        table: 'sys_module'
                        id: 'd968b97b63fa4633b3e321d8f02b679a'
                    }
                    'src_server_scheduled_gtfs-feed-cleanup_js': {
                        table: 'sys_module'
                        id: '867f7b7c5dbd404f86950e1697c15ec5'
                    }
                    'src_server_script-includes_gtfs-admin_js': {
                        table: 'sys_module'
                        id: '5331331468a54b9287f05b04b49055d4'
                    }
                    'src_server_script-includes_gtfs-import-cache_js': {
                        table: 'sys_module'
                        id: 'f31471c1783443eeabe9168a9b7ca698'
                    }
                    'src_server_script-includes_gtfs-import-runner_js': {
                        table: 'sys_module'
                        id: '1e24526068e944cf922a51acaffa397c'
                    }
                    'src_server_script-includes_gtfs-lifecycle_js': {
                        table: 'sys_module'
                        id: '327354cc4ec24ccaac4349204460367a'
                    }
                    'src_server_script-includes_gtfs-post-process_js': {
                        table: 'sys_module'
                        id: 'd3146e0df15d4f6488bb0b80582ee1f4'
                    }
                    'src_server_script-includes_gtfs-public-service_js': {
                        table: 'sys_module'
                        id: '8823550eb3dc4c778837cafd9d0a5177'
                    }
                    'src_server_script-includes_gtfs-util_js': {
                        table: 'sys_module'
                        id: '9e5cd44a1b894ffda34db8595ad2c10b'
                    }
                    'src_server_script-includes_gtfs-validation_js': {
                        table: 'sys_module'
                        id: 'eeda4a3a2a804706a9f76406cb71a060'
                    }
                    test_public_service: {
                        table: 'sys_atf_test'
                        id: 'b4bbacf4b58b4406860d53c3bf5955e1'
                    }
                    test_public_service_script: {
                        table: 'sys_atf_step'
                        id: '2eca94c34ca1405d849fb130166deb00'
                    }
                    tm_agency: {
                        table: 'sys_transform_map'
                        id: 'b03ee2299f61432aa4946a38e5ff9051'
                    }
                    tm_agency_before: {
                        table: 'sys_transform_script'
                        id: '013f20e631bb48ef91956d958405048b'
                    }
                    tm_calendar: {
                        table: 'sys_transform_map'
                        id: '2c08f0cc3b1e4fe9a8044daa96d01297'
                    }
                    tm_calendar_before: {
                        table: 'sys_transform_script'
                        id: '114566306ee043daa7cf1a823fee1a33'
                    }
                    tm_calendar_dates: {
                        table: 'sys_transform_map'
                        id: 'dfb94822486d4db5897d738b1b629506'
                    }
                    tm_calendar_dates_before: {
                        table: 'sys_transform_script'
                        id: '0ea69fddd91e4bd383401f2655b01181'
                    }
                    tm_feed_info: {
                        table: 'sys_transform_map'
                        id: '43be4d4705f84365b340fae0a29be31a'
                    }
                    tm_feed_info_before: {
                        table: 'sys_transform_script'
                        id: '9f0b779232c5469d88dce512999ac2fd'
                    }
                    tm_routes: {
                        table: 'sys_transform_map'
                        id: '7ef6da532bcd464baab8601c7f605324'
                    }
                    tm_routes_before: {
                        table: 'sys_transform_script'
                        id: '2d8f585f80844d829ddb30d262eeb814'
                    }
                    tm_stop_times: {
                        table: 'sys_transform_map'
                        id: '4c7f22acaa1e4c6eba8b4acc2605a890'
                    }
                    tm_stop_times_before: {
                        table: 'sys_transform_script'
                        id: 'c7ec7fc4ce2c436fb7361eb46dc3fc0f'
                    }
                    tm_stop_times_complete: {
                        table: 'sys_transform_script'
                        id: '2207dff5981c46eaaaee54419e3751db'
                    }
                    tm_stop_times_start: {
                        table: 'sys_transform_script'
                        id: '70d64a74b410484085b72b266e7d5663'
                    }
                    tm_stops: {
                        table: 'sys_transform_map'
                        id: '22fa88697ebd4b3a8bc8d3b6e2bc34f7'
                    }
                    tm_stops_before: {
                        table: 'sys_transform_script'
                        id: 'bcb9f2be29c7493fbf416d85cc464b3d'
                    }
                    tm_trips: {
                        table: 'sys_transform_map'
                        id: '2862adeefea540a6857d8eb3eb84c078'
                    }
                    tm_trips_before: {
                        table: 'sys_transform_script'
                        id: 'baf03cfc70a543b0b67dbbf6fd45dc8c'
                    }
                    tm_trips_complete: {
                        table: 'sys_transform_script'
                        id: 'e91357e991404ebd99bab8d26a09e577'
                    }
                    tm_trips_start: {
                        table: 'sys_transform_script'
                        id: '8e734fbb43ca44d69132d48519e76a15'
                    }
                    ua_activate: {
                        table: 'sys_ui_action'
                        id: '7dfb12acaed149789190c6355da3aba8'
                    }
                    ua_cleanup: {
                        table: 'sys_ui_action'
                        id: 'b5cb0be2bd84453f952e56eac6a970b5'
                    }
                    ua_process: {
                        table: 'sys_ui_action'
                        id: 'dfdc862c18054108ae1511c26e0ca256'
                    }
                    ua_reset: {
                        table: 'sys_ui_action'
                        id: '5469015ba22b40ea9a5ee72929c371d0'
                    }
                    ua_start_import: {
                        table: 'sys_ui_action'
                        id: 'c2fc33065d2d44d0a9a3a98e47eb1b27'
                    }
                    x_msag_gtfs_schedu_footer: {
                        table: 'sp_header_footer'
                        id: 'd84c470ff0084ccda413ba035005c2b1'
                    }
                    x_msag_gtfs_schedu_gtfs_departures: {
                        table: 'sp_widget'
                        id: 'fc4240078bd847fe88242ccd4370303a'
                    }
                    x_msag_gtfs_schedu_gtfs_feed_info: {
                        table: 'sp_widget'
                        id: 'e221da71172a4fed975c292cb988e8f8'
                    }
                    x_msag_gtfs_schedu_gtfs_nearby: {
                        table: 'sp_widget'
                        id: '6ad3988e447d46bbafeee0ab3bd20e32'
                    }
                    x_msag_gtfs_schedu_gtfs_route_detail: {
                        table: 'sp_widget'
                        id: '4b43a2ab16614e069a2a3af80c2f68ae'
                    }
                    x_msag_gtfs_schedu_gtfs_route_list: {
                        table: 'sp_widget'
                        id: '52de79d0194545c48c8c1fce3b8059fb'
                    }
                    x_msag_gtfs_schedu_gtfs_search: {
                        table: 'sp_widget'
                        id: '745726215c5b4673b11a4fcb58fcb101'
                    }
                    x_msag_gtfs_schedu_gtfs_stop_detail: {
                        table: 'sp_widget'
                        id: 'd99a2c612ce9447e93fdfad8889dee19'
                    }
                    x_msag_gtfs_schedu_gtfs_trip_detail: {
                        table: 'sp_widget'
                        id: '91c87eb662d74fb89d6c1348af78d866'
                    }
                    x_msag_gtfs_schedu_header: {
                        table: 'sp_header_footer'
                        id: 'd31466d9cca1462cb7ffd39100da552b'
                    }
                    x_msag_gtfs_schedu_home_col_feed: {
                        table: 'sp_column'
                        id: '0f833100130040e6a8d1d1b58d159074'
                    }
                    x_msag_gtfs_schedu_home_col_nearby: {
                        table: 'sp_column'
                        id: 'd78813222624433ca26a0fac09bfdc00'
                    }
                    x_msag_gtfs_schedu_home_col_search: {
                        table: 'sp_column'
                        id: '1c9f7d720414479f8057d99327ebece8'
                    }
                    x_msag_gtfs_schedu_home_container: {
                        table: 'sp_container'
                        id: '97ab51a22af842b1890780a8b6030df4'
                    }
                    x_msag_gtfs_schedu_home_inst_feed: {
                        table: 'sp_instance'
                        id: '4ec0d05bfa754cf1af76bc1ccbb85a83'
                    }
                    x_msag_gtfs_schedu_home_inst_nearby: {
                        table: 'sp_instance'
                        id: 'ce315a490f4a416aa402096763bc5b09'
                    }
                    x_msag_gtfs_schedu_home_inst_search: {
                        table: 'sp_instance'
                        id: '17461c1f2a9a4caba21dda739017504d'
                    }
                    x_msag_gtfs_schedu_home_row_feed: {
                        table: 'sp_row'
                        id: 'f6d7b7ed32b143199903fff506d978ba'
                    }
                    x_msag_gtfs_schedu_home_row_nearby: {
                        table: 'sp_row'
                        id: '6818b9d009e248f087962c2d55fcae2b'
                    }
                    x_msag_gtfs_schedu_home_row_search: {
                        table: 'sp_row'
                        id: '740aebca0dff46318be49ca60f1a20ec'
                    }
                    x_msag_gtfs_schedu_info_col: {
                        table: 'sp_column'
                        id: 'ce3f93d8463441f3828a9a4f957786a7'
                    }
                    x_msag_gtfs_schedu_info_container: {
                        table: 'sp_container'
                        id: 'e7cbf54e15e2475fa04b2f970dcf61b4'
                    }
                    x_msag_gtfs_schedu_info_inst: {
                        table: 'sp_instance'
                        id: 'bf4bd835633e4650850d4f458af99f68'
                    }
                    x_msag_gtfs_schedu_info_row: {
                        table: 'sp_row'
                        id: '45b8bd3cbe724c218f10791ff8a6274d'
                    }
                    x_msag_gtfs_schedu_portal: {
                        table: 'sp_portal'
                        id: '6be08f117f464c8984242372069dad84'
                    }
                    x_msag_gtfs_schedu_route_badge: {
                        table: 'sp_angular_provider'
                        id: '535e02f9daf94a70866cf70d1e422ca2'
                    }
                    x_msag_gtfs_schedu_route_col: {
                        table: 'sp_column'
                        id: '1f45d68f23294b9dbee9bdcd686dbbe5'
                    }
                    x_msag_gtfs_schedu_route_container: {
                        table: 'sp_container'
                        id: '7ec2e11990c941d992a8b10e9411a8dc'
                    }
                    x_msag_gtfs_schedu_route_inst: {
                        table: 'sp_instance'
                        id: 'd5d35b96d05f45efb508634f5bb810f2'
                    }
                    x_msag_gtfs_schedu_route_row: {
                        table: 'sp_row'
                        id: 'a62a8179222b4d51ab88fe6a2b444ec7'
                    }
                    x_msag_gtfs_schedu_routes_col: {
                        table: 'sp_column'
                        id: '3d1dba33fa414430890587b9b813a727'
                    }
                    x_msag_gtfs_schedu_routes_container: {
                        table: 'sp_container'
                        id: '1e7020eeba8b49e9bf3cc694d135b8b1'
                    }
                    x_msag_gtfs_schedu_routes_inst: {
                        table: 'sp_instance'
                        id: '888499b02c1d463e9d6abb200d6f1423'
                    }
                    x_msag_gtfs_schedu_routes_row: {
                        table: 'sp_row'
                        id: '0489e13b827a4dcab3fad2e1e93bfee9'
                    }
                    x_msag_gtfs_schedu_stop_col_dep: {
                        table: 'sp_column'
                        id: 'e3b93203724e42619b4f9a04cf030b75'
                    }
                    x_msag_gtfs_schedu_stop_col_detail: {
                        table: 'sp_column'
                        id: '6d39539d159244db971ff446fe74f02b'
                    }
                    x_msag_gtfs_schedu_stop_container: {
                        table: 'sp_container'
                        id: '32acd4ce8a164b58bceb0daccbbe9b75'
                    }
                    x_msag_gtfs_schedu_stop_inst_dep: {
                        table: 'sp_instance'
                        id: '93d10343c81142f3afb2900e47b2647c'
                    }
                    x_msag_gtfs_schedu_stop_inst_detail: {
                        table: 'sp_instance'
                        id: '2def2020c1c441cf827d26ab4fe459bb'
                    }
                    x_msag_gtfs_schedu_stop_row_dep: {
                        table: 'sp_row'
                        id: '5ae4519179ac4bd7b3df9634361c2112'
                    }
                    x_msag_gtfs_schedu_stop_row_detail: {
                        table: 'sp_row'
                        id: 'ae6a7eeeae044c829d1ed7949b14258b'
                    }
                    x_msag_gtfs_schedu_theme: {
                        table: 'sp_theme'
                        id: 'c2c9714e3cba4b9bbbb7822da740653a'
                    }
                    x_msag_gtfs_schedu_trip_col: {
                        table: 'sp_column'
                        id: '1d0ba15cc8814d708c9eef9f978241be'
                    }
                    x_msag_gtfs_schedu_trip_container: {
                        table: 'sp_container'
                        id: 'b7e3bceab7134609a406a5d418c9f104'
                    }
                    x_msag_gtfs_schedu_trip_inst: {
                        table: 'sp_instance'
                        id: '8a5ef8227c1848aabd49ce8563a20cf1'
                    }
                    x_msag_gtfs_schedu_trip_row: {
                        table: 'sp_row'
                        id: '8d6f30f29f9c46feaf4d1f37fd5d3c87'
                    }
                    xsp_import_set_read: {
                        table: 'sys_scope_privilege'
                        id: 'fb5f45bf3f194903bf0a09d4b16f8770'
                    }
                    xsp_import_set_write: {
                        table: 'sys_scope_privilege'
                        id: '2321c7d219b04ae8b5d558f1becc5446'
                    }
                    xsp_transform_all_maps: {
                        table: 'sys_scope_privilege'
                        id: '947d1377207642298c3e7401c0c57f71'
                    }
                }
                composite: [
                    {
                        table: 'sys_ui_element'
                        id: '00109fcc7902433a82ebab02f6f689c5'
                        key: {
                            sys_ui_section: {
                                id: '8249dfd571e74a03918547cfd3d2d81b'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop_time'
                                    caption: 'GTFS Stop Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'direction_id'
                            position: '17'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '00164d98112b4c8aa3f0b2f8a0d613ce'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'route_desc'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '008463a61f1843329835541a82b522fb'
                        key: {
                            id: '2eca94c34ca1405d849fb130166deb00'
                            table: 'var__m_atf_input_variable_41de4a935332120028bc29cac2dc349a'
                            field: 'script'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '00c56d86052d49f0bb6b5494651d67c1'
                        key: {
                            sys_ui_section: {
                                id: '8f037452c1164012875a09d07fe2b469'
                                key: {
                                    name: 'x_msag_gtfs_schedu_calendar'
                                    caption: 'GTFS Calendar'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'service_id'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '00dfc4d00846477e98396fa70b34719d'
                        key: {
                            map: 'b03ee2299f61432aa4946a38e5ff9051'
                            target_field: 'agency_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0115ad52aa414218a00f85f3af0472cb'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'wheelchair_boarding'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '01cfb22b18b145768bb121cc2473a7af'
                        key: {
                            sys_ui_section: {
                                id: '653abe0a825344749ac82b1a0a1820c7'
                                key: {
                                    name: 'x_msag_gtfs_schedu_route'
                                    caption: 'GTFS Route'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '14'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '02ddde4d3cf74881bba330db83dd09b0'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stops'
                            element: 'u_location_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '02f33652ec72410db9f1b4b2f03372b2'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'child_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '033c64b56ea14c528d025910edf1559a'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_agency'
                            element: 'u_agency_email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '034c855d1a7e4fa6bd1223ddbec75749'
                        key: {
                            sys_ui_section: {
                                id: '8249dfd571e74a03918547cfd3d2d81b'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop_time'
                                    caption: 'GTFS Stop Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'departure_time'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '036a0d7736924c7d8c3602124844f11c'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'stop_sequence'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '03a76dbd487648cfac968dabb5204bf8'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_routes'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0432107130f14f059a3c5623c47eb075'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_trips'
                            element: 'u_bikes_allowed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '047e10e02ee04e01a2b96463eb06d36d'
                        key: {
                            name: 'x_msag_gtfs_schedu_calendar'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '049cd53aa0f14a23bdecca1c27779d70'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'color_bg'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '04a12a5cfe234f7397f58591562c44bd'
                        key: {
                            sys_ui_section: {
                                id: '8249dfd571e74a03918547cfd3d2d81b'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop_time'
                                    caption: 'GTFS Stop Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'trip'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '04e32b718a474d899f62f965863cb54a'
                        key: {
                            sys_ui_section: {
                                id: 'c77b564d34054d9589fc7b4e71093c78'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop'
                                    caption: 'GTFS Stop'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'stop_lat'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '05106873e0024f5fad86f979bccc7efd'
                        key: {
                            sys_ui_form: {
                                id: 'b2f2bd52dc104819b474ee8d22d7ac44'
                                key: {
                                    name: 'x_msag_gtfs_schedu_service_day'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '77a515ad52c94c9daecaeca99434dcfb'
                                key: {
                                    name: 'x_msag_gtfs_schedu_service_day'
                                    caption: 'GTFS Service Day'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '057c928b65e44448adaf0f6586100385'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'cnt_trips'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '0590d8e83cec4491adee474a884d6df9'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'drop_off_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0601e1cf1613448eb4a01c089d3a50ab'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'last_stop'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '061e37690191448fa996de04a61eb46e'
                        key: {
                            name: 'x_msag_gtfs_schedu_agency'
                            element: 'agency_lang'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '06eccc8aa69445dea024804823e0097d'
                        key: {
                            logical_table_name: 'x_msag_gtfs_schedu_stop'
                            col_name_string: 'parent_station'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '081000893a4a4585afacedc3a1cb790b'
                        key: {
                            sys_ui_section: {
                                id: 'ea1d2ee8903d4145a35fb89a3077037a'
                                key: {
                                    name: 'x_msag_gtfs_schedu_feed'
                                    caption: 'GTFS Feed'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '0863ea0d3a7d4879aa78dda9959967a0'
                        key: {
                            map: '7ef6da532bcd464baab8601c7f605324'
                            target_field: 'route_desc'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '095a35be92d94bb69b5606f7febe4510'
                        key: {
                            sys_ui_section: {
                                id: 'ea1d2ee8903d4145a35fb89a3077037a'
                                key: {
                                    name: 'x_msag_gtfs_schedu_feed'
                                    caption: 'GTFS Feed'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'source_url'
                            position: '15'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '095b04019a3a4b758471ef3800fc69c9'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_cal'
                            element: 'u_monday'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '09b2692fdf9840f4a98143c362fefb8e'
                        key: {
                            sys_ui_section: {
                                id: 'c77b564d34054d9589fc7b4e71093c78'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop'
                                    caption: 'GTFS Stop'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'child_count'
                            position: '17'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '09db74779a214e58a7356552fa40fa6b'
                        key: {
                            name: 'x_msag_gtfs_schedu_calendar'
                            element: 'thursday'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0a776485b221484796dbb5d36832e412'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_routes'
                            element: 'u_route_url'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0a85bd2443224304952f664da5833df7'
                        key: {
                            sys_ui_section: {
                                id: 'bd304d3148344cc8ab14a18c6b1f01fd'
                                key: {
                                    name: 'x_msag_gtfs_schedu_agency'
                                    caption: 'GTFS Agency'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'feed'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0ae33116ba3c4197aedc772d3ff8e439'
                        key: {
                            sys_ui_section: {
                                id: 'bd304d3148344cc8ab14a18c6b1f01fd'
                                key: {
                                    name: 'x_msag_gtfs_schedu_agency'
                                    caption: 'GTFS Agency'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'agency_id'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0b20cf1524944dbab92e860c7fd1a0e3'
                        key: {
                            name: 'x_msag_gtfs_schedu_calendar'
                            element: 'end_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0b30d2f13f1945338d94f761976da04f'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'contact_email'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0b34838efde24687a2efb7975ddd534b'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_feed'
                            element: 'u_feed_start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0bc17c190efe4fa1849e598fcf10d5ef'
                        key: {
                            name: 'x_msag_gtfs_schedu_calendar'
                            element: 'wednesday'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0bc6a8525ab74eb1826efa77c14391fd'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stops'
                            element: 'u_stop_code'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '0bd15f8c8ee74ce0839a591c149c2f27'
                        key: {
                            sys_ui_form: {
                                id: 'ea29648d3d4c44c9807eb20421ad6cf2'
                                key: {
                                    name: 'x_msag_gtfs_schedu_cal_date'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'ca1866c083c4481ca0deeb899e17c84e'
                                key: {
                                    name: 'x_msag_gtfs_schedu_cal_date'
                                    caption: 'GTFS Calendar Date'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0d12609d157043ca9282cedd5299bf60'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stops'
                            element: 'u_parent_station'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0d3fc63f27244ebdbf865a610fc11be0'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'color_bg'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '0da027fad34a445fa7ce4053490a3195'
                        key: {
                            sys_ui_form: {
                                id: '48074ace4a2945689539c656b0054aac'
                                key: {
                                    name: 'x_msag_gtfs_schedu_trip'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '2055d4dc37b240bb981b8871d14c6631'
                                key: {
                                    name: 'x_msag_gtfs_schedu_trip'
                                    caption: 'GTFS Trip'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0e3c96003df740f1841c5ecf2c7ebc4a'
                        key: {
                            name: 'x_msag_gtfs_schedu_calendar'
                            element: 'saturday'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '0f2a204fb6ef45919cf292235e5958b6'
                        key: {
                            map: '22fa88697ebd4b3a8bc8d3b6e2bc34f7'
                            target_field: 'stop_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1068fe80c58848058c1e3e467022bd15'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_feed'
                            element: 'u_feed_lang'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '10b789f0a71b4242958a1bdb7d3f7f03'
                        key: {
                            map: '22fa88697ebd4b3a8bc8d3b6e2bc34f7'
                            target_field: 'stop_code'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '10bb7c6f771146d3bbf736b7a18b9f88'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'route_short_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '10d7f2ef22534fd6aa47d4939749e753'
                        key: {
                            sys_ui_section: {
                                id: '2055d4dc37b240bb981b8871d14c6631'
                                key: {
                                    name: 'x_msag_gtfs_schedu_trip'
                                    caption: 'GTFS Trip'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'last_stop'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1108c4adb635464e93b0613ac2cd003d'
                        key: {
                            sys_ui_section: {
                                id: 'c77b564d34054d9589fc7b4e71093c78'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop'
                                    caption: 'GTFS Stop'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'stop_desc'
                            position: '19'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1130e3928baf42bba9775150ca516f6f'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'wheelchair_accessible'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1152d549892c43c6b19fafd46539d2be'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_routes'
                            element: 'u_route_url'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '118d06228d2e4d2287125ead8dcbd6e7'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stimes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '11f1785036d94707b19d93cf3c15910a'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_cal'
                            element: 'u_friday'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '1207952af5134153a500aec6ed2b15eb'
                        key: {
                            sys_ui_form: {
                                id: '7f535b49c4d7447f9208137c786554c5'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop_time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '8249dfd571e74a03918547cfd3d2d81b'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop_time'
                                    caption: 'GTFS Stop Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '12b64779c2b848d7b8dd86e89aacd059'
                        key: {
                            sys_ui_form: {
                                id: '4b404b86e75f4c03b522a47a39af7019'
                                key: {
                                    name: 'x_msag_gtfs_schedu_agency'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'bd304d3148344cc8ab14a18c6b1f01fd'
                                key: {
                                    name: 'x_msag_gtfs_schedu_agency'
                                    caption: 'GTFS Agency'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '130414212ee34b85bcb58d638a83319f'
                        key: {
                            sys_ui_section: {
                                id: 'ea1d2ee8903d4145a35fb89a3077037a'
                                key: {
                                    name: 'x_msag_gtfs_schedu_feed'
                                    caption: 'GTFS Feed'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'contact_url'
                            position: '14'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '130a1c008cf44641ba752aea65dd6be0'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_agency'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '132da0e594fa40d9a9fb951c1fd1df2a'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'service_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '138471c785d74d629d1a271270b53459'
                        key: {
                            sys_ui_section: {
                                id: 'ea1d2ee8903d4145a35fb89a3077037a'
                                key: {
                                    name: 'x_msag_gtfs_schedu_feed'
                                    caption: 'GTFS Feed'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'valid_from'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '13b685de82304695b55acae0dc062ad9'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'stop_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '148d0518571e46cdb30997192bffabe1'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'wheelchair_accessible'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '152c9a0d6eb2495095b5c3f57d868e40'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'wheelchair_accessible'
                            value: '0'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '15b4b54061ca40168a3b4bf9eb969dfb'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'pickup_type'
                            value: '3'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '15fb3bd3e3854da3917778bec599c7f5'
                        key: {
                            sys_ui_section: {
                                id: 'ea1d2ee8903d4145a35fb89a3077037a'
                                key: {
                                    name: 'x_msag_gtfs_schedu_feed'
                                    caption: 'GTFS Feed'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '15fd1a09dab44943a8d08e9d6497027b'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'imported_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '162d83fe2bb548b697bf16f5bbeadee0'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'route_url'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '163d1a0a5ff04973805e81ebe96b8b58'
                        key: {
                            sys_ui_section: {
                                id: 'c77b564d34054d9589fc7b4e71093c78'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop'
                                    caption: 'GTFS Stop'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'stop_timezone'
                            position: '15'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '164adde0ec4a48869ae3faac40a126a0'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'direction_id'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '168122d21b6c4493bb4daec84d4e482a'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_trips'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '1683adf7873946d09388faa5d4f86c28'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_agency'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '16fc0ee8794342c59e70d5a45d2c90e1'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'trip'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '173106957a6c4696a4053aea3feb1926'
                        key: {
                            name: 'x_msag_gtfs_schedu_calendar'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '178d88dbab5f4c2783d12a102acb00f8'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_feed'
                            element: 'u_feed_end_date'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '17d53ad4092f4edf83a48ed2256a0132'
                        key: {
                            map: '22fa88697ebd4b3a8bc8d3b6e2bc34f7'
                            target_field: 'platform_code'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '181a9adb581b48b9b472c0070d67105a'
                        key: {
                            sys_ui_form: {
                                id: '3822c30766ef445bb2d0905bfe90a584'
                                key: {
                                    name: 'x_msag_gtfs_schedu_feed'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'ea1d2ee8903d4145a35fb89a3077037a'
                                key: {
                                    name: 'x_msag_gtfs_schedu_feed'
                                    caption: 'GTFS Feed'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '18dcda9c44ad47f2ae2f9aedbee464e0'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'route_long_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '1900a65ec2814e4b9451c350692094ee'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '193142f85e79431f8a3aad358f21e507'
                        key: {
                            sys_ui_section: {
                                id: 'ea1d2ee8903d4145a35fb89a3077037a'
                                key: {
                                    name: 'x_msag_gtfs_schedu_feed'
                                    caption: 'GTFS Feed'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'valid_until'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '19a8eaecc0ff4003be17aaf2c4422665'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'platform_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '19cf7418770047459f4e5e187d8f43bf'
                        key: {
                            name: 'x_msag_gtfs_schedu_service_day'
                            element: 'service_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1a1b19b021724e8d978ad2571a36d308'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'pickup_type'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '1a30570cb4a04aafac31cc20e9faf22a'
                        key: {
                            map: '22fa88697ebd4b3a8bc8d3b6e2bc34f7'
                            target_field: 'stop_lon'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1a748b9da2284442a80ce638e7009f6a'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_agency'
                            element: 'u_agency_url'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1a7722bdba7547d1bb62061114a253c7'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'stop_name_search'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1a858bf7483d4771893ee37fb2f42bac'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'cnt_stops'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1a941c2fe549433fbd195db77943fcf3'
                        key: {
                            sys_ui_section: {
                                id: '8f037452c1164012875a09d07fe2b469'
                                key: {
                                    name: 'x_msag_gtfs_schedu_calendar'
                                    caption: 'GTFS Calendar'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'feed'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1a9dd3f2c43c47d4b627a2bcbc63dc3f'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'route_short_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1ac834051b844b9eb36d5be964444fe1'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_agency'
                            element: 'u_agency_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1b03c0b6c72b49d1bda8f3fb27797e35'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_feed'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1b34bdf1a9124dffb0b765a505cce6aa'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stops'
                            element: 'u_stop_url'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1bc4c78b90a640a6be30c75b2671cdee'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stops'
                            element: 'u_platform_code'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: '1beaf40d5aea464bb0d91371279f1725'
                        key: {
                            sp_widget: 'd99a2c612ce9447e93fdfad8889dee19'
                            sp_angular_provider: '535e02f9daf94a70866cf70d1e422ca2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1bf7007663484619b84c44b6ec98ac5c'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_cal'
                            element: 'u_thursday'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '1ccd96b8bf6a4b7282a8f6295b4157e1'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'timepoint'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: '1cea6eb0240a45a5bfe7738cb4520ae2'
                        key: {
                            sp_widget: '4b43a2ab16614e069a2a3af80c2f68ae'
                            sp_angular_provider: '535e02f9daf94a70866cf70d1e422ca2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1e67a31d10794016be81766f492e3588'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'child_count'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1f045e8596da4729937a33904207acaa'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'valid_from'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1f5a4f5a35f54b94be36ec98370db404'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_agency'
                            element: 'u_agency_url'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1fbe785d756f487fbbe1052d2aec9bf6'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'feed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1fdcc717ad654e168bd1981fd179904e'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'first_stop'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '203beb3b62b247ffb0f7bade0a602c7a'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_caldt'
                            element: 'u_service_id'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '2055d4dc37b240bb981b8871d14c6631'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            caption: 'GTFS Trip'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2078ad4c00c9403aa30181d3e4527b24'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'wheelchair_accessible'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '209b306943c043e49cb3976ffd30d68c'
                        key: {
                            name: 'x_msag_gtfs_schedu_service_day'
                            element: 'feed'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '20eaf2e7ae6948ca9855c94e9a819c4a'
                        key: {
                            map: '7ef6da532bcd464baab8601c7f605324'
                            target_field: 'route_type'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '217ad943f9b04f43a70c07a5c58c2dc4'
                        key: {
                            logical_table_name: 'x_msag_gtfs_schedu_stop_time'
                            col_name_string: 'trip,stop_sequence'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2227084d23e44eecbd1b4b918e4657d5'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'last_arrival_sec'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '22b8a9ac791546fa9102838c01d4334f'
                        key: {
                            sys_ui_section: {
                                id: 'c77b564d34054d9589fc7b4e71093c78'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop'
                                    caption: 'GTFS Stop'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '18'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '23f3c5358977464d9766b5b41eaa077b'
                        key: {
                            name: 'x_msag_gtfs_schedu_cal_date'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2550f2da5f7544769f1ac28acba3fb6a'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_cal'
                            element: 'u_start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '25b46ce1e7e847ddba24dc9a72fb64b5'
                        key: {
                            sys_ui_section: {
                                id: 'bd304d3148344cc8ab14a18c6b1f01fd'
                                key: {
                                    name: 'x_msag_gtfs_schedu_agency'
                                    caption: 'GTFS Agency'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '260ff3747aab42ddba9fb0dfb64a6a0c'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'last_arrival_sec'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '26564c23453e42d2b9a7e234e2683bc3'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'pickup_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '26a778161790484c9aef9e717500d751'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'first_stop'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '26cd45ce9d8a495e95bf2e7df7da6dd0'
                        key: {
                            sys_ui_section: {
                                id: '8249dfd571e74a03918547cfd3d2d81b'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop_time'
                                    caption: 'GTFS Stop Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'stop'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '26d7a786a315453681c304dc05063102'
                        key: {
                            sys_ui_section: {
                                id: 'bd304d3148344cc8ab14a18c6b1f01fd'
                                key: {
                                    name: 'x_msag_gtfs_schedu_agency'
                                    caption: 'GTFS Agency'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '26e1bcd363174905a5eb0594ca92d304'
                        key: {
                            sys_ui_section: {
                                id: '2055d4dc37b240bb981b8871d14c6631'
                                key: {
                                    name: 'x_msag_gtfs_schedu_trip'
                                    caption: 'GTFS Trip'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'bikes_allowed'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '26e4dd3a93f7450fb18ea17cb1d1258c'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'trip_headsign'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '278f09e6438549158019469a08921687'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'stop_desc'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '27bc349bb68b4d8dae7d988e8a9f3f35'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'cnt_stop_times'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2826e9140f874e979d4e5641611796b8'
                        key: {
                            sys_ui_section: {
                                id: '653abe0a825344749ac82b1a0a1820c7'
                                key: {
                                    name: 'x_msag_gtfs_schedu_route'
                                    caption: 'GTFS Route'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'display_name'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2832baed6d314f0396cbf307f28119ac'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'direction_id'
                            value: '0'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2856cccfcebf487699e4da51d554b896'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'zone_id'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2886f3c3e86a4ca5a278d9a196e9a36d'
                        key: {
                            sys_ui_section: {
                                id: 'ea1d2ee8903d4145a35fb89a3077037a'
                                key: {
                                    name: 'x_msag_gtfs_schedu_feed'
                                    caption: 'GTFS Feed'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'validation_log'
                            position: '22'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '28d96c0c5be54669b00b7d8d03ed1d3d'
                        key: {
                            sys_ui_section: {
                                id: '653abe0a825344749ac82b1a0a1820c7'
                                key: {
                                    name: 'x_msag_gtfs_schedu_route'
                                    caption: 'GTFS Route'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '29022fdded32468387c34be07fbddce6'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stops'
                            element: 'u_stop_lon'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2926b5c6741a457ab2cc2f6fdddcb91d'
                        key: {
                            sys_ui_section: {
                                id: 'c77b564d34054d9589fc7b4e71093c78'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop'
                                    caption: 'GTFS Stop'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'parent_station'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '299a66c83238405abd9e830742ab4670'
                        key: {
                            map: '7ef6da532bcd464baab8601c7f605324'
                            target_field: 'route_short_name'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2b4f9f5de4b842a6ae8753cb831fb0df'
                        key: {
                            sys_ui_section: {
                                id: '653abe0a825344749ac82b1a0a1820c7'
                                key: {
                                    name: 'x_msag_gtfs_schedu_route'
                                    caption: 'GTFS Route'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'route_long_name'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2bdf06e1d1e24276a449fc77f817c55f'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stimes'
                            element: 'u_trip_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2c5fea2372cb471b97c46af79017816d'
                        key: {
                            sys_ui_section: {
                                id: '2055d4dc37b240bb981b8871d14c6631'
                                key: {
                                    name: 'x_msag_gtfs_schedu_trip'
                                    caption: 'GTFS Trip'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2cb4d7a314144faf975ef5b6dadf0aee'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_cal'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2d1782ef89c4452280ab6b6d24b38edb'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_cal'
                            element: 'u_service_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2d1bb3a35cd14863962c20b75186fa0b'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_routes'
                            element: 'u_route_id'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '2d30999d3e78468a82dd90d3cc00383b'
                        key: {
                            map: 'b03ee2299f61432aa4946a38e5ff9051'
                            target_field: 'agency_timezone'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2d52009c75214d508e3ece15e3b8d447'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'stop_desc'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2ddca5c8bf2542798d310797617e80f9'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'route_url'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2e141c62d365406eadf3b17aa0611ae6'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'status'
                            value: 'archived'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '2f417078cf3442e7b55c59849f3ece90'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'direction_id'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2f7d48f0149b46b59fbb588a5c74191c'
                        key: {
                            sys_ui_section: {
                                id: 'ea1d2ee8903d4145a35fb89a3077037a'
                                key: {
                                    name: 'x_msag_gtfs_schedu_feed'
                                    caption: 'GTFS Feed'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '30db2bdeb14843d1a599b9e37a81d251'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'wheelchair_boarding'
                            value: '0'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '30fce132dfa549ccb6b25db1f4e38c26'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'wheelchair_boarding'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '30fe7935b807421c8a5a07e468330d02'
                        key: {
                            sys_ui_section: {
                                id: '8f037452c1164012875a09d07fe2b469'
                                key: {
                                    name: 'x_msag_gtfs_schedu_calendar'
                                    caption: 'GTFS Calendar'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'sunday'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '311b27aa7a264c56b6c7f5a7cd4218db'
                        key: {
                            sys_ui_section: {
                                id: 'ca1866c083c4481ca0deeb899e17c84e'
                                key: {
                                    name: 'x_msag_gtfs_schedu_cal_date'
                                    caption: 'GTFS Calendar Date'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'feed'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '31260d5279d44be2aa183b792b7962cb'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stops'
                            element: 'u_platform_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '336bf544315f432c9d1961fb33084693'
                        key: {
                            sys_ui_section: {
                                id: '8249dfd571e74a03918547cfd3d2d81b'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop_time'
                                    caption: 'GTFS Stop Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'feed'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3431d2c5d3b944fea36ffe5b4978b9db'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'timepoint'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '34ee82fec0284de0b63e6daaf41a4c2d'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_trips'
                            element: 'u_direction_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '35e417db4e584185a09f3eb25f7f3773'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'bikes_allowed'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '367c928ec6474184bca68454edd8ef55'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'direction_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '36c5fd1395fe4b25b8f648c900095244'
                        key: {
                            name: 'x_msag_gtfs_schedu_cal_date'
                            element: 'service_id'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '36da61f75d754760af43e3051f857ab9'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'bikes_allowed'
                            value: '0'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '379e915bac8748c388a5c383716c8ad0'
                        key: {
                            name: 'x_msag_gtfs_schedu_agency'
                            element: 'agency_timezone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '37abfc3fb46c46d2ac705d157bcfe0d6'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_routes'
                            element: 'u_route_long_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '37cb4045ff464539889fff83dd8bec6c'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'is_last_stop'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '3822c30766ef445bb2d0905bfe90a584'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '38d15130474c48018501b766e992270d'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'is_last_stop'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '38f8977cd7d24916b85e782bd39ec4a3'
                        key: {
                            sys_ui_section: {
                                id: 'ea1d2ee8903d4145a35fb89a3077037a'
                                key: {
                                    name: 'x_msag_gtfs_schedu_feed'
                                    caption: 'GTFS Feed'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'status'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3922c186390a4d66a31a989067b934f2'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_agency'
                            element: 'u_agency_email'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '39433d2ebee24f229e67bed0cc5374d9'
                        key: {
                            sys_ui_section: {
                                id: '8f037452c1164012875a09d07fe2b469'
                                key: {
                                    name: 'x_msag_gtfs_schedu_calendar'
                                    caption: 'GTFS Calendar'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '396b8d15702141db9f69c37ca96dd4a0'
                        key: {
                            map: 'b03ee2299f61432aa4946a38e5ff9051'
                            target_field: 'agency_email'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '39a0fab4bac048b18d9d3bb23c3bf57d'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'stop_lon'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '39eedc42f804412ab67692a49c583307'
                        key: {
                            logical_table_name: 'x_msag_gtfs_schedu_trip'
                            col_name_string: 'route,direction_id,service_id,first_departure_sec'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3ad2bb73815b490ea9b04c5c224d3210'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'direction_id'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: '3b5b654bfb4845a2b81e3e10e809c7e7'
                        key: {
                            sp_widget: '91c87eb662d74fb89d6c1348af78d866'
                            sp_angular_provider: '535e02f9daf94a70866cf70d1e422ca2'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3b74d8e9ec4b4e70a465c2a8a43550f9'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'pickup_type'
                            value: '0'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '3bb7c0c03cab4a1f8c501a6ada422fa2'
                        key: {
                            map: '7ef6da532bcd464baab8601c7f605324'
                            target_field: 'route_url'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3d41900be5f54779ad78301ee028effa'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_caldt'
                            element: 'u_exception_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3e49b866705747dc921ed07d2a4bbe99'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'stop_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3f6b8121dd3546a687ee4866ed22dd9f'
                        key: {
                            sys_ui_section: {
                                id: 'ea1d2ee8903d4145a35fb89a3077037a'
                                key: {
                                    name: 'x_msag_gtfs_schedu_feed'
                                    caption: 'GTFS Feed'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '20'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3f761e45686847cca2657550542518ad'
                        key: {
                            sys_ui_section: {
                                id: 'ea1d2ee8903d4145a35fb89a3077037a'
                                key: {
                                    name: 'x_msag_gtfs_schedu_feed'
                                    caption: 'GTFS Feed'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'contact_email'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3f8d165060524d91af251c176e5b75ca'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stimes'
                            element: 'u_pickup_type'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3feafb47037146d1bff112d8158a7f59'
                        key: {
                            sys_ui_section: {
                                id: '653abe0a825344749ac82b1a0a1820c7'
                                key: {
                                    name: 'x_msag_gtfs_schedu_route'
                                    caption: 'GTFS Route'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'route_type'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '402655b2fac64f8796719669bc96d86c'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'arrival_sec'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4030f054af714bda864f6fa8f97d2cf9'
                        key: {
                            sys_ui_section: {
                                id: '8f037452c1164012875a09d07fe2b469'
                                key: {
                                    name: 'x_msag_gtfs_schedu_calendar'
                                    caption: 'GTFS Calendar'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'start_date'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '416453fea93e4784a4b305a73effb10c'
                        key: {
                            map: '2862adeefea540a6857d8eb3eb84c078'
                            target_field: 'wheelchair_accessible'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '41a525468482419981eebe5e9b11ea28'
                        key: {
                            name: 'x_msag_gtfs_schedu_service_day'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '420be3b1a06a420d9b52f82ee6be89e3'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_trips'
                            element: 'u_trip_short_name'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '436f8b0bddcb42f4b69ec80d51489996'
                        key: {
                            id: 'x_msag_gtfs_schedu_routes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '43a3e1cc66334d78808e1e9008a353c9'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'feed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '440b2704008d4cfa992bc54fbf0e59d3'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_feed'
                            element: 'u_feed_lang'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '444758aa2b3d429d9f3518368c18da29'
                        key: {
                            sys_ui_section: {
                                id: '8249dfd571e74a03918547cfd3d2d81b'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop_time'
                                    caption: 'GTFS Stop Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'stop_sequence'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '44afd3e4767e4da5a7f65b8f68e6bc8e'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_feed'
                            element: 'u_feed_contact_url'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '45349c68b3794e34bc9f20e0a5ec759b'
                        key: {
                            name: 'x_msag_gtfs_schedu_agency'
                            element: 'agency_name'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '45fe7815650b406482455a315f7d653f'
                        key: {
                            sys_ui_section: {
                                id: 'c77b564d34054d9589fc7b4e71093c78'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop'
                                    caption: 'GTFS Stop'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'stop_id'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '46075ad1a87f4dffa603e3d5eaa798ba'
                        key: {
                            name: 'x_msag_gtfs_schedu_calendar'
                            element: 'start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '462f5f489e26477dbf6648bf3ae52cf3'
                        key: {
                            name: 'x_msag_gtfs_schedu_calendar'
                            element: 'tuesday'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '466c4b43dc484affbff4e534f3cfd9ba'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'location_type'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '46b2432c7526456fa69e3521f815fedb'
                        key: {
                            sys_ui_section: {
                                id: '8249dfd571e74a03918547cfd3d2d81b'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop_time'
                                    caption: 'GTFS Stop Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'pickup_type'
                            position: '11'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '473c577746d84b61af66c352031d222a'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_routes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4787a4af4c524098ab961a450c992ccc'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'license_text'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '47907a1a21f047ea888c9b0bdd408a27'
                        key: {
                            name: 'x_msag_gtfs_schedu_cal_date'
                            element: 'feed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '47ff7251389f42a5ab067a3411486de8'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'arrival_sec'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '48074ace4a2945689539c656b0054aac'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '48167fe2fd394621868c984f24b8e61b'
                        key: {
                            sys_ui_section: {
                                id: '653abe0a825344749ac82b1a0a1820c7'
                                key: {
                                    name: 'x_msag_gtfs_schedu_route'
                                    caption: 'GTFS Route'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'color_fg'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '48b3b4bee268472aaada40b850c65804'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'mode_group'
                            value: 'cable_car'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '48c0f130c3b04c26a5c6da91d4aa4e17'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stimes'
                            element: 'u_departure_time'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '48f5c3f59b0b4203b005d36ec20d38c8'
                        key: {
                            sys_ui_section: {
                                id: '2055d4dc37b240bb981b8871d14c6631'
                                key: {
                                    name: 'x_msag_gtfs_schedu_trip'
                                    caption: 'GTFS Trip'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'direction_id'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '490ec42ad83e4544858dd504a60f5840'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'valid_until'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '49444161cabf4adbae7203dff7bd1503'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_trips'
                            element: 'u_bikes_allowed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '494fe4b529204dc4b074cdf84896b411'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'wheelchair_accessible'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '49e3c165c78b4dd1b5adda38f3b1d38f'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stimes'
                            element: 'u_stop_headsign'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4a2e427de4544d5880aa22c6b8465d5b'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stops'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4a42cee601e64854a6a42db2eecf11a3'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_agency'
                            element: 'u_agency_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4a49c8ffd89d4ed4bd5c88bae43918c7'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'display_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4acdd7a3bbda418bba26b36f5f3b63f1'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stops'
                            element: 'u_stop_name'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '4b404b86e75f4c03b522a47a39af7019'
                        key: {
                            name: 'x_msag_gtfs_schedu_agency'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4ba8fb4f4f7c4638b8f7816d1fc15bf0'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'route_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4bf54d3b45ad4a4fa18152e358879cbe'
                        key: {
                            name: 'x_msag_gtfs_schedu_agency'
                            element: 'feed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4d1103925b9f4c41a20043864bbbf0e9'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'agency_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4d39915724884e3f9cff911742c1b3e7'
                        key: {
                            name: 'x_msag_gtfs_schedu_cal_date'
                            element: 'date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4d5c7e6d4a7749b49ded53eaf6f95d44'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_routes'
                            element: 'u_agency_id'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '4d60136b2dd04ff8bd37900dd9862bba'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4f2354266dc14d41955b894f74f0efd4'
                        key: {
                            name: 'x_msag_gtfs_schedu_calendar'
                            element: 'sunday'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4f6d457fc8c5454bbcfd049232159566'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stimes'
                            element: 'u_timepoint'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4fc2fb0aea974a1d9484a06292212e4a'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_agency'
                            element: 'u_agency_lang'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4fd797265e124623917e293da2349745'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_routes'
                            element: 'u_route_short_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '501fe823f4b248179ee30b8deb43ae04'
                        key: {
                            name: 'x_msag_gtfs_schedu_calendar'
                            element: 'feed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '509142b668a84534b865cb492dfbaa80'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'contact_url'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '50c29a8eb77b411bab1dfdb6b7efc619'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_caldt'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '5205a64533c544d5a971863846a9cc27'
                        key: {
                            logical_table_name: 'x_msag_gtfs_schedu_cal_date'
                            col_name_string: 'feed,service_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5227cd4095e448a7bb7615eeeee0fae4'
                        key: {
                            name: 'x_msag_gtfs_schedu_agency'
                            element: 'agency_url'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '523619e3bce04238be801b6800e91cb6'
                        key: {
                            sys_ui_section: {
                                id: 'c77b564d34054d9589fc7b4e71093c78'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop'
                                    caption: 'GTFS Stop'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'location_type'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '523b64dc35444d6d897c23b5a69b2673'
                        key: {
                            map: '7ef6da532bcd464baab8601c7f605324'
                            target_field: 'agency_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '52a7743ba9d54406a71171738dafaf7a'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'activated_on'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5322e35e5658429ba5b03d9c5bbb2001'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_agency'
                            element: 'u_agency_phone'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '53236d77e9994e3d9498c564119e5353'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stimes'
                            element: 'u_stop_sequence'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '536dd2797784427e83a700144bb796e2'
                        key: {
                            map: '22fa88697ebd4b3a8bc8d3b6e2bc34f7'
                            target_field: 'stop_lat'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '539b7603f99e4f12954f4ed337158e9e'
                        key: {
                            sys_ui_section: {
                                id: 'ea1d2ee8903d4145a35fb89a3077037a'
                                key: {
                                    name: 'x_msag_gtfs_schedu_feed'
                                    caption: 'GTFS Feed'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'cnt_trips'
                            position: '18'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '53b991f92d104ec2b3682f9553d26219'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_agency'
                            element: 'u_agency_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '53cf4a01c9264fb5a0e3d274d65b9f17'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'route'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '540461a5ef6d4f4494389b2394929b26'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stimes'
                            element: 'u_location_group_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5479a38e97674e02b22264b287a18ab6'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'publisher_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '549b2dd8fd454d809b28e202fdfa2213'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_cal'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '54f2cb8f45184afba92ce74ee9dba7d3'
                        key: {
                            sys_ui_section: {
                                id: 'c77b564d34054d9589fc7b4e71093c78'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop'
                                    caption: 'GTFS Stop'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'zone_id'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '550b081559104acab2a2ec8f4bc34c94'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_cal'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '551a905d95cb46579ed477dd930634a1'
                        key: {
                            sys_ui_section: {
                                id: '8249dfd571e74a03918547cfd3d2d81b'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop_time'
                                    caption: 'GTFS Stop Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'departure_sec'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '555ccca8e7ac4448817aff2c56cb6105'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'pickup_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '55ad9dff85ea45c583504cfd39942529'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'wheelchair_boarding'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '55c1419903e5467d995a5459d8e04a0f'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'stop_name_search'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5661252e2d864cc4a351995d4244b9c7'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'activated_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5694e301cfac4ae3befb13a9994ec251'
                        key: {
                            name: 'x_msag_gtfs_schedu_cal_date'
                            element: 'feed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '56aa0fca043c4704996eef09df876363'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_trips'
                            element: 'u_route_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '56e8ee8d2e46443e951ff4d2cb3de92b'
                        key: {
                            sys_ui_section: {
                                id: 'c77b564d34054d9589fc7b4e71093c78'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop'
                                    caption: 'GTFS Stop'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'stop_lon'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '57292a8d769242a1871833736b620f46'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5791a9622bdd40e6a20720bed1a4ab1f'
                        key: {
                            sys_ui_section: {
                                id: 'c77b564d34054d9589fc7b4e71093c78'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop'
                                    caption: 'GTFS Stop'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'is_searchable'
                            position: '16'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '57bc8ae342354e6e9442c38a79f3a657'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '57f8b6dabd1042a08deaccc4d2aa25a6'
                        key: {
                            sys_ui_section: {
                                id: '8249dfd571e74a03918547cfd3d2d81b'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop_time'
                                    caption: 'GTFS Stop Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '587651f9dc7d4f94ac57db330170827b'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'wheelchair_boarding'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '5876d1e94f16424f9257fb108a2545aa'
                        key: {
                            logical_table_name: 'x_msag_gtfs_schedu_trip'
                            col_name_string: 'feed,trip_id'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '58df2e8ffd174076942ff22703ef3069'
                        key: {
                            sys_ui_section: {
                                id: 'c77b564d34054d9589fc7b4e71093c78'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop'
                                    caption: 'GTFS Stop'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'feed'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '594a26cdbfa942018f146a145579a3cd'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'stop_headsign'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '59e8485c00954f98a5b09b0aaa53e97b'
                        key: {
                            sys_ui_section: {
                                id: '653abe0a825344749ac82b1a0a1820c7'
                                key: {
                                    name: 'x_msag_gtfs_schedu_route'
                                    caption: 'GTFS Route'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'route_id'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '59ea296d93d54fa78c26cd8a15603811'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5ade7660b3c243a7b8bd86c678e25fd9'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5b4d5c75165540678dcbb402f60327be'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stimes'
                            element: 'u_trip_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5b61dfb503524686b65c00a56cda686b'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5b684089891243caaa33bb40260df596'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_cal'
                            element: 'u_wednesday'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5b979096111040109e99ffa744087acb'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_routes'
                            element: 'u_route_text_color'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5c4382a821a0497ba5f71b1314c3f442'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_routes'
                            element: 'u_route_desc'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5e264b9c5d374edaa0bf5fe35d329a4c'
                        key: {
                            sys_ui_section: {
                                id: '8f037452c1164012875a09d07fe2b469'
                                key: {
                                    name: 'x_msag_gtfs_schedu_calendar'
                                    caption: 'GTFS Calendar'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'thursday'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5eb8e429b6a44f0884f4040f46f1c004'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_routes'
                            element: 'u_route_color'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5ee2423709f547538b9803ca9c447e0d'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'route_short_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '5f37f6ed3438493ba5df7dc59393de76'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_feed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5f3b0346d4c24d4f9d7c8c5e0a8a59cd'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_trips'
                            element: 'u_trip_headsign'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5fe82d40f2984e2c80ef3ded1ed59370'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'status'
                            value: 'active'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '607daab72622414999d31f008a4c5c3f'
                        key: {
                            sys_ui_section: {
                                id: 'ea1d2ee8903d4145a35fb89a3077037a'
                                key: {
                                    name: 'x_msag_gtfs_schedu_feed'
                                    caption: 'GTFS Feed'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'imported_on'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '60d5ef52ca95449d98dbe8232fbea69a'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '615ba58b74fe4ae486167a8692d12dcd'
                        key: {
                            name: 'x_msag_gtfs_schedu_cal_date'
                            element: 'exception_type'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '61685075d77b45f4b9dd7967a62eb7f2'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'mode_group'
                            value: 'ferry'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '61bda2a7185d4774862afef74a7963ad'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'stop_lat'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '61efae50c25046ccab6c1e3d06b95401'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'stop_lat'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '61fe7afda877461c86ed43fbd6eb61f6'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_agency'
                            element: 'u_agency_fare_url'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6245dcb0768747588116ac6f215e058c'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '62bcc63e5ed243af8c0634258dd95453'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'departure_time'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '62f6c631b7c6493790a3138cf816e032'
                        key: {
                            name: 'x_msag_gtfs_schedu_calendar'
                            element: 'monday'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '630ccacf19fb4335b21a921ff5a89a6b'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'location_type'
                            value: '3'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '63558b954f2d4772a7ab2600cfe33d62'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'feed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '63607184022544ab888e7ca157684fc4'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'stop_url'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6382adc8a34f42eb9db3eec2c8f93c4f'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_trips'
                            element: 'u_trip_headsign'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '63f21e7a00c2405ab785c13604dee149'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stimes'
                            element: 'u_stop_headsign'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '64183d693e354d98ab7f38141cea2d4a'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'valid_until'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '64501a7890674894a567901a515c5b13'
                        key: {
                            sys_ui_section: {
                                id: '2055d4dc37b240bb981b8871d14c6631'
                                key: {
                                    name: 'x_msag_gtfs_schedu_trip'
                                    caption: 'GTFS Trip'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'first_stop'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '648fe68990704abf8253272cc2df9e18'
                        key: {
                            name: 'x_msag_gtfs_schedu_service_day'
                            element: 'date'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6491e10ba99f4aba951f20ea68c747c2'
                        key: {
                            sys_ui_section: {
                                id: '2055d4dc37b240bb981b8871d14c6631'
                                key: {
                                    name: 'x_msag_gtfs_schedu_trip'
                                    caption: 'GTFS Trip'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '64e731f703e3422a850fcfc00a4ea06f'
                        key: {
                            name: 'x_msag_gtfs_schedu_agency'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '653abe0a825344749ac82b1a0a1820c7'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            caption: 'GTFS Route'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6608f0ac058a4f99824b63a6e68c287e'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'direction_id'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '662116f0aa0449bf8bfa4b89d4ef3c9b'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'stop_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '665db1b92f3b4cf582838ed130287874'
                        key: {
                            sys_ui_section: {
                                id: 'ca1866c083c4481ca0deeb899e17c84e'
                                key: {
                                    name: 'x_msag_gtfs_schedu_cal_date'
                                    caption: 'GTFS Calendar Date'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'exception_type'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '67281d62f0d34ca1a4c724876beb036f'
                        key: {
                            map: '2862adeefea540a6857d8eb3eb84c078'
                            target_field: 'trip_headsign'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '672940ca81d0432898ca6f26c8addf91'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stimes'
                            element: 'u_arrival_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '68997764dbaf4534a221f4059678e49f'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_agency'
                            element: 'u_agency_timezone'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '68b77ac04d3f460fb330c882acbe2abc'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'agency_timezone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '68e05cf473a44eecb1f69b17e3affc92'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'feed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '696cb35187074b14b31ca8a295fbc4a1'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'drop_off_type'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '698bce574678458cac7340f58d44ae2a'
                        key: {
                            name: 'x_msag_gtfs_schedu_agency'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '69b81c8cbcdf4e398b31b8855c363480'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'trip_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '69d4a056bdc2471a9fdb576cc3f3164c'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'cnt_routes'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6a446775f70641cba19b03d8ff8d43cc'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'direction_id'
                            value: '0'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '6a502152b35a40f2b6023230e16d882f'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'pickup_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6a8e0113c8ef45b39b52b77f6ee2ca73'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'feed_lang'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6ae02778e6f2493b9d3be067bf4b2eba'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'stop'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6b02bee278e843cdb1aca0c59c26cb75'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stops'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '6baafeffa56540a6905a845a0a24058b'
                        key: {
                            map: 'b03ee2299f61432aa4946a38e5ff9051'
                            target_field: 'agency_lang'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6d088687eba1496596dde2a30ee710e1'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'mode_group'
                            value: 'bus'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '6d9bd59f48134126874a5c2a57ed529e'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6da61525c7b04f1c9c6a6357c57b2dba'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'route'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '6def7a885cdd4b1c910a37b5493d1160'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6e01cef458e74d3283fb3bfcf1e9a2c2'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'mode_group'
                            value: 'rail'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6e8834dcc1384b4f8fc93bd25ff9ae42'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'stop_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6f27f1f3f462496f92705cee2322b642'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'bikes_allowed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6f7c5474d6ea4ad988cc73434a1e214b'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'stop_timezone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6f9078d0b5554283b47e9c59c580d3e9'
                        key: {
                            sys_ui_section: {
                                id: 'bd304d3148344cc8ab14a18c6b1f01fd'
                                key: {
                                    name: 'x_msag_gtfs_schedu_agency'
                                    caption: 'GTFS Agency'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'agency_email'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '70406f965a6a4fd1bc187953bc7abb9c'
                        key: {
                            sys_ui_section: {
                                id: 'c77b564d34054d9589fc7b4e71093c78'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop'
                                    caption: 'GTFS Stop'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'stop_code'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7051ee3734d644a3a4b9ce853f3585ed'
                        key: {
                            name: 'x_msag_gtfs_schedu_calendar'
                            element: 'service_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '70b9ca246a404362bdd72ce6ae906777'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_routes'
                            element: 'u_route_short_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '70e45de036fd416686523940fc54eb48'
                        key: {
                            sys_ui_section: {
                                id: 'bd304d3148344cc8ab14a18c6b1f01fd'
                                key: {
                                    name: 'x_msag_gtfs_schedu_agency'
                                    caption: 'GTFS Agency'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'agency_timezone'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '710101ff2be147549ad65b7b1af0b694'
                        key: {
                            document_key: '2eca94c34ca1405d849fb130166deb00'
                            variable: '42f2564b73031300440211d8faf6a777'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7105a18e337c45aaac89c41a67686b7a'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_caldt'
                            element: 'u_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '71a90bd146df4dcabbbba76b5cf23850'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '71aa1f65086646f594de02d97e60e910'
                        key: {
                            sys_ui_section: {
                                id: 'bd304d3148344cc8ab14a18c6b1f01fd'
                                key: {
                                    name: 'x_msag_gtfs_schedu_agency'
                                    caption: 'GTFS Agency'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'agency_url'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '71e522def47945d5a8b8393917bf9962'
                        key: {
                            map: 'b03ee2299f61432aa4946a38e5ff9051'
                            target_field: 'agency_name'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '722c51c09b0d47fe8bfbbe3924110ff5'
                        key: {
                            sys_ui_section: {
                                id: 'ca1866c083c4481ca0deeb899e17c84e'
                                key: {
                                    name: 'x_msag_gtfs_schedu_cal_date'
                                    caption: 'GTFS Calendar Date'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'date'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7288ebe8b16843748c7988d964787fab'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'platform_code'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '72991a2694d74d9ca819c14e2d241b63'
                        key: {
                            id: 'x_msag_gtfs_schedu_route'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '732e95a884914489b71135eec3c93659'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stops'
                            element: 'u_stop_lat'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '73572f23d1d249759b0de927071036c0'
                        key: {
                            sys_ui_section: {
                                id: '8249dfd571e74a03918547cfd3d2d81b'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop_time'
                                    caption: 'GTFS Stop Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'timepoint'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '73d30c3129fe40499d1f6c4d19d96b9b'
                        key: {
                            map: '7ef6da532bcd464baab8601c7f605324'
                            target_field: 'route_sort_order'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '73e7003a388d4362923d973ac4f4d47c'
                        key: {
                            name: 'x_msag_gtfs_schedu_calendar'
                            element: 'thursday'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7456b3bb57d0457a8e346d94ac8b625d'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'zone_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '74cf6fdb38884251a5ef2ec5479c99c7'
                        key: {
                            name: 'x_msag_gtfs_schedu_agency'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '753d07dd7cf84abc9a62acfec562d521'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stimes'
                            element: 'u_arrival_time'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '75eb5352180641749145010f9259ac36'
                        key: {
                            name: 'x_msag_gtfs_schedu_calendar'
                            element: 'end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '760db0bef2de4bbab6ad1a60f6a1e1a2'
                        key: {
                            sys_ui_section: {
                                id: 'ea1d2ee8903d4145a35fb89a3077037a'
                                key: {
                                    name: 'x_msag_gtfs_schedu_feed'
                                    caption: 'GTFS Feed'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'activated_on'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '76123732c7fe4234990026a7e59f5b79'
                        key: {
                            sys_ui_section: {
                                id: 'c77b564d34054d9589fc7b4e71093c78'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop'
                                    caption: 'GTFS Stop'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'wheelchair_boarding'
                            position: '14'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '767703c5d10c46368125e76f5fd03f87'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_feed'
                            element: 'u_feed_version'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7695b04e261b46d3af327d63c3b3f563'
                        key: {
                            name: 'x_msag_gtfs_schedu_calendar'
                            element: 'service_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '76aa94407c224ff088e274db497d85bf'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_routes'
                            element: 'u_route_long_name'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '77a515ad52c94c9daecaeca99434dcfb'
                        key: {
                            name: 'x_msag_gtfs_schedu_service_day'
                            caption: 'GTFS Service Day'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '78020562106c4bb1b8d7792bb269e176'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stimes'
                            element: 'u_stop_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '78c978bc8bce4a3ba06a39814e1e0952'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_cal'
                            element: 'u_tuesday'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '78d1da3404a24f09a30582383515b398'
                        key: {
                            name: 'x_msag_gtfs_schedu_agency'
                            element: 'agency_timezone'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '78e2b0e72fa648bba4d021cccd10d5a3'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_feed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '790b73e975ed4594805b10566d25a32c'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stops'
                            element: 'u_stop_desc'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7981e61020e34726aa66ea7ee6515972'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'service_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7a2da055f2cd4273b0dae88902762cd8'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_trips'
                            element: 'u_route_id'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '7b137ba3a3ef49b29bad62bc9207f2a2'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7b528f5d552a42debf962eb294581d99'
                        key: {
                            sys_ui_section: {
                                id: '653abe0a825344749ac82b1a0a1820c7'
                                key: {
                                    name: 'x_msag_gtfs_schedu_route'
                                    caption: 'GTFS Route'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'mode_group'
                            position: '9'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '7b9ffcbef26f441498f0c3ccf49ff432'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_caldt'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7bb6d9f4468a46d390f07a218a6c026d'
                        key: {
                            name: 'x_msag_gtfs_schedu_calendar'
                            element: 'monday'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7c855a68a38e478591f8b3e639cecf30'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7d06d2c5bd97488ab892019232bab316'
                        key: {
                            sys_ui_section: {
                                id: '8f037452c1164012875a09d07fe2b469'
                                key: {
                                    name: 'x_msag_gtfs_schedu_calendar'
                                    caption: 'GTFS Calendar'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7d0ec56f26fe464f940f0805afafc783'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_cal'
                            element: 'u_friday'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '7db09da3e63042c693bced2b49ed37fd'
                        key: {
                            map: '4c7f22acaa1e4c6eba8b4acc2605a890'
                            target_field: 'arrival_time'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7e0eec9beb62458cabd59814e3832d25'
                        key: {
                            sys_ui_section: {
                                id: '77a515ad52c94c9daecaeca99434dcfb'
                                key: {
                                    name: 'x_msag_gtfs_schedu_service_day'
                                    caption: 'GTFS Service Day'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'date'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7f03892eb0cd42ef8f699b5dc1b8e4c0'
                        key: {
                            name: 'x_msag_gtfs_schedu_agency'
                            element: 'agency_email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7f18650ead5c4506a7e768f91b3fbe18'
                        key: {
                            name: 'x_msag_gtfs_schedu_agency'
                            element: 'agency_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '7f2d79e0d58d405097b9e58f07ab5c1d'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_trips'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7f3892d4e43945afa7dc7d83c9302ac2'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_trips'
                            element: 'u_direction_id'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '7f535b49c4d7447f9208137c786554c5'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7f71f0997746495481c9887bf1e720bc'
                        key: {
                            sys_ui_section: {
                                id: 'ea1d2ee8903d4145a35fb89a3077037a'
                                key: {
                                    name: 'x_msag_gtfs_schedu_feed'
                                    caption: 'GTFS Feed'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'cnt_stops'
                            position: '16'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7f9c0a955ecc4c68907acea8510f815b'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_agency'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '80c39d053c4346bc9073fb98cb6ad2e8'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'timepoint'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '80ef2fad037e4b11b6a58c0401983a2b'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'trip'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8127ee9dc2ed4d8390118ec3f4b85b21'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'cnt_stop_times'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '81311812c06748988c3393d0c798e2d3'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stimes'
                            element: 'u_location_group_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '81314680407d49f7be31906db538629e'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'stop_sequence'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '81488b2872de483f8b602b754ee1bd43'
                        key: {
                            logical_table_name: 'x_msag_gtfs_schedu_stop_time'
                            col_name_string: 'feed'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8172572b36494b589fb02867984b1ca2'
                        key: {
                            sys_ui_section: {
                                id: '8249dfd571e74a03918547cfd3d2d81b'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop_time'
                                    caption: 'GTFS Stop Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'arrival_time'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '81a93f9c60a3491c88c42015a7309d2f'
                        key: {
                            sys_ui_section: {
                                id: '8f037452c1164012875a09d07fe2b469'
                                key: {
                                    name: 'x_msag_gtfs_schedu_calendar'
                                    caption: 'GTFS Calendar'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'saturday'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '81e64fbc127848ff8eaffcd2e31748f2'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'arrival_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '822f0f30cc2641d1b05f264483d2e442'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'first_departure_sec'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '823d1fa8c8e543a99b07f01b97a09c23'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'trip_headsign'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '8249dfd571e74a03918547cfd3d2d81b'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            caption: 'GTFS Stop Time'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '824d57fab729495eb0589193069a22d8'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'license_text'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '82812c45d2bb43e8a898542c4fd56cd0'
                        key: {
                            sys_ui_section: {
                                id: 'c77b564d34054d9589fc7b4e71093c78'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop'
                                    caption: 'GTFS Stop'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '82f20743f5a44a56bbfb035a9a7b1136'
                        key: {
                            sys_ui_section: {
                                id: '653abe0a825344749ac82b1a0a1820c7'
                                key: {
                                    name: 'x_msag_gtfs_schedu_route'
                                    caption: 'GTFS Route'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'feed'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '83a02c4af5494b0fa5b96986ee0946a6'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_routes'
                            element: 'u_route_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '84c740282b5648e7801eb745c51c6c71'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'location_type'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '85428c6816d04e049002a111bd612d5e'
                        key: {
                            id: 'x_msag_gtfs_schedu_trip'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '85a4630749064884b4bea7bff23a1b05'
                        key: {
                            sys_ui_action: 'c2fc33065d2d44d0a9a3a98e47eb1b27'
                            sys_user_role: {
                                id: 'f2f84fe269ea41b7aa3bd3199444a1fb'
                                key: {
                                    name: 'x_msag_gtfs_schedu.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '85be28b071434aae91cb3e0ba34fe254'
                        key: {
                            sys_ui_section: {
                                id: '8249dfd571e74a03918547cfd3d2d81b'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop_time'
                                    caption: 'GTFS Stop Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'route_short_name'
                            position: '15'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '86701b6c9a62496c97da90d7e1cb92d6'
                        key: {
                            sys_ui_section: {
                                id: '8f037452c1164012875a09d07fe2b469'
                                key: {
                                    name: 'x_msag_gtfs_schedu_calendar'
                                    caption: 'GTFS Calendar'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'friday'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '87b3ccd20ba746008cc15920b577a8f8'
                        key: {
                            sys_ui_form: {
                                id: '60d5ef52ca95449d98dbe8232fbea69a'
                                key: {
                                    name: 'x_msag_gtfs_schedu_route'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '653abe0a825344749ac82b1a0a1820c7'
                                key: {
                                    name: 'x_msag_gtfs_schedu_route'
                                    caption: 'GTFS Route'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '87b3d6835978447089e477d7b21f9024'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'contact_url'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '885ecd7675cb4fe897fe5fbbf9577e61'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'location_type'
                            value: '4'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '88718a420317499a884f6bea11a8d638'
                        key: {
                            sys_ui_section: {
                                id: 'ca1866c083c4481ca0deeb899e17c84e'
                                key: {
                                    name: 'x_msag_gtfs_schedu_cal_date'
                                    caption: 'GTFS Calendar Date'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'service_id'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '888fc58c447b47bf80416f00d39d4c57'
                        key: {
                            name: 'x_msag_gtfs_schedu_agency'
                            element: 'agency_phone'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '88976c80b65546bf87d93610d0957e12'
                        key: {
                            name: 'x_msag_gtfs_schedu_service_day'
                            element: 'service_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '88ee2bac51644335b825afab881aba86'
                        key: {
                            name: 'x_msag_gtfs_schedu_agency'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8998c16a2bb547459d7bf6dbba576a18'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_cal'
                            element: 'u_service_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '89c79150e94446e9a38a89c21a14db5a'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stimes'
                            element: 'u_drop_off_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8a1123722b9f4583a7de7d163eee36a5'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stops'
                            element: 'u_stop_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '8a7d52831e9642e5a85d3d0f43c57d7a'
                        key: {
                            logical_table_name: 'x_msag_gtfs_schedu_route'
                            col_name_string: 'feed,route_id'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '8ac311ebe4894f5bb2bf5ce4650aa238'
                        key: {
                            sys_ui_action: 'b5cb0be2bd84453f952e56eac6a970b5'
                            sys_user_role: {
                                id: 'f2f84fe269ea41b7aa3bd3199444a1fb'
                                key: {
                                    name: 'x_msag_gtfs_schedu.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '8acf2d81ed1143d69b20b4482568b725'
                        key: {
                            id: 'x_msag_gtfs_schedu_info'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8b86e75a079b4f9e80b058b5cc87d52d'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stops'
                            element: 'u_wheelchair_boarding'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '8b9d7707a21843b4bbb4f15774949cea'
                        key: {
                            map: 'dfb94822486d4db5897d738b1b629506'
                            target_field: 'service_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8bc58cdcbd9e47d1aee896dcceb81769'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stops'
                            element: 'u_stop_id'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '8be9d90df0504d00a9f14525b4951d91'
                        key: {
                            map: 'dfb94822486d4db5897d738b1b629506'
                            target_field: 'exception_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8c02ef7cc9864051aa73fb939b6e75d3'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stops'
                            element: 'u_stop_timezone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8c4f6fe2cc77419ea18c354b488a01ae'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'imported_on'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8d0a35dff2c54e5c8ae8674efaed2009'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'stop'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '8d1c3d60c34d4efb91a386701913e497'
                        key: {
                            name: 'x_msag_gtfs_schedu_calendar'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8d255be4eaf74c3dbfd91529cc44fed7'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'stop_url'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8d365dc5cb374defaa2ff88d5fa15e28'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'route_short_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8df19fa265b7412b803e75d913d46607'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_routes'
                            element: 'u_route_type'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8e6707228dac4415b2e6fd70a5cae5f2'
                        key: {
                            sys_ui_section: {
                                id: 'ea1d2ee8903d4145a35fb89a3077037a'
                                key: {
                                    name: 'x_msag_gtfs_schedu_feed'
                                    caption: 'GTFS Feed'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'license_text'
                            position: '21'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8eda726a308e41deaadb879a022488c2'
                        key: {
                            sys_ui_section: {
                                id: 'bd304d3148344cc8ab14a18c6b1f01fd'
                                key: {
                                    name: 'x_msag_gtfs_schedu_agency'
                                    caption: 'GTFS Agency'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'agency_name'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '8f037452c1164012875a09d07fe2b469'
                        key: {
                            name: 'x_msag_gtfs_schedu_calendar'
                            caption: 'GTFS Calendar'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8f05212ac0464bccb179d5f89007cddc'
                        key: {
                            name: 'x_msag_gtfs_schedu_calendar'
                            element: 'start_date'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '8f8ba2309ab2433bbaebd9d890bee5b2'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'mode_group'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8fbd30c85b80464ea757c84a3da85711'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_routes'
                            element: 'u_route_text_color'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '8fd631c2cab74846a150c201b62de059'
                        key: {
                            logical_table_name: 'x_msag_gtfs_schedu_service_day'
                            col_name_string: 'feed,date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8ff91fff166d482ea791b5da01713197'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'agency_timezone'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9038c08cf50b4b889bdbcc5c0e9fe3f8'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'route'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9071e54cbf1b4a29aa8e7329efccb85f'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '91c4d860cc6a442098a10d47ea7df19e'
                        key: {
                            sys_ui_section: {
                                id: '2055d4dc37b240bb981b8871d14c6631'
                                key: {
                                    name: 'x_msag_gtfs_schedu_trip'
                                    caption: 'GTFS Trip'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'last_arrival_sec'
                            position: '14'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '91ff1d728c2a4dffb3c3c4c3f6dc52cb'
                        key: {
                            name: 'x_msag_gtfs_schedu_cal_date'
                            element: 'date'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9225c96ab1e84fb8a3fba131fde8c389'
                        key: {
                            sys_ui_section: {
                                id: '653abe0a825344749ac82b1a0a1820c7'
                                key: {
                                    name: 'x_msag_gtfs_schedu_route'
                                    caption: 'GTFS Route'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'agency_id'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '922807053484439aaae535456c49a68c'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'feed_version'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9235215cd92f41ef81d388d4a195a857'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stimes'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '92b40aefb7ba4f50a1c5e4a2cf8792a2'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'route_sort_order'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '92bffe6083e84593a61e72bbb130fac5'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_trips'
                            element: 'u_service_id'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '93812f88e3644d8f8e0e28e7734407cc'
                        key: {
                            sys_ui_section: {
                                id: 'bd304d3148344cc8ab14a18c6b1f01fd'
                                key: {
                                    name: 'x_msag_gtfs_schedu_agency'
                                    caption: 'GTFS Agency'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'agency_phone'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '93b1f86eacc843aeb6edee95436b41f6'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_agency'
                            element: 'u_agency_timezone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9461369dc8464be6abcbcb9a41c8cb48'
                        key: {
                            sys_ui_section: {
                                id: '77a515ad52c94c9daecaeca99434dcfb'
                                key: {
                                    name: 'x_msag_gtfs_schedu_service_day'
                                    caption: 'GTFS Service Day'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'feed'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9468c2e40aa14170b3be061c528d7721'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'stop_id'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '94b7bc48038442a197ff47802ac22595'
                        key: {
                            sys_ui_section: {
                                id: '8f037452c1164012875a09d07fe2b469'
                                key: {
                                    name: 'x_msag_gtfs_schedu_calendar'
                                    caption: 'GTFS Calendar'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'end_date'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '94c568b8f403487089dc570681274bd9'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_cal'
                            element: 'u_start_date'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '94c585846cb9476899a1396ee0be3a97'
                        key: {
                            sys_ui_section: {
                                id: '8f037452c1164012875a09d07fe2b469'
                                key: {
                                    name: 'x_msag_gtfs_schedu_calendar'
                                    caption: 'GTFS Calendar'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'wednesday'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '951d13b6f19f47b6ab23dc811802c169'
                        key: {
                            name: 'x_msag_gtfs_schedu_cal_date'
                            element: 'exception_type'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '95261e90a4424e509977dd4d6e882974'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9611029e4c0c413baad1104e393ab760'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'bikes_allowed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '96839644105d4b63b4e2deaded0f1834'
                        key: {
                            name: 'x_msag_gtfs_schedu_calendar'
                            element: 'friday'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '972d7d26d15b444abd0f5b1e928ea79d'
                        key: {
                            sys_ui_section: {
                                id: '2055d4dc37b240bb981b8871d14c6631'
                                key: {
                                    name: 'x_msag_gtfs_schedu_trip'
                                    caption: 'GTFS Trip'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'trip_short_name'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '980ce7dc8d214d9e97180db2950b45a7'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_cal'
                            element: 'u_end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '981b5c2cfc764e5dab377cc59750ce40'
                        key: {
                            map: '7ef6da532bcd464baab8601c7f605324'
                            target_field: 'route_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9912ecf3f5f44209a72478f4b5b66a47'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'mode_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '995b899084aa44d28e94b7d8b3efab56'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_cal'
                            element: 'u_end_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '99aeb5dadc9e46908b7669013c77ccf1'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stops'
                            element: 'u_stop_timezone'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '99f38b0c2fa74b349b432cd5020f26dd'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stops'
                            element: 'u_stop_url'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9b58addd639742e2bd898e07fa4ab96b'
                        key: {
                            sys_ui_section: {
                                id: '2055d4dc37b240bb981b8871d14c6631'
                                key: {
                                    name: 'x_msag_gtfs_schedu_trip'
                                    caption: 'GTFS Trip'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '16'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '9bf681dd3847424d88c91bf92dff0687'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stops'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9c210463e7034790b21bf7d3550b3f86'
                        key: {
                            sys_ui_section: {
                                id: '653abe0a825344749ac82b1a0a1820c7'
                                key: {
                                    name: 'x_msag_gtfs_schedu_route'
                                    caption: 'GTFS Route'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'route_sort_order'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: '9c966ce08faa4b1eaa4fb17505e58109'
                        key: {
                            map: '4c7f22acaa1e4c6eba8b4acc2605a890'
                            target_field: 'stop_sequence'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9d0f240687364e0d801f51d4396ea0fe'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stimes'
                            element: 'u_departure_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9d3961cd5a9b4e8f800787dedd6825e9'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'route_sort_order'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9d4f269f7cef417a85c420c16124a207'
                        key: {
                            sys_ui_section: {
                                id: '8249dfd571e74a03918547cfd3d2d81b'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop_time'
                                    caption: 'GTFS Stop Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '19'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9d593e6de1b14bc0b413ac0fe20ec4ee'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_cal'
                            element: 'u_sunday'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9d774431141040ef802c089fdfd98a91'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'bikes_allowed'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9ddf9c083f5f44218a63b46651893a51'
                        key: {
                            sys_ui_section: {
                                id: '8249dfd571e74a03918547cfd3d2d81b'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop_time'
                                    caption: 'GTFS Stop Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'arrival_sec'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9e0eb03c51a54c27a7a9767537c9b82f'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'service_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9e4a8ccef84a4cc5a50047781899bc95'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_feed'
                            element: 'u_feed_contact_url'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a08024335b954edb8643e7d7615f3ad5'
                        key: {
                            sys_ui_section: {
                                id: '77a515ad52c94c9daecaeca99434dcfb'
                                key: {
                                    name: 'x_msag_gtfs_schedu_service_day'
                                    caption: 'GTFS Service Day'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'service_id'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a0d0de8994a147eb8c4cf8f3d7ab3f7d'
                        key: {
                            sys_ui_section: {
                                id: 'c77b564d34054d9589fc7b4e71093c78'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop'
                                    caption: 'GTFS Stop'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'platform_code'
                            position: '8'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'a1470590017244f391be44caef394fd1'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_cal'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a1a968f762e34d67a1344383a4ecc2ef'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stimes'
                            element: 'u_timepoint'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a1e76333c3274269b3b39fa486b755dc'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'drop_off_type'
                            value: '3'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a2393f7d9a1f41309a57faa4a1d9a8e9'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stimes'
                            element: 'u_stop_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a2f3450bc97242fd8cd1f34b2ebe5cbc'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'location_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a37a5db57a65487db78678eedec03bd8'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_cal'
                            element: 'u_tuesday'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'a39706d0ce584fa58da2f5496b101798'
                        key: {
                            name: 'x_msag_gtfs_schedu_service_day'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a43257d8b46348b8a3d7fc364985e962'
                        key: {
                            name: 'x_msag_gtfs_schedu_cal_date'
                            element: 'exception_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a48e15d431334b3c9eaadaf5719918fd'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stimes'
                            element: 'u_location_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a49e606bf6b3409482eb796476422f43'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'feed'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a5a1ccc37f1847bbba688451dab40a1f'
                        key: {
                            sys_ui_section: {
                                id: '8249dfd571e74a03918547cfd3d2d81b'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop_time'
                                    caption: 'GTFS Stop Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'stop_headsign'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a5fa6635aaf143388d8ded082ca2f95b'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'trip_id'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'a63c9d56635d410c927dc98014829717'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a63db12c7e904328a8ecc84eb0bdb746'
                        key: {
                            name: 'x_msag_gtfs_schedu_cal_date'
                            element: 'service_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a6566e55993641c2af79b4a75dab293b'
                        key: {
                            name: 'x_msag_gtfs_schedu_agency'
                            element: 'agency_fare_url'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a66819a4564c41949e5a101491173a6d'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'wheelchair_boarding'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a6be5eaf57df4f4b82fa4b708b3fe999'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'stop_code'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a71687a4fb4a44159aebd0f0c232a2ce'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stimes'
                            element: 'u_drop_off_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a72a0085ec014c5ea47a905186ddfeb2'
                        key: {
                            name: 'x_msag_gtfs_schedu_agency'
                            element: 'agency_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'a75cd45411b74556bb6ef3aedef6f37e'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_routes'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a79956b0037d4204a40ceefed6e30e1c'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stops'
                            element: 'u_location_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a843770343a04c4284173616d83cb084'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stimes'
                            element: 'u_pickup_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a87d28ff08204d6a9c2739f52182a89d'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'first_departure_sec'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'a9db8750e8d7457ea09174bbbb26cfa0'
                        key: {
                            name: 'x_msag_gtfs_schedu_cal_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aa4bdbdc71954b1cb35bd7436f738466'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_cal'
                            element: 'u_sunday'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aa99d8dbdc4f4a8bbd4747c80c147be2'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'agency_id'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'aac5f335848a4de8b69d90c376c94129'
                        key: {
                            sys_ui_section: {
                                id: 'ea1d2ee8903d4145a35fb89a3077037a'
                                key: {
                                    name: 'x_msag_gtfs_schedu_feed'
                                    caption: 'GTFS Feed'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'feed_version'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'aac683c8b21c46f2b516de74939960c2'
                        key: {
                            logical_table_name: 'x_msag_gtfs_schedu_stop_time'
                            col_name_string: 'stop,departure_sec'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'aad2e372f083465bb9ff2d70fd67e601'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stops'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ab0f860762124c8e9602ccb0a5abf609'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'route_id'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ab2975599b23436db3fc8c45d45ef9c8'
                        key: {
                            sys_ui_section: {
                                id: '8f037452c1164012875a09d07fe2b469'
                                key: {
                                    name: 'x_msag_gtfs_schedu_calendar'
                                    caption: 'GTFS Calendar'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'monday'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'ac3c03ab0b9045ffacfe742a972dd535'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_trips'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ac3ecfc508904c5993ccf5f80b846cdb'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_routes'
                            element: 'u_route_sort_order'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ac7b204baa5643a98e8ce9dec1b4f346'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'stop_headsign'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'acd75a944afe4507acae70e27d59245f'
                        key: {
                            sys_ui_section: {
                                id: '8249dfd571e74a03918547cfd3d2d81b'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop_time'
                                    caption: 'GTFS Stop Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'drop_off_type'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ad52a2b00ed1458f99a39c4ead4e6912'
                        key: {
                            name: 'x_msag_gtfs_schedu_agency'
                            element: 'agency_lang'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ad7eeac731c747eeb3b68f26db0e37b0'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_caldt'
                            element: 'u_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ade9577c8eb7493e8673b143c313d912'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'validation_log'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ae3a7c1a80f54579acda484c6836b225'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_feed'
                            element: 'u_feed_contact_email'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ae8319064ca549c98e3657209b882283'
                        key: {
                            sys_ui_section: {
                                id: '8249dfd571e74a03918547cfd3d2d81b'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop_time'
                                    caption: 'GTFS Stop Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'service_id'
                            position: '16'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'aef2b0b25acf453db61ca0326ddfcf8e'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'af07a0db0e754fad912731cea8589e58'
                        key: {
                            sys_ui_form: {
                                id: 'aef2b0b25acf453db61ca0326ddfcf8e'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'c77b564d34054d9589fc7b4e71093c78'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop'
                                    caption: 'GTFS Stop'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'afbe67ea85de46d89317e1d923b35352'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'direction_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'afe2933be9e349cc902da530326c56e0'
                        key: {
                            sys_ui_section: {
                                id: '653abe0a825344749ac82b1a0a1820c7'
                                key: {
                                    name: 'x_msag_gtfs_schedu_route'
                                    caption: 'GTFS Route'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'route_short_name'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'aff03b6291c644359f59e3340b9f9d53'
                        key: {
                            map: '2862adeefea540a6857d8eb3eb84c078'
                            target_field: 'trip_short_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aff68488e00a406b9ba134a988ef64f3'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'cnt_stops'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b016f4793fba45d98f7f6bb030090035'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_feed'
                            element: 'u_feed_publisher_url'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b03d9238b3c84565bbad58b01a1166e5'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_agency'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'b04aa5cf1657438daf2e5ab1904dad0f'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_caldt'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'b0a1fa1fdb3143068b82ae3d89b038d5'
                        key: {
                            document_key: '2eca94c34ca1405d849fb130166deb00'
                            variable: '989d9e235324220002c6435723dc3484'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'b0ed9fe9d7ec449b830450ed092dd793'
                        key: {
                            map: 'b03ee2299f61432aa4946a38e5ff9051'
                            target_field: 'agency_url'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b102f2af6e014098926c2841a1990269'
                        key: {
                            name: 'x_msag_gtfs_schedu_calendar'
                            element: 'friday'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b10a25512d1848e18641ca798b02fb14'
                        key: {
                            sys_ui_section: {
                                id: '8249dfd571e74a03918547cfd3d2d81b'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop_time'
                                    caption: 'GTFS Stop Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'is_last_stop'
                            position: '18'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b12f8e8840d04819951c21cba31e67f6'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'valid_from'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b1624a19027b405e97dacc8b501b1806'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'drop_off_type'
                            value: '0'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'b19445c5614e4cfd8cf784f8be8b459c'
                        key: {
                            sys_ui_action: '5469015ba22b40ea9a5ee72929c371d0'
                            sys_user_role: {
                                id: 'f2f84fe269ea41b7aa3bd3199444a1fb'
                                key: {
                                    name: 'x_msag_gtfs_schedu.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sp_page'
                        id: 'b1953cbf54f24c618d5c21727c15ea42'
                        key: {
                            id: 'x_msag_gtfs_schedu_stop'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b195f9a2d45e4838b03afcdafa5455dc'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'mode_group'
                            value: 'subway'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b206f49689da4dd3a821f2be3126ec96'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_trips'
                            element: 'u_wheelchair_accessible'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b22a681a27034b1e853c67d9bc1a840f'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'status'
                            value: 'importing'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'b24273d7b2614296bba79bb93143cb76'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'b2c273da0e594888842c3720e262df3d'
                        key: {
                            map: '22fa88697ebd4b3a8bc8d3b6e2bc34f7'
                            target_field: 'stop_url'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'b2f2bd52dc104819b474ee8d22d7ac44'
                        key: {
                            name: 'x_msag_gtfs_schedu_service_day'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b309e5ac90a54e9788d5688c951b6b71'
                        key: {
                            sys_ui_section: {
                                id: '653abe0a825344749ac82b1a0a1820c7'
                                key: {
                                    name: 'x_msag_gtfs_schedu_route'
                                    caption: 'GTFS Route'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'route_url'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b31b5966fd694664b46940a6a933ba95'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'publisher_url'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b356384b40c741bd83db036568775f25'
                        key: {
                            sys_ui_section: {
                                id: 'ea1d2ee8903d4145a35fb89a3077037a'
                                key: {
                                    name: 'x_msag_gtfs_schedu_feed'
                                    caption: 'GTFS Feed'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'agency_timezone'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'b38d2fc10a824cdd940b67bf2f1c29dc'
                        key: {
                            logical_table_name: 'x_msag_gtfs_schedu_stop'
                            col_name_string: 'feed,stop_name_search'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b3b4c82576c24f1e8cd6c0cacf3931fa'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'wheelchair_accessible'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b40e8b75b0664e5f9a8866158294954b'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_cal'
                            element: 'u_wednesday'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b41c7c70c40947109ef59e6b3e5320dc'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_trips'
                            element: 'u_trip_short_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b557db77c41847519fea91967481dcfc'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_trips'
                            element: 'u_service_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b58928232baa41ac9be1876ee5ec5a72'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_feed'
                            element: 'u_feed_contact_email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b5a70a04ba404132bce6bc72a166d5f2'
                        key: {
                            sys_ui_section: {
                                id: 'c77b564d34054d9589fc7b4e71093c78'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop'
                                    caption: 'GTFS Stop'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'stop_name'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'b61f3e6f5d1643d5b3a358dd977b8a02'
                        key: {
                            logical_table_name: 'x_msag_gtfs_schedu_calendar'
                            col_name_string: 'feed,service_id'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'b646cffcf08446cd875f224865e21d4f'
                        key: {
                            logical_table_name: 'x_msag_gtfs_schedu_stop'
                            col_name_string: 'feed,stop_lat,stop_lon'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'b658067e18dd40099a4213cfe85c7650'
                        key: {
                            sys_ui_action: 'dfdc862c18054108ae1511c26e0ca256'
                            sys_user_role: {
                                id: 'f2f84fe269ea41b7aa3bd3199444a1fb'
                                key: {
                                    name: 'x_msag_gtfs_schedu.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b6c6f064877e48bcab6c9d05b607dfb1'
                        key: {
                            sys_ui_section: {
                                id: '8249dfd571e74a03918547cfd3d2d81b'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop_time'
                                    caption: 'GTFS Stop Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b7695ea5246e47c9bdc95841b2c7080d'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'cnt_trips'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b76e2af514df4e138d2ebe682e2d3b37'
                        key: {
                            name: 'x_msag_gtfs_schedu_cal_date'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b7f26abfa8b943b0b8cabe9bd31de67f'
                        key: {
                            sys_ui_section: {
                                id: '2055d4dc37b240bb981b8871d14c6631'
                                key: {
                                    name: 'x_msag_gtfs_schedu_trip'
                                    caption: 'GTFS Trip'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'stop_count'
                            position: '15'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'b7f926ece59f46358d44b54725abbb12'
                        key: {
                            map: '22fa88697ebd4b3a8bc8d3b6e2bc34f7'
                            target_field: 'stop_timezone'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b8944a2b736c47ca968905b257a6cda4'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'route_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b90ee7b7cadc47adbf6076fa228b5a46'
                        key: {
                            name: 'x_msag_gtfs_schedu_calendar'
                            element: 'tuesday'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bb69e37e95824795bbf953d025dd7655'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'parent_station'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bb6a805809c9466bbbbef9982fe98d52'
                        key: {
                            name: 'x_msag_gtfs_schedu_agency'
                            element: 'agency_fare_url'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'bbb9388dd1b84bd0b33e7e82aa9e0a43'
                        key: {
                            map: '2862adeefea540a6857d8eb3eb84c078'
                            target_field: 'trip_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bbe2e98077a84040916638d667142d89'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_caldt'
                            element: 'u_exception_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bc4ee1afd3fc4845a12b4cd0781e104b'
                        key: {
                            name: 'x_msag_gtfs_schedu_service_day'
                            element: 'feed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bc53a978c67649948bb58172515ade17'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'is_searchable'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bcf729eba83a4b4cb07983b58da1537d'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'drop_off_type'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'bd304d3148344cc8ab14a18c6b1f01fd'
                        key: {
                            name: 'x_msag_gtfs_schedu_agency'
                            caption: 'GTFS Agency'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bd74d4f2d67e40f89ed598098b23a3fd'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stops'
                            element: 'u_wheelchair_boarding'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bdf3dfaf9326478db782690573dfd0a4'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'be3548be570f47bd80a9f4ab20a9eb6c'
                        key: {
                            sys_ui_section: {
                                id: '653abe0a825344749ac82b1a0a1820c7'
                                key: {
                                    name: 'x_msag_gtfs_schedu_route'
                                    caption: 'GTFS Route'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'route_desc'
                            position: '15'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'beb86d3025374e60a289f708a857d219'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'source_url'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'becb06a4770c4b5d8747e580b0b8fefe'
                        key: {
                            map: '7ef6da532bcd464baab8601c7f605324'
                            target_field: 'route_long_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bede2a66966b41e0a3081fe425680df7'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'stop_timezone'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bf90bbcc464c4ac5b6110e981eca5cb4'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_routes'
                            element: 'u_route_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bfa77d89d085451da90ec204e156f35a'
                        key: {
                            sys_ui_section: {
                                id: 'ea1d2ee8903d4145a35fb89a3077037a'
                                key: {
                                    name: 'x_msag_gtfs_schedu_feed'
                                    caption: 'GTFS Feed'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'publisher_name'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bfdc4f68c9b1483395397707ea1a585f'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'mode_group'
                            value: 'other'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c102cdd2fa914a97a8bca891fe39a57d'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'location_type'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c2f3cd56898d45b58600c5ba8bc22a34'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_agency'
                            element: 'u_agency_fare_url'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c365b243f60d456481ecea6e8cba59af'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'departure_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c3eb7f78a9c9469a9112fc99cd0eb431'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_cal'
                            element: 'u_saturday'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c40e8629a5204c948705c1d6fb695833'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'feed'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c4853aec942a4bb8885dec07f81e98f4'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_feed'
                            element: 'u_feed_start_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c4e1835c3d0f419ba19a478399598d00'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'display_name'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'c77b564d34054d9589fc7b4e71093c78'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            caption: 'GTFS Stop'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'c83d81d3ebe645019e5a8859254a36d2'
                        key: {
                            logical_table_name: 'x_msag_gtfs_schedu_stop'
                            col_name_string: 'feed,stop_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c875146effdb4d12817a47fe6d5b7854'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stimes'
                            element: 'u_location_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c90c27362a79406ca47d87b18e4617c0'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'stop_lon'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c90d6c982a5d489bb28e0eb004e1e738'
                        key: {
                            name: 'x_msag_gtfs_schedu_calendar'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'c97a34f33dcc43f3b53429af0b23ae61'
                        key: {
                            map: '22fa88697ebd4b3a8bc8d3b6e2bc34f7'
                            target_field: 'zone_id'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'ca1866c083c4481ca0deeb899e17c84e'
                        key: {
                            name: 'x_msag_gtfs_schedu_cal_date'
                            caption: 'GTFS Calendar Date'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'ca828418489a433c801338c8a069f4b4'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stimes'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ca9054d8619a4725b0699b75ff4e2f6a'
                        key: {
                            sys_ui_section: {
                                id: '2055d4dc37b240bb981b8871d14c6631'
                                key: {
                                    name: 'x_msag_gtfs_schedu_trip'
                                    caption: 'GTFS Trip'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'route'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cae81d4de323462a94b566e856afe2d9'
                        key: {
                            sys_ui_section: {
                                id: '8249dfd571e74a03918547cfd3d2d81b'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop_time'
                                    caption: 'GTFS Stop Time'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'route'
                            position: '14'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cb4838f71fc24ae9b1606c95bc23efc8'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_trips'
                            element: 'u_trip_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cbde99eb79004a85a164e6e1a9b8f012'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stops'
                            element: 'u_stop_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'cbf3314297c24b3398ee933c6218f558'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'bikes_allowed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cc6609d801694e4896b785d0ef027407'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_routes'
                            element: 'u_route_color'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ccef10ff108848029cccac75323583a4'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stimes'
                            element: 'u_stop_sequence'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: 'cd2da455dbbb461ebde63e9a68bdfa8b'
                        key: {
                            id: 'x_msag_gtfs_schedu_home'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ce018f241f4e48378708e9910299563a'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_trips'
                            element: 'u_trip_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cecd285e69e74cf7a1fac09a9e5fa7e6'
                        key: {
                            name: 'x_msag_gtfs_schedu_calendar'
                            element: 'sunday'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cee73aa4a3564304a2f11ff638f431b5'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_caldt'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cfaa0e77acd443999431f6aff0b6a799'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_feed'
                            element: 'u_feed_publisher_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cfebd8eb69f4466da7801f023d0d37ce'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_feed'
                            element: 'u_feed_version'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cffd9fbf8acf4f94b93ef50be7d0d844'
                        key: {
                            sys_ui_section: {
                                id: 'bd304d3148344cc8ab14a18c6b1f01fd'
                                key: {
                                    name: 'x_msag_gtfs_schedu_agency'
                                    caption: 'GTFS Agency'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'agency_fare_url'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd000cd26194e4cfda28056ab2823a556'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'drop_off_type'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'd09b30e330344e92919d9e0a5b1f81e7'
                        key: {
                            map: '2862adeefea540a6857d8eb3eb84c078'
                            target_field: 'bikes_allowed'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd14bb3fcff5548a2839380ad1c7b6646'
                        key: {
                            sys_ui_section: {
                                id: '8f037452c1164012875a09d07fe2b469'
                                key: {
                                    name: 'x_msag_gtfs_schedu_calendar'
                                    caption: 'GTFS Calendar'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'tuesday'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd23fb7feca93434996a79e8d1078efa6'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'publisher_url'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'd25f88eea86041aebadfcb7764599e25'
                        key: {
                            sys_ui_action: '7dfb12acaed149789190c6355da3aba8'
                            sys_user_role: {
                                id: 'f2f84fe269ea41b7aa3bd3199444a1fb'
                                key: {
                                    name: 'x_msag_gtfs_schedu.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd2bb2f5001bb44d9b9d4c15589eeb26c'
                        key: {
                            sys_ui_section: {
                                id: 'c77b564d34054d9589fc7b4e71093c78'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop'
                                    caption: 'GTFS Stop'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'stop_url'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd2f19066f80447ce96299ca991554f0f'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd35c434e9b384f7fa4d3f70e5794a55b'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stops'
                            element: 'u_parent_station'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd3f2ad9eaed04b48a303a9a904e31971'
                        key: {
                            sys_ui_section: {
                                id: 'ea1d2ee8903d4145a35fb89a3077037a'
                                key: {
                                    name: 'x_msag_gtfs_schedu_feed'
                                    caption: 'GTFS Feed'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'feed_lang'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd3fcd577fcd8472f9ffc5cba45a956a8'
                        key: {
                            sys_ui_section: {
                                id: '653abe0a825344749ac82b1a0a1820c7'
                                key: {
                                    name: 'x_msag_gtfs_schedu_route'
                                    caption: 'GTFS Route'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd42d97b8b34a49ed9b55d33021a1724f'
                        key: {
                            name: 'x_msag_gtfs_schedu_service_day'
                            element: 'date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd45027077fde4bb69809816c263566d1'
                        key: {
                            name: 'x_msag_gtfs_schedu_service_day'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd48c0ec37a8a41fda3470f3d733c5271'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_agency'
                            element: 'u_agency_lang'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd4c811f72e7849abb6e4a5bc86bd02cd'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'departure_sec'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd5312c90db084525b4e6f9f3d7d6ed48'
                        key: {
                            sys_ui_section: {
                                id: 'c77b564d34054d9589fc7b4e71093c78'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop'
                                    caption: 'GTFS Stop'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'stop_name_search'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd54ad2eb41b64ff09cbe0ac33477de46'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'color_fg'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd5969742715f4db5a53e9dbb5b9ef850'
                        key: {
                            name: 'x_msag_gtfs_schedu_calendar'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'd677fa0e4ec44ec4a5c86bea9bd3e443'
                        key: {
                            name: 'x_msag_gtfs_schedu_cal_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd6af96cb94ec41fc87790df3896559fc'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'departure_sec'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd7500763623442c28062a3d75e0569d5'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'pickup_type'
                            value: '2'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd7730236c8d24a1683c0d2420147b52c'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'is_searchable'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'd7fb4bc2a4214bddb091a9cae7a395a8'
                        key: {
                            map: '2862adeefea540a6857d8eb3eb84c078'
                            target_field: 'service_id'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'd7fbffd22b8b49dea2c3e12d6683e65b'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd8426b0a863e469fa9dbbca3de795274'
                        key: {
                            name: 'x_msag_gtfs_schedu_calendar'
                            element: 'wednesday'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd8685ffe11d9493494916c6af9df21a3'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_cal'
                            element: 'u_monday'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'd92fb20760d94655a28e4ba5fba47eb2'
                        key: {
                            sys_ui_form: {
                                id: '8d1c3d60c34d4efb91a386701913e497'
                                key: {
                                    name: 'x_msag_gtfs_schedu_calendar'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '8f037452c1164012875a09d07fe2b469'
                                key: {
                                    name: 'x_msag_gtfs_schedu_calendar'
                                    caption: 'GTFS Calendar'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd9b0976eeee24254962903f1ec5c1235'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_feed'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd9e4609a17a04835b74c38aa5c45656e'
                        key: {
                            sys_ui_section: {
                                id: 'bd304d3148344cc8ab14a18c6b1f01fd'
                                key: {
                                    name: 'x_msag_gtfs_schedu_agency'
                                    caption: 'GTFS Agency'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd9ffd0c6aed9442e8bcc427a60070e07'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stops'
                            element: 'u_stop_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'da405669417b4737a6a0cf60f9b82eea'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'mode_group'
                            value: 'tram'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'da47675ff7014b229f7a3468b9cd9a8b'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_routes'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'daf2cf170ca745df8aa7f669e6189022'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'drop_off_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'db331ec1debe4a4b905df41e8e3aac33'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_trips'
                            element: 'u_wheelchair_accessible'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'db9c48f5e9334ff6a2d412fef48cc3df'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'cnt_routes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dbe8378b796b42ab90fc5e0ff8e93fb9'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: 'dc0dac6066ba45ceb457be160d612344'
                        key: {
                            sp_widget: '52de79d0194545c48c8c1fce3b8059fb'
                            sp_angular_provider: '535e02f9daf94a70866cf70d1e422ca2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dc4c21ec0f304dfeb33b3268432cbb3e'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'feed'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dca96e479adb42c398392a2ec04a6027'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_trips'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dcc22d550a8e43189f066cffc6f2e822'
                        key: {
                            name: 'x_msag_gtfs_schedu_cal_date'
                            element: 'exception_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'dd393198618d454ea1db8643de7ca6ac'
                        key: {
                            map: '4c7f22acaa1e4c6eba8b4acc2605a890'
                            target_field: 'stop_headsign'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ddbc967cef4f49949f3d450c1aec6c3c'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'status'
                            value: 'failed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ddf1de94dd6846e09be723c97ee8890b'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'last_stop'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'de4bad945242473cb60424b7e8b3240a'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'arrival_time'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'de50738cdb024be0a8a24db092503978'
                        key: {
                            sys_ui_section: {
                                id: '2055d4dc37b240bb981b8871d14c6631'
                                key: {
                                    name: 'x_msag_gtfs_schedu_trip'
                                    caption: 'GTFS Trip'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'feed'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e01270af89264d979b246bdbfeb6435a'
                        key: {
                            name: 'x_msag_gtfs_schedu_calendar'
                            element: 'feed'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e040e0619ac54a3f9be4f4f7afbad7c6'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e0d71193af874ff1b72c69baf270bade'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e1eaf33451594defaaa678df4dbd88b7'
                        key: {
                            sys_ui_section: {
                                id: '2055d4dc37b240bb981b8871d14c6631'
                                key: {
                                    name: 'x_msag_gtfs_schedu_trip'
                                    caption: 'GTFS Trip'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'service_id'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'e2d80470d6c74053afda46d912da918b'
                        key: {
                            map: '22fa88697ebd4b3a8bc8d3b6e2bc34f7'
                            target_field: 'stop_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e3a122ba8b904f23a03d1addc816a3d0'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_feed'
                            element: 'u_feed_end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e3f107e1794b44cb9221eb5aa05c0e17'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'feed_version'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e46bf171f65f44918b483fe2216223c8'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'contact_email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e4ee383700d744059e3767da0f8e1658'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_cal'
                            element: 'u_thursday'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e501073c3cbf4408acdc0e1969baedb5'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'status'
                            value: 'staging'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e55697825d254fd1b2a03628e99379cb'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_cal'
                            element: 'u_saturday'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e574a588c1144fe5bc9fb30aaf51e2a8'
                        key: {
                            name: 'x_msag_gtfs_schedu_agency'
                            element: 'feed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e58975e066c84ac3b7c5cdf32dece280'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stops'
                            element: 'u_zone_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e595a0c16d3348688ab35d0c7de67548'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'route_long_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e633373c2e6648558078e358f044e7ae'
                        key: {
                            name: 'x_msag_gtfs_schedu_agency'
                            element: 'agency_url'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e6850474fef047549c5ccfcecf73591b'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'timepoint'
                            value: '0'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e73cdf64124146a99063e0efecf55d98'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'feed'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e784c6960dad4588bdf50e03203a013a'
                        key: {
                            sys_ui_section: {
                                id: '2055d4dc37b240bb981b8871d14c6631'
                                key: {
                                    name: 'x_msag_gtfs_schedu_trip'
                                    caption: 'GTFS Trip'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'first_departure_sec'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e7b986e7e1a14c31a337d6495e4d2625'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_routes'
                            element: 'u_agency_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e7e8f76d86554bbd90d8eee37773df68'
                        key: {
                            sys_ui_section: {
                                id: '8f037452c1164012875a09d07fe2b469'
                                key: {
                                    name: 'x_msag_gtfs_schedu_calendar'
                                    caption: 'GTFS Calendar'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '13'
                        }
                    },
                    {
                        table: 'm2m_sp_ng_pro_sp_widget'
                        id: 'e7f8a7cf7c044ff194ec0b0a4e27610a'
                        key: {
                            sp_widget: 'fc4240078bd847fe88242ccd4370303a'
                            sp_angular_provider: '535e02f9daf94a70866cf70d1e422ca2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e84c90a3816d404cb97e90bd8251418e'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'direction_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e8eda2258a6342c7a029dafd163f88b1'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'trip_short_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e980a83758374e3581962ec3a1e028f5'
                        key: {
                            name: 'x_msag_gtfs_schedu_agency'
                            element: 'agency_phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'ea1d2ee8903d4145a35fb89a3077037a'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            caption: 'GTFS Feed'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'ea29648d3d4c44c9807eb20421ad6cf2'
                        key: {
                            name: 'x_msag_gtfs_schedu_cal_date'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ea5ffaa2c84642f3b02855995920a8af'
                        key: {
                            sys_ui_section: {
                                id: '653abe0a825344749ac82b1a0a1820c7'
                                key: {
                                    name: 'x_msag_gtfs_schedu_route'
                                    caption: 'GTFS Route'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'color_bg'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'eaf5e2e947004de3bd08e4f704200f68'
                        key: {
                            name: 'x_msag_gtfs_schedu_cal_date'
                            element: 'exception_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eb2e447da45849ba8028b6b56f09cc96'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stops'
                            element: 'u_zone_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eb36aa0d7dd0483e837dfb687f9d2fdd'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'color_fg'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ec5efed678dc4c439351694617b3e2ae'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_feed'
                            element: 'u_feed_publisher_url'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'ecf9579e71bf4e92b5a3fd3c0fbdce4f'
                        key: {
                            map: '4c7f22acaa1e4c6eba8b4acc2605a890'
                            target_field: 'departure_time'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ed13b3e586e4452f926c3b84d3c39c0c'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_routes'
                            element: 'u_route_desc'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ed8ca325af4c49be8334807b4a4924dc'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'direction_id'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ee2cd6d40a0a4b9496b6bc9153544c98'
                        key: {
                            sys_ui_section: {
                                id: '2055d4dc37b240bb981b8871d14c6631'
                                key: {
                                    name: 'x_msag_gtfs_schedu_trip'
                                    caption: 'GTFS Trip'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'trip_headsign'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'ee642451eaf24d5e9adb2637d172dcb1'
                        key: {
                            map: '2862adeefea540a6857d8eb3eb84c078'
                            target_field: 'direction_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ee67c50f133b4a8eb2744c80cdd2e005'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'publisher_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ee74a558b0d64fe8aaccadeaaf225075'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_agency'
                            element: 'u_agency_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eea6378a337f413b8215be5abcad56db'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'route_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ef6779879e724d768a56f46a913ed519'
                        key: {
                            sys_ui_section: {
                                id: 'bd304d3148344cc8ab14a18c6b1f01fd'
                                key: {
                                    name: 'x_msag_gtfs_schedu_agency'
                                    caption: 'GTFS Agency'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'agency_lang'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f04948024ebe45a0859a7c4563a00eee'
                        key: {
                            sys_ui_section: {
                                id: '2055d4dc37b240bb981b8871d14c6631'
                                key: {
                                    name: 'x_msag_gtfs_schedu_trip'
                                    caption: 'GTFS Trip'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'wheelchair_accessible'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f13db50d42d54542a33f5bd6f3052f00'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'location_type'
                            value: '0'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f1830954803641beb168682579af081f'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_feed'
                            element: 'u_feed_publisher_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'f2267c1e4a68455d84b7a32831c60650'
                        key: {
                            map: 'b03ee2299f61432aa4946a38e5ff9051'
                            target_field: 'agency_fare_url'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f288903f473b4d04abed7d99d87181c3'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'route'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'f2f84fe269ea41b7aa3bd3199444a1fb'
                        key: {
                            name: 'x_msag_gtfs_schedu.admin'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f38e0d8f9ed44622819ee0986cc534e7'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'parent_station'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f3eb9607896f4b3fa504a7f019be399f'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f3ff578cae5e4a738c11e4448e406d40'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_routes'
                            element: 'u_route_sort_order'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f4122ba8dc374eb6b494bb2035cf7282'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'timepoint'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f4a9a1e614c6453d8b4fab8c6f099b07'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop_time'
                            element: 'service_id'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f4e1b3c495ba4f3d8345f632080e3f01'
                        key: {
                            sys_ui_section: {
                                id: 'ea1d2ee8903d4145a35fb89a3077037a'
                                key: {
                                    name: 'x_msag_gtfs_schedu_feed'
                                    caption: 'GTFS Feed'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'cnt_stop_times'
                            position: '19'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f4fd876a8928422d98e81399a5291af9'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'trip_short_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'f6939d337f4a4e09be33d048de1c83be'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f6967361b0db4864bc8d2b3bf9bdeeb4'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'mode_group'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f698dc89f326462ab6cf30d8cdef5add'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'stop_name'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f6a172dcb05c483e8ef0de0799669506'
                        key: {
                            sys_ui_section: {
                                id: 'c77b564d34054d9589fc7b4e71093c78'
                                key: {
                                    name: 'x_msag_gtfs_schedu_stop'
                                    caption: 'GTFS Stop'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f6ba72313a0648e0babc8fbcb59070d4'
                        key: {
                            sys_ui_section: {
                                id: 'ea1d2ee8903d4145a35fb89a3077037a'
                                key: {
                                    name: 'x_msag_gtfs_schedu_feed'
                                    caption: 'GTFS Feed'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'cnt_routes'
                            position: '17'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f73b10ee10044127b8aa248b7efa5ce0'
                        key: {
                            name: 'x_msag_gtfs_schedu_service_day'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'f819caccfc53454aa49f3ac1b0e5bef6'
                        key: {
                            map: '2c08f0cc3b1e4fe9a8044daa96d01297'
                            target_field: 'service_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f88a4b203f874156aab5b7b8299d363c'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stimes'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f89e7bce3107412d81d82c95e4dc7530'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stops'
                            element: 'u_stop_lon'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f8aa1c8c5d874e9490cd2f47a928488f'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'feed_lang'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'f8b0c7e7703f492a82035280b0bc8db4'
                        key: {
                            map: '22fa88697ebd4b3a8bc8d3b6e2bc34f7'
                            target_field: 'stop_desc'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f8ba7a2470924263bcecf6eb08a24008'
                        key: {
                            name: 'x_msag_gtfs_schedu_agency'
                            element: 'agency_email'
                        }
                    },
                    {
                        table: 'sys_transform_entry'
                        id: 'f90336c127ec47f5acad8aa997f00b81'
                        key: {
                            map: 'b03ee2299f61432aa4946a38e5ff9051'
                            target_field: 'agency_phone'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f95a393129dc4887921c485f49f0a4ba'
                        key: {
                            sys_ui_section: {
                                id: 'ea1d2ee8903d4145a35fb89a3077037a'
                                key: {
                                    name: 'x_msag_gtfs_schedu_feed'
                                    caption: 'GTFS Feed'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'publisher_url'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fa7e6cc22c4e4620a2dec560209a4cbf'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'source_url'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fb5edc91fe254c879889cd5f5c5e5cb4'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stops'
                            element: 'u_stop_desc'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fb65943e36584d5793a8c6d1a8c34be2'
                        key: {
                            name: 'x_msag_gtfs_schedu_route'
                            element: 'route_desc'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fb9fea0c968547fa91ca67e2e552d987'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_caldt'
                            element: 'u_service_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fbed15bbde514a6eb4aadae203122c46'
                        key: {
                            name: 'x_msag_gtfs_schedu_agency'
                            element: 'agency_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fbf80f963a4d4c69ae0e9c47519f8363'
                        key: {
                            name: 'x_msag_gtfs_schedu_trip'
                            element: 'stop_count'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fc4aca9104104a80814eb1d65ab278c4'
                        key: {
                            name: 'x_msag_gtfs_schedu_feed'
                            element: 'validation_log'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fc8f51ace67945d6bddd52604276e2cf'
                        key: {
                            name: 'x_msag_gtfs_schedu_calendar'
                            element: 'saturday'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fca62ceabc134bb6ab054505a17ee8c7'
                        key: {
                            sys_ui_section: {
                                id: '2055d4dc37b240bb981b8871d14c6631'
                                key: {
                                    name: 'x_msag_gtfs_schedu_trip'
                                    caption: 'GTFS Trip'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'trip_id'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fca7a50431f14466b3d57cbae5152a4d'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_stops'
                            element: 'u_stop_lat'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fe5d242a807a434684bdd63cc27e4f5c'
                        key: {
                            name: 'x_msag_gtfs_schedu_imp_agency'
                            element: 'u_agency_phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ff53eca040bf41cb83b3cb3163a6dcdc'
                        key: {
                            name: 'x_msag_gtfs_schedu_stop'
                            element: 'location_type'
                            value: '1'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                ]
            }
        }
    }
}
