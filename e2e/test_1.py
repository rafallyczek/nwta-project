import unittest
from selenium import webdriver
import time
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec


class TitleTests(unittest.TestCase):
    driver = None

    def setUp(self):
        pass

    @classmethod
    def setUpClass(cls):
        cls.driver = webdriver.Chrome(executable_path='chromedriver.exe')

    def test_home_page_title(self):
        driver = self.driver
        driver.get('http://localhost:4200/home')
        title = driver.title
        print(title)
        assert title == 'NwtaProject'

    def test_books_page_title(self):
        driver = self.driver
        driver.get('http://localhost:4200/books')
        title = driver.title
        print(title)
        assert title == 'NwtaProject'

    def test_login_page_title(self):
        driver = self.driver
        driver.get('http://localhost:4200/login')
        title = driver.title
        print(title)
        assert title == 'NwtaProject'

    def test_addBook_page_title(self):
        driver = self.driver
        driver.get('http://localhost:4200/login')
        login_input = driver.find_element_by_name('login')
        login_input.send_keys('test')
        password_input = driver.find_element_by_name('password')
        password_input.send_keys('test')
        driver.find_element_by_id("submit").click()
        time.sleep(2)
        driver.get('http://localhost:4200/addBook')
        title = driver.title
        print(title)
        assert title == 'NwtaProject'
        driver.find_element_by_id("logout").click()
        time.sleep(2)

    def tearDown(self):
        pass

    @classmethod
    def tearDownClass(cls):
        cls.driver.quit()


class FooterTextTests(unittest.TestCase):
    driver = None

    def setUp(self):
        pass

    @classmethod
    def setUpClass(cls):
        cls.driver = webdriver.Chrome(executable_path='chromedriver.exe')

    def test_home_page_footerText(self):
        driver = self.driver
        driver.get('http://localhost:4200/home')
        element = driver.find_element_by_class_name('footer')
        print(element.text)
        self.assertIn("Paweł Piotrowski, Rafał Łyczek", element.text)

    def test_books_page_footerText(self):
        driver = self.driver
        driver.get('http://localhost:4200/books')
        element = driver.find_element_by_class_name('footer')
        print(element.text)
        self.assertIn("Paweł Piotrowski, Rafał Łyczek", element.text)

    def test_login_page_footerText(self):
        driver = self.driver
        driver.get('http://localhost:4200/login')
        element = driver.find_element_by_class_name('footer')
        print(element.text)
        self.assertIn("Paweł Piotrowski, Rafał Łyczek", element.text)

    def test_addBook_page_footerText(self):
        driver = self.driver
        driver.get('http://localhost:4200/login')
        login_input = driver.find_element_by_name('login')
        login_input.send_keys('test')
        password_input = driver.find_element_by_name('password')
        password_input.send_keys('test')
        driver.find_element_by_id("submit").click()
        time.sleep(2)
        driver.get('http://localhost:4200/addBook')
        element = driver.find_element_by_class_name('footer')
        print(element.text)
        self.assertIn("Paweł Piotrowski, Rafał Łyczek", element.text)
        driver.find_element_by_id("logout").click()
        time.sleep(2)

    def tearDown(self):
        pass

    @classmethod
    def tearDownClass(cls):
        cls.driver.quit()


class FormTests(unittest.TestCase):
    driver = None

    def setUp(self):
        pass

    @classmethod
    def setUpClass(cls):
        cls.driver = webdriver.Chrome(executable_path='chromedriver.exe')

    def test_addBook_page_form(self):
        driver = self.driver
        driver.get('http://localhost:4200/login')
        login_input = driver.find_element_by_name('login')
        login_input.send_keys('test')
        password_input = driver.find_element_by_name('password')
        password_input.send_keys('test')
        driver.find_element_by_id("submit").click()
        time.sleep(2)
        driver.get('http://localhost:4200/addBook')
        title_input = driver.find_element_by_name('title')
        title_input.send_keys('testbook')
        author_input = driver.find_element_by_name('author')
        author_input.send_keys('testauthor')
        year_input = driver.find_element_by_name('year')
        year_input.send_keys('testyear')
        genre_input = driver.find_element_by_name('genre')
        genre_input.send_keys('testgenre')
        driver.find_element_by_id("submit").click()
        time.sleep(2)
        driver.refresh()
        time.sleep(2)
        driver.maximize_window()
        test_values = ['testbook', 'testauthor', 'testyear', 'testgenre']
        info_boxes = driver.find_elements_by_class_name('bookInfoBox')
        texts = []
        for i in range(len(info_boxes)):
            texts.append(info_boxes[i].text)
        for text in texts:
            if text in test_values:
                assert text in test_values
        book = WebDriverWait(driver, 10) \
            .until(ec.visibility_of_element_located((By.XPATH, "//div[contains(text(), 'testgenre')]")))
        ActionChains(driver).move_to_element(book).perform()
        button = WebDriverWait(driver, 10) \
            .until(ec.visibility_of_element_located((By.XPATH, "//div[contains(text(), "
                                                               "'testgenre')]/following-sibling::div/button")))
        button.click()
        logout = WebDriverWait(driver, 10) \
            .until(ec.visibility_of_element_located((By.XPATH, "//button[@id='logout']")))
        logout.click()

    def tearDown(self):
        pass

    @classmethod
    def tearDownClass(cls):
        cls.driver.quit()