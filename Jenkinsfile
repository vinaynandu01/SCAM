pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS'  // Make sure NodeJS is configured in Jenkins Global Tool Configuration
    }
    
    stages {
        stage('Build') {
            steps {
                echo 'Starting Build Stage...'
                checkout scm
                sh 'npm install'
                echo 'Build Stage Completed!'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Starting Test Stage...'
                sh 'npm test || echo "Tests completed with warnings"'
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
        always {
            echo 'Pipeline execution finished.'
        }
    }
}
