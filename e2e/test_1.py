import unittest
from selenium import webdriver
class TitleTests(unittest.TestCase):
    def setUp(self):
        # print('Rozpoczynam test.')
        pass
    @classmethod
    def setUpClass(self):
        # self.driver = webdriver.Chrome(executable_path='C:\TestFiles\chromedriver.exe')
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
    def test_addBook_page_title(self):
        driver = self.driver
        driver.get('http://localhost:4200/addBook')
        title = driver.title
        print(title)
        assert title == 'NwtaProject'
    def tearDown(self):
        # print('Test zakończony.')
        pass
    @classmethod
    def tearDownClass(self):
        self.driver.quit()

class FooterTextTests(unittest.TestCase):
    def setUp(self):
        # print('Rozpoczynam test.')
        pass
    @classmethod
    def setUpClass(self):
        # self.driver = webdriver.Chrome(executable_path='C:\TestFiles\chromedriver.exe')
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
    def test_addBook_page_footerText(self):
        driver = self.driver
        driver.get('http://localhost:4200/addBook')
        element = driver.find_element_by_class_name('footer')
        print(element.text)
        self.assertIn("Paweł Piotrowski, Rafał Łyczek", element.text)
    def tearDown(self):
        # print('Test zakończony.')
        pass
    @classmethod
    def tearDownClass(self):
        self.driver.quit()

class FormTests(unittest.TestCase):
    def setUp(self):
        # print('Rozpoczynam test.')
        pass
    @classmethod
    def setUpClass(self):
        # self.driver = webdriver.Chrome(executable_path='C:\TestFiles\chromedriver.exe')
        self.driver = webdriver.Chrome(executable_path='chromedriver.exe')
    def test_addBook_page_form(self):
        driver = self.driver
        driver.get('http://localhost:4200/addBook')
        titleInput = driver.find_element_by_name('title')
        titleInput.send_keys('Książka')
        authorInput = driver.find_element_by_name('author')
        authorInput.send_keys('Autor')
        yearInput = driver.find_element_by_name('year')
        yearInput.send_keys('2020')
        genreInput = driver.find_element_by_name('genre')
        genreInput.send_keys('IT')
        driver.find_element_by_id("submit").click()
        for index, element in enumerate(driver.find_elements_by_class_name('bookInfoBox')):
            if index==16:
                print(element.text)
                self.assertIn("Książka", element.text)
            if index==17:
                print(element.text)
                self.assertIn("Autor", element.text)
            if index==18:
                print(element.text)
                self.assertIn("2020", element.text)
            if index==19:
                print(element.text)
                self.assertIn("IT", element.text)
    def tearDown(self):
        # print('Test zakończony.')
        pass
    @classmethod
    def tearDownClass(self):
        self.driver.quit()