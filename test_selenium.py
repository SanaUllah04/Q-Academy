import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

# Start the Chrome browser
driver = webdriver.Chrome()

try:
    # 1. Open a website
    driver.get("https://www.google.com")
    
    # 2. Find the search box element (its HTML name attribute is 'q')
    search_box = driver.find_element(By.NAME, "q")
    
    # 3. Type into the box and press Enter
    search_box.send_keys("Selenium automation" + Keys.RETURN)
    
    # 4. Wait 5 seconds to look at the results
    time.sleep(5)

finally:
    # 5. Always close the browser when done
    driver.quit()