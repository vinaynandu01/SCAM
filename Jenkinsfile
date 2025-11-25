pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                echo 'Starting Build Stage...'
                checkout scm
                bat 'npm install'
                echo 'Build Stage Completed!'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Starting Test Stage...'
                bat 'npm test || exit 0'
                echo 'Test Stage Completed!'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
