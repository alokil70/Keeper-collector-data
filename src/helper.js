module.exports = {
    start: {
        Start: {
            $: {
                RestCode: '711940001',
                UnitNum: '1',
                Time: '19.07.2022 08:49:48',
                Situation: '1',
            },
        },
    },
    exit: {
        Exit: {
            $: {
                RestCode: '711940001',
                UnitNum: '1',
                Time: '18.07.2022 22:54:51',
                Situation: '18',
            },
        },
    },
    delPrechek: {
        DeletePrecheck: {
            $: {
                RestCode: '711940001',
                UnitNum: '1',
                Time: '15.07.2022 13:37:37',
                Table: '11',
                Situation: '16',
            },
            LoginPerson: [
                {
                    _: 'Дилер',
                    $: {
                        Code: '10',
                        ptype: 'Менеджеры',
                        Name: 'Официант',
                    },
                },
            ],
        },
    },
    printerData: {
        ScreenCheck: {
            $: {
                Table: '13',
                Situation: '3',
                Sum: '2800.00',
            },
            SysParams: [
                {
                    $: {
                        RestCode: '711940001',
                        UnitNum: '1',
                        Time: '13.07.2022 4:29:31',
                        Situation: '3',
                    },
                    LoginPerson: [
                        {
                            _: 'Дилер',
                            $: {
                                Code: '10',
                                ptype: 'Менеджеры',
                                Name: 'Дилер',
                            },
                        },
                    ],
                },
            ],
            Waiter: [
                {
                    _: 'Дилер',
                    $: {
                        Code: '10',
                        ptype: 'Менеджеры',
                        Name: 'Дилер',
                    },
                },
            ],
            CheckLines: [
                {
                    $: {
                        count: '8',
                    },
                    CheckLine: [
                        {
                            _: 'Креветки жареные 200гр\r\n',
                            $: {
                                Code: '20',
                                Price: '700.00',
                                Qnt: '1.00',
                                Name: 'Креветки жареные 200гр',
                                Store: 'true',
                                DishUNI: '4',
                            },
                        },
                        {
                            _: 'Пивная тарелка\r\n',
                            $: {
                                Code: '1140',
                                Price: '800.00',
                                Qnt: '1.00',
                                Name: 'Пивная тарелка',
                                Store: 'true',
                                DishUNI: '8',
                            },
                        },
                        {
                            _: 'Хачапури по-Аджарски\r\n',
                            $: {
                                Code: '140',
                                Price: '260.00',
                                Qnt: '1.00',
                                Name: 'Хачапури по-Аджарски',
                                Store: 'true',
                                DishUNI: '11',
                            },
                        },
                        {
                            _: 'Сырные шарики 280гр\r\n',
                            $: {
                                Code: '477',
                                Price: '320.00',
                                Qnt: '1.00',
                                Name: 'Сырные шарики 280гр',
                                Store: 'true',
                                DishUNI: '14',
                            },
                        },
                        {
                            _: 'Креветки отварные 290гр\r\n',
                            $: {
                                Code: '19',
                                Price: '720.00',
                                Qnt: '1.00',
                                Name: 'Креветки отварные 290гр',
                                Store: 'true',
                                DishUNI: '17',
                            },
                        },
                        {
                            _: 'Набор пласт.посуды\r\n',
                            $: {
                                Code: '1114',
                                Price: '90.91',
                                Qnt: '0.00',
                                Name: 'Набор пласт.посуды',
                                DishUNI: '702',
                            },
                        },
                    ],
                },
            ],
        },
    },
    printerData2: {
        ScreenCheck: {
            $: {
                Table: '6',
                Situation: '3',
                Sum: '2490.00',
            },
            SysParams: [
                {
                    $: {
                        RestCode: '711940001',
                        UnitNum: '2',
                        Time: '14.07.2022 18:23:47',
                        Situation: '3',
                    },
                    LoginPerson: [
                        {
                            _: 'Виктория',
                            $: {
                                Code: '6',
                                ptype: 'Бармены',
                                Name: 'Виктория',
                            },
                        },
                    ],
                },
            ],
            Waiter: [
                {
                    _: 'Виктория',
                    $: {
                        Code: '6',
                        ptype: 'Бармены',
                        Name: 'Виктория',
                    },
                },
            ],
            CheckLines: [
                {
                    $: {
                        count: '5',
                    },
                    CheckLine: [
                        {
                            _: 'Жаркое из мяса птицы 1/370\r\n',
                            $: {
                                Code: '55',
                                Price: '350.00',
                                Qnt: '1.00\n\n',
                                Name: 'Жаркое из мяса птицы 1/370',
                                DishUNI: '8',
                            },
                        },
                        {
                            _: 'Ассорти домашних мясных деликатесов\r\n',
                            $: {
                                Code: '6',
                                Price: '790.00',
                                Qnt: '1.00\n\n',
                                Name: 'Ассорти домашних мясных деликатесов',
                                DishUNI: '11',
                            },
                        },
                        {
                            _: 'Салат "Бостон" 250гр\r\n',
                            $: {
                                Code: '501',
                                Price: '430.00',
                                Qnt: '1.00\n\n',
                                Name: 'Салат "Бостон" 250гр',
                                DishUNI: '14',
                            },
                        },
                        {
                            _: 'Сок в ассортименте 1л\r\n',
                            $: {
                                Code: '181',
                                Price: '26.00',
                                Qnt: '10.00\n\n',
                                Name: 'Сок в ассортименте 1л',
                                New: 'true',
                                DishUNI: '17',
                            },
                        },
                    ],
                },
            ],
        },
    },
    printerData3: {
        ScreenCheck: {
            $: {
                Table: '15',
                Situation: '3',
                Sum: '260.00',
            },
            SysParams: [
                {
                    $: {
                        RestCode: '711940001',
                        UnitNum: '2',
                        Time: '13.07.2022 14:32:47',
                        Situation: '3',
                    },
                    LoginPerson: [
                        {
                            _: 'Андрей',
                            $: {
                                Code: '22',
                                ptype: 'Бармены',
                                Name: 'Андрей',
                            },
                        },
                    ],
                },
            ],
            Waiter: [
                {
                    _: 'Андрей',
                    $: {
                        Code: '22',
                        ptype: 'Бармены',
                        Name: 'Андрей',
                    },
                },
            ],
            CheckLines: [
                {
                    $: {
                        count: '1',
                    },
                    CheckLine: [
                        {
                            _: 'Хачапури по-Аджарски\r\n\r\n',
                            $: {
                                Code: '140',
                                Price: '260.00',
                                Qnt: '1.00',
                                Name: 'Хачапури по-Аджарски',
                                New: 'true',
                                DishUNI: '4',
                            },
                            Modifiers: [
                                {
                                    $: {
                                        count: '1',
                                    },
                                    Modifier: [
                                        {
                                            _: 'БЕЗ ЯЙЦА',
                                            $: {
                                                Name: 'БЕЗ ЯЙЦА',
                                                Qnt: '1',
                                                Price: '0.00',
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    printerData4: {
        CalcCheck: {
            $: {
                Table: 'Доста',
                Situation: '4',
                Sum: '600.00',
            },
            SysParams: [
                {
                    $: {
                        RestCode: '711940001',
                        UnitNum: '2',
                        Time: '20.07.2022 13:22:38',
                        Situation: '4',
                    },
                    LoginPerson: [
                        {
                            _: 'Эльшад',
                            $: {
                                Code: '20',
                                ptype: 'Эльшад',
                                Name: 'Эльшад',
                            },
                        },
                    ],
                },
            ],
            Waiter: [
                {
                    _: 'Эльшад',
                    $: {
                        Code: '20',
                        ptype: 'Эльшад',
                        Name: 'Эльшад',
                    },
                },
            ],
            CheckLines: [
                {
                    $: {
                        count: '2',
                    },
                    CheckLine: [
                        {
                            _: 'Суп-лапша с курицей 400гр\r\n',
                            $: {
                                Code: '524',
                                Price: '250.00',
                                Qnt: '1.00',
                                Name: 'Суп-лапша с курицей 400гр',
                                Store: 'true',
                                DishUNI: '4',
                            },
                        },
                        {
                            _: 'Жаркое из мяса птицы 1/370\r\n',
                            $: {
                                Code: '55',
                                Price: '350.00',
                                Qnt: '1.00',
                                Name: 'Жаркое из мяса птицы 1/370',
                                Store: 'true',
                                DishUNI: '8',
                            },
                        },
                    ],
                },
            ],
            PayLines: [
                {
                    $: {
                        count: '1',
                    },
                    Pay: [
                        {
                            _: 'Безнал',
                            $: {
                                Sum: '600.00',
                                Name: 'Безнал',
                            },
                        },
                    ],
                },
            ],
        },
    },
    printerData5: {
        ScreenCheck: {
            $: {
                Table: '3',
                Situation: '3',
                Sum: '555.00',
            },
            SysParams: [
                {
                    $: {
                        RestCode: '711940001',
                        UnitNum: '2',
                        Time: '20.07.2022 17:22:21',
                        Situation: '3',
                    },
                    LoginPerson: [
                        {
                            _: 'Эльшад',
                            $: {
                                Code: '20',
                                ptype: 'Бармены',
                                Name: 'Эльшад',
                            },
                        },
                    ],
                },
            ],
            Waiter: [
                {
                    _: 'Эльшад',
                    $: {
                        Code: '20',
                        ptype: 'Бармены',
                        Name: 'Эльшад',
                    },
                },
            ],
            CheckLines: [
                {
                    $: {
                        count: '3',
                    },
                    CheckLine: [
                        {
                            _: 'Итальянский с говядиной 220\r\n',
                            $: {
                                Code: '509',
                                Price: '360.00',
                                Qnt: '1.00',
                                Name: 'Итальянский с говядиной 220',
                                DishUNI: '4',
                            },
                        },
                        {
                            _: 'Хлеб белый, черный\r\n',
                            $: {
                                Code: '579',
                                Price: '25.00',
                                Qnt: '1.00',
                                Name: 'Хлеб белый, черный',
                                DishUNI: '8',
                            },
                        },
                        {
                            _: 'Латте\r\n',
                            $: {
                                Code: '326',
                                Price: '170.00',
                                Qnt: '1.00',
                                Name: 'Латте',
                                New: 'true',
                                DishUNI: '11',
                            },
                        },
                    ],
                },
            ],
        },
    },
    printerData6: {
        ScreenCheck: {
            $: {
                Table: '3',
                Situation: '3',
                Sum: '555.00',
            },
            SysParams: [
                {
                    $: {
                        RestCode: '711940001',
                        UnitNum: '2',
                        Time: '20.07.2022 17:22:21',
                        Situation: '3',
                    },
                    LoginPerson: [
                        {
                            _: 'Эльшад',
                            $: {
                                Code: '20',
                                ptype: 'Бармены',
                                Name: 'Эльшад',
                            },
                        },
                    ],
                },
            ],
            Waiter: [
                {
                    _: 'Эльшад',
                    $: {
                        Code: '20',
                        ptype: 'Бармены',
                        Name: 'Эльшад',
                    },
                },
            ],
            CheckLines: [
                {
                    $: {
                        count: '3',
                    },
                    CheckLine: [
                        {
                            _: 'Итальянский с говядиной 220\r\n',
                            $: {
                                Code: '509',
                                Price: '360.00',
                                Qnt: '0',
                                Name: 'Итальянский с говядиной 220',
                                DishUNI: '4',
                            },
                        },
                        {
                            _: 'Хлеб белый, черный\r\n',
                            $: {
                                Code: '579',
                                Price: '25.00',
                                Qnt: '1.00',
                                Name: 'Хлеб белый, черный',
                                DishUNI: '8',
                            },
                        },
                        {
                            _: 'Латте\r\n',
                            $: {
                                Code: '326',
                                Price: '170.00',
                                Qnt: '1.00',
                                Name: 'Латте',
                                New: 'true',
                                DishUNI: '11',
                            },
                        },
                    ],
                },
            ],
        },
    },
    printerData7: {
        ScreenCheck: {
            $: { Table: '19', Situation: '3', Sum: '0.00' },
            SysParams: [{
                $: {
                    RestCode: '711940001', UnitNum: '2', Time: '26.07.2022 10:24:49', Situation: '3',
                },
                LoginPerson: [{ _: 'Виктория', $: { Code: '6', ptype: 'Бармены', Name: 'Виктория' } }],
            }],
            Waiter: [{ _: 'Виктория', $: { Code: '6', ptype: 'Бармены', Name: 'Виктория' } }],
            CheckLines: [{
                $: { count: '21' },
                CheckLine: [{
                    _: 'Яичница глазунья 1 яйцо\r\n',
                    $: {
                        Code: '1175', Price: '0.00', Qnt: '7.00', Name: 'Яичница глазунья 1 яйцо', Store: 'true', DishUNI: '4',
                    },
                }, {
                    _: 'Яичница глазунья 1 яйцо\r\n',
                    $: {
                        Code: '1175', Price: '0.00', Qnt: '0.00', Name: 'Яичница глазунья 1 яйцо', DishUNI: '402',
                    },
                }, {
                    _: 'Яичница глазунья 1 яйцо\r\n',
                    $: {
                        Code: '1175', Price: '0.00', Qnt: '7.00', Name: 'Яичница глазунья 1 яйцо', New: 'true', DishUNI: '406',
                    },
                }, {
                    _: 'Сосиска\r\n',
                    $: {
                        Code: '1176', Price: '0.00', Qnt: '7.00', Name: 'Сосиска', Store: 'true', DishUNI: '102',
                    },
                }, {
                    _: 'Запеканка творожная\r\n',
                    $: {
                        Code: '1183', Price: '0.00', Qnt: '4.50', Name: 'Запеканка творожная', Store: 'true', DishUNI: '202',
                    },
                }, {
                    _: 'Яйцо отварное\r\n',
                    $: {
                        Code: '1179', Price: '0.00', Qnt: '10.00', Name: 'Яйцо отварное', Store: 'true', DishUNI: '205',
                    },
                }, {
                    _: 'Яичница глазунья 1 яйцо\r\n',
                    $: {
                        Code: '1175', Price: '0.00', Qnt: '10.00', Name: 'Яичница глазунья 1 яйцо', Store: 'true', DishUNI: '208',
                    },
                }, {
                    _: 'Сосиска\r\n',
                    $: {
                        Code: '1176', Price: '0.00', Qnt: '15.00', Name: 'Сосиска', Store: 'true', DishUNI: '211',
                    },
                }, {
                    _: 'Блины с творогом\r\n',
                    $: {
                        Code: '1180', Price: '0.00', Qnt: '15.00', Name: 'Блины с творогом', Store: 'true', DishUNI: '214',
                    },
                }, {
                    _: 'Салат из свеклы\r\n',
                    $: {
                        Code: '1217', Price: '0.00', Qnt: '2.50', Name: 'Салат из свеклы', Store: 'true', DishUNI: '217',
                    },
                }, {
                    _: 'Нарезка огурцы\r\n',
                    $: {
                        Code: '1170', Price: '0.00', Qnt: '0.50', Name: 'Нарезка огурцы', Store: 'true', DishUNI: '220',
                    },
                }, {
                    _: 'Нарезка помидоры\r\n',
                    $: {
                        Code: '1177', Price: '0.00', Qnt: '0.50', Name: 'Нарезка помидоры', Store: 'true', DishUNI: '225',
                    },
                }, {
                    _: 'Майонез\r\n',
                    $: {
                        Code: '1218', Price: '0.00', Qnt: '0.10', Name: 'Майонез', Store: 'true', DishUNI: '229',
                    },
                }, {
                    _: 'Каша рисовая на молоке\r\n',
                    $: {
                        Code: '1185', Price: '0.00', Qnt: '6.00', Name: 'Каша рисовая на молоке', Store: 'true', DishUNI: '233',
                    },
                }, {
                    _: 'Каша овсяная на молоке\r\n',
                    $: {
                        Code: '1184', Price: '0.00', Qnt: '6.00', Name: 'Каша овсяная на молоке', Store: 'true', DishUNI: '236',
                    },
                }, {
                    _: 'Омлет\r\n',
                    $: {
                        Code: '1173', Price: '0.00', Qnt: '2.00', Name: 'Омлет', Store: 'true', DishUNI: '239',
                    },
                }, {
                    _: 'Молоко\r\n',
                    $: {
                        Code: '1199', Price: '0.00', Qnt: '1.00', Name: 'Молоко', Store: 'true', DishUNI: '242',
                    },
                }, {
                    _: 'Аджика\r\n',
                    $: {
                        Code: '1221', Price: '0.00', Qnt: '0.20', Name: 'Аджика', Store: 'true', DishUNI: '245',
                    },
                }, {
                    _: 'Сметана\r\n',
                    $: {
                        Code: '1197', Price: '0.00', Qnt: '0.60', Name: 'Сметана', Store: 'true', DishUNI: '249',
                    },
                }, {
                    _: 'Нарезка сыр Российский\r\n',
                    $: {
                        Code: '1172', Price: '0.00', Qnt: '0.10', Name: 'Нарезка сыр Российский', Store: 'true', DishUNI: '253',
                    },
                }, {
                    _: 'Блины с творогом\r\n',
                    $: {
                        Code: '1180', Price: '150.00', Qnt: '0.00', Name: 'Блины с творогом', Store: 'true', DishUNI: '302',
                    },
                }],
            }],
        },
    },
    printerData8: {
        ScreenCheck: {
            $: { Table: '403 Н', Situation: '3', Sum: '1520.00' },
            SysParams: [{
                $: {
                    RestCode: '711940001', UnitNum: '2', Time: '26.07.2022 10:59:54', Situation: '3',
                },
                LoginPerson: [{ _: 'Виктория', $: { Code: '6', ptype: 'Бармены', Name: 'Виктория' } }],
            }],
            Waiter: [{ _: 'Виктория', $: { Code: '6', ptype: 'Бармены', Name: 'Виктория' } }],
            CheckLines: [{
                $: { count: '3' },
                CheckLine: [{
                    _: 'Вода негазир. "Тбау"\r\n',
                    $: {
                        Code: '589', Price: '90.00', Qnt: '4.00', Name: 'Вода негазир. "Тбау"', DishUNI: '4',
                    },
                }, {
                    _: 'Сигаретный набор\r\n',
                    $: {
                        Code: '261', Price: '400.00', Qnt: '2.00', Name: 'Сигаретный набор', DishUNI: '8',
                    },
                }, {
                    _: 'Американо\r\n',
                    $: {
                        Code: '324', Price: '120.00', Qnt: '0.00', Name: 'Американо', New: 'true', DishUNI: '11',
                    },
                }],
            }],
        },
    },
    printerData9: {
        ScreenCheck: {
            $: { Table: '8.1', Situation: '3', Sum: '0.00' },
            SysParams: [{
                $: {
                    RestCode: '711940001', UnitNum: '2', Time: '26.07.2022 16:30:35', Situation: '3',
                },
                LoginPerson: [{ _: 'Антон', $: { Code: '19', ptype: 'АдминистраторыNew', Name: 'Антон' } }],
            }],
            Waiter: [{ _: 'Виктория', $: { Code: '6', ptype: 'Бармены', Name: 'Виктория' } }],
            CheckLines: [{
                $: { count: '1' },
                CheckLine: [{
                    _: 'Курица Формаджо 250гр\r\n',
                    $: {
                        Code: '458', Price: '410.00', Qnt: '0.00', Name: 'Курица Формаджо 250гр', Store: 'true', DishUNI: '4',
                    },
                }],
            }],
        },
    },
    printerData10: {
        ScreenCheck: {
            $: { Table: 'Хамам', Situation: '3', Sum: '0.00' },
            SysParams: [{
                $: {
                    RestCode: '711940001', UnitNum: '2', Time: '26.07.2022 17:52:12', Situation: '3',
                },
                LoginPerson: [{ _: 'Антон', $: { Code: '19', ptype: 'АдминистраторыNew', Name: 'Антон' } }],
            }],
            Waiter: [{ _: 'Виктория', $: { Code: '6', ptype: 'Бармены', Name: 'Виктория' } }],
            CheckLines: [{
                $: { count: '2' },
                CheckLine: [{
                    _: 'Чай "молочный улунг" 900 мл\r\n',
                    $: {
                        Code: '315', Price: '350.00', Qnt: '0.00', Name: 'Чай "молочный улунг" 900 мл', Store: 'true', DishUNI: '4',
                    },
                }, {
                    _: 'Вода газир. "Тбау"\r\n',
                    $: {
                        Code: '664', Price: '95.00', Qnt: '0.00', Name: 'Вода газир. "Тбау"', Store: 'true', DishUNI: '8',
                    },
                }],
            }],
        },
    },
};
