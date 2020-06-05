import unittest
from selenium import webdriver
import time
class TitleTests(unittest.TestCase):
    def setUp(self):
        pass
    @classmethod
    def setUpClass(self):
        self.driver = webdriver.Chrome(executable_path='chromedriver.exe')
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
        loginInput = driver.find_element_by_name('login')
        loginInput.send_keys('test')
        passwordInput = driver.find_element_by_name('password')
        passwordInput.send_keys('test')
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
    def tearDownClass(self):
        self.driver.quit()

class FooterTextTests(unittest.TestCase):
    def setUp(self):
        pass
    @classmethod
    def setUpClass(self):
        self.driver = webdriver.Chrome(executable_path='chromedriver.exe')
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
        loginInput = driver.find_element_by_name('login')
        loginInput.send_keys('test')
        passwordInput = driver.find_element_by_name('password')
        passwordInput.send_keys('test')
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
    def tearDownClass(self):
        self.driver.quit()

class FormTests(unittest.TestCase):
    def setUp(self):
        pass
    @classmethod
    def setUpClass(self):
        self.driver = webdriver.Chrome(executable_path='chromedriver.exe')
    def test_addBook_page_form(self):
        driver = self.driver
        driver.get('http://localhost:4200/login')
        loginInput = driver.find_element_by_name('login')
        loginInput.send_keys('test')
        passwordInput = driver.find_element_by_name('password')
        passwordInput.send_keys('test')
        driver.find_element_by_id("submit").click()
        time.sleep(2)
        driver.get('http://localhost:4200/addBook')
        titleInput = driver.find_element_by_name('title')
        titleInput.send_keys('testbook')
        authorInput = driver.find_element_by_name('author')
        authorInput.send_keys('testauthor')
        yearInput = driver.find_element_by_name('year')
        yearInput.send_keys('testyear')
        genreInput = driver.find_element_by_name('genre')
        genreInput.send_keys('testgenre')
        driver.find_element_by_id("submit").click()
        time.sleep(2)
        driver.refresh()
        test_values = ['testbook', 'testauthor', 'testyear', 'testgenre']
        info_boxes = driver.find_elements_by_class_name('bookInfoBox')
        texts = []
        for i in range(len(info_boxes)):
            texts.append(info_boxes[i].text)
        for text in texts:
            if text in test_values:
                assert text in test_values
    def tearDown(self):
        pass
    @classmethod
    def tearDownClass(self):
        self.driver.quit()