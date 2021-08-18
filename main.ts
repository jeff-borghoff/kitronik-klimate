OLED12864_I2C.init(60)
basic.forever(function () {
    OLED12864_I2C.showString(
    0,
    0,
    "" + Kitronik_klimate.pressure(Kitronik_klimate.PressureUnitList.Pa) + Kitronik_klimate.temperature(Kitronik_klimate.TemperatureUnitList.C) + Kitronik_klimate.humidity() + kitronik_RTC.readTime() + kitronik_RTC.readDate(),
    1
    )
})
