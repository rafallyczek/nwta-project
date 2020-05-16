import unittest
from selenium import webdriver
class MainTests(unittest.TestCase):
    def setUp(self):
        print('Rozpoczynam test.')
    @classmethod
    def setUpClass(self):
        self.driver = webdriver.Chrome(executable_path='C:\TestFiles\chromedriver.exe')
    def test_title(self):
        driver = self.driver
        driver.get('http://localhost:4200/home')
        title = driver.title
        print(title)
        assert title == 'NwtaProject'
    def tearDown(self):
        print('Test zakończony.')
    @classmethod
    def tearDownClass(self):
        self.driver.quit()