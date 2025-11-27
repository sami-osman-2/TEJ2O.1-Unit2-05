"""
Copyright (c) 2025 MTHS All rights reserved
Created by: Sami Osman
Created on: Nov 2025
Program gets the current temperature, converts it to Kelvin, rounds it, and displays it.
"""
from microbit import *

# variable for temperature
temp_c = 0
temp_k = 0

display.show(Image.HAPPY)

while True:
    if button_a.was_pressed():
        # get temp in Celsius
        temp_c = temperature()
        
        # convert to Kelvin
        temp_k = temp_c + 273.15
        temp_k = round(temp_k)
        
        # output answer
        display.scroll(str(temp_k) + " K")
