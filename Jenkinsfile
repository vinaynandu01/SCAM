pipeline {
    agent any
    
    // This allows manual triggering only (no automatic builds)
    triggers {
        // Empty - pipeline will only run when manually triggered
    }
    
    stages {
        stage('Build') {
            steps {
                echo 'Starting Build Stage...'
                checkout scm
                sh 'npm ci'
                sh 'docker build -t smart-attendance:latest .'
                echo 'Build Stage Completed!'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Starting Test Stage...'
                sh 'npm test'
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
